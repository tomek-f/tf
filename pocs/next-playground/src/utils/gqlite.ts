import type { Nullable } from '../types/misc';

type GQLiteSomeObject = object;
type GQLiteSomeError = Error & GQLiteSomeObject;

enum GQLiteErrors {
    ERR_NET_NOT_OK = 'ERR_NET_NOT_OK',
    ERR_NET_NOT_GRAPHQL = 'ERR_NET_NOT_GRAPHQL',
    ERR_NET_GRAPHQL_ERRORS = 'ERR_NET_GRAPHQL_ERRORS',
    ERR_NET_FAILED_TO_FETCH = 'ERR_NET_FAILED_TO_FETCH',
    ERR_NET_FETCH_ABORTED = 'ERR_NET_FETCH_ABORTED',
    ERR_NET_GENERIC = 'ERR_NET_GENERIC',
}

interface GQLiteErrorData {
    message: string;
    extensions: {
        code: string;
        path: string;
    };
}

type GQLiteResultSingle<T> =
    | { data: never; errors: GQLiteErrorData[] }
    | { data: T; errors: never };

type GQLiteResult<T> =
    | (T extends [] ? GQLiteResultSingle<T>[] : GQLiteResultSingle<T>)
    | string;

async function getResult<T>(response: Response) {
    const contentType = response.headers.get('Content-Type');

    if (contentType && contentType.startsWith('application/json')) {
        return response.json() as Promise<T>;
    }

    return response.text();
}

function headersJSON(object?: HeadersInit) {
    return new Headers({ 'Content-Type': 'application/json', ...object });
}

function checkResults<T>(result: GQLiteResultSingle<T>) {
    return !!result?.data && !result?.errors;
}

interface GQLitePayload {
    query: string;
    variables: GQLiteSomeObject;
    operationName?: string;
}

export interface GQLiteInit
    extends Partial<GQLitePayload>,
        Partial<Omit<RequestInit, 'body'>> {
    body?: GQLitePayload | GQLitePayload[];
    rawRequest?: boolean;
}

interface GQLiteErrorInfo<K> {
    result?: Nullable<GQLiteResult<K>>;
    status?: Nullable<number>;
    error?: Nullable<Error>;
}

class GQLiteError<K> extends Error {
    result: Nullable<GQLiteResult<K>>;

    status: Nullable<number>;

    constructor(
        message: Nullable<string>,
        { result = null, status = null, error = null }: GQLiteErrorInfo<K>,
    ) {
        const errorMessage =
            (error instanceof Error && error.message) ||
            message ||
            GQLiteErrors.ERR_NET_GENERIC;

        super(errorMessage);

        this.result = result;
        this.status = status;

        if (error instanceof Error && error.stack) {
            this.stack = error.stack; // for rethrowing
        } else if (typeof Error.captureStackTrace === 'function') {
            // Error.captureStackTrace(this, GQLiteError);
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

const gqlite = async <T, E extends Error = GQLiteSomeError>(
    input: RequestInfo | URL,
    {
        query,
        variables,
        operationName,
        body,
        headers,
        rawRequest = false,
        ...init
    }: GQLiteInit,
): Promise<T> => {
    // console.log('gqlite', input, {
    //   query,
    //   variables,
    //   operationName,
    //   body,
    //   headers,
    //   rawRequest,
    //   init,
    // });

    if (Array.isArray(body) && !rawRequest) {
        throw new Error(
            'gqlite: for batch requests, set `rawRequest` to `true`',
        );
    }

    let result: Nullable<GQLiteResult<T>> = null;
    let status: Nullable<number> = null;

    try {
        const response = await fetch(input, {
            body: JSON.stringify(
                body || {
                    query,
                    variables,
                    // eslint-disable-next-line sort-keys
                    operationName,
                },
            ),
            headers: headersJSON(headers),
            method: 'POST',
            ...init,
        });

        // console.log({ response });

        status = response.status;

        if (!response.ok) {
            throw new GQLiteError<T>(GQLiteErrors.ERR_NET_NOT_OK, {
                result,
                status,
            });
        }

        result = await getResult<GQLiteResult<T>>(response);

        // not an object && not an array -> string
        if (typeof result !== 'object') {
            throw new GQLiteError<T>(GQLiteErrors.ERR_NET_NOT_GRAPHQL, {
                result,
                status,
            });
        }

        if (
            result &&
            ((Array.isArray(result) &&
                !result.every((item) => checkResults(item))) ||
                (!Array.isArray(result) && !checkResults(result)))
        ) {
            throw new GQLiteError(GQLiteErrors.ERR_NET_GRAPHQL_ERRORS, {
                result,
                status,
            });
        }

        if (
            !rawRequest &&
            !Array.isArray(result) &&
            result &&
            checkResults(result)
        ) {
            return result.data;
        }

        return result as T;
    } catch (error_) {
        const error = error_ as GQLiteError<T> | E;
        const isDOMException = error instanceof DOMException;
        const isAbortError = isDOMException || error.name === 'AbortError';

        // console.log(err, { ...(err as E) }, { isDOMException, isAbortError });

        // already processed
        if (error instanceof GQLiteError) {
            throw error;
        }

        if (!isAbortError) {
            throw new GQLiteError(GQLiteErrors.ERR_NET_FAILED_TO_FETCH, {
                result,
                status,
            });
        }

        if (isAbortError) {
            throw new GQLiteError(GQLiteErrors.ERR_NET_FETCH_ABORTED, {
                result,
                status,
            });
        }

        // Justin Case, re-throw with original stack
        throw new GQLiteError(GQLiteErrors.ERR_NET_GENERIC, {
            error,
            result,
            status,
        });
    }
};

export default gqlite;
