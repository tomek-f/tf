import { ERROR_CODE_NETWORK } from './constants';
import type { Nullable, SomeError } from './types';

export interface CustomRequest extends Omit<Request, 'url'> {
    query?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    url: string | URL | any;
}

export interface CustomErrorFetchParametersObject {
    aborted?: boolean;
    code?: string;
    error?: Error | SomeError | string;
    failedToFetch?: boolean;
    messageDefault?: string;
    request?: CustomRequest;
    response?: Response;
}

export default class CustomErrorFetch extends Error {
    aborted: boolean;

    code: string;

    failedToFetch: boolean;

    request?: Nullable<CustomRequest>;

    response?: Nullable<Response>;

    constructor({
        aborted = false,
        code = ERROR_CODE_NETWORK.NET_GENERIC,
        error,
        failedToFetch = false,
        messageDefault,
        request,
        response,
    }: CustomErrorFetchParametersObject = {}) {
        const message =
            (error instanceof Error && error.message) ||
            (typeof error === 'string' && error) ||
            messageDefault ||
            'Something went wrong';

        super(message);

        if (error instanceof Error && error.stack) {
            this.stack = error.stack; // for rethrowing
        } else if (typeof Error.captureStackTrace === 'function') {
            // Maintains proper stack trace for where our error was thrown (only available on V8)
            // if no stack (no error)
            // Error.captureStackTrace(this, CustomError);
            Error.captureStackTrace(this, this.constructor);
        }

        this.aborted = aborted;
        this.code = code;
        this.failedToFetch = failedToFetch;
        this.request = request ? { ...request } : request;
        this.response = response ? { ...response } : response;

        if (!this.request) {
            return;
        }

        if (this.request.url instanceof URL) {
            this.request.url = this.request.url.toString();
        }

        if (typeof this.request.url !== 'string') {
            this.request.url = String(this.request.url);
        }
    }
}
