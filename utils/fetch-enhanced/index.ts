import { ERROR_CODE_NETWORK } from './constants';
import CustomErrorFetch from './custom-error-fetch';
import type { SomeError } from './types';

const httpsMethods = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'HEAD',
    'OPTIONS',
    // 'CONNECT',
    // 'TRACE',
];

export type FetchResource = RequestInfo | URL;

// param names: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
export const fetchEnhanced = async (
    resource: FetchResource,
    init: RequestInit = {},
) => {
    let response: Response;

    try {
        if (init.method && !httpsMethods.includes(init.method.toUpperCase())) {
            throw new Error(
                `Use one these methods (lowercase or uppercase): ${httpsMethods.join(
                    ', ',
                )}`,
            );
        }

        if (init.method) {
            init.method = init.method.toUpperCase();
        }

        response = await fetch(resource, init);

        if (!response.ok) {
            throw new CustomErrorFetch({
                code:
                    (response?.status && `NET_${response.status}`) ||
                    ERROR_CODE_NETWORK.NET_GENERIC,
                messageDefault: 'Response not ok',
                request: { url: resource } as Request,
                response,
            });
        }
    } catch (error) {
        const errorTyped = error as SomeError;

        if (errorTyped instanceof CustomErrorFetch) {
            throw error;
        }

        const request = { url: resource } as Request;

        // https://github.com/github/fetch/issues/201#issuecomment-403010358 no error.response === failed/aborted/net error

        // chrome: status = (canceled) for requests
        if (error instanceof DOMException && errorTyped.name === 'AbortError') {
            throw new CustomErrorFetch({
                aborted: true,
                code: ERROR_CODE_NETWORK.NET_FETCH_ABORTED,
                error: errorTyped,
                messageDefault:
                    errorTyped.message || 'Request aborted default message',
                request,
            });
        }

        // net::ERR_CONNECTION_REFUSED, net::ERR_EMPTY_RESPONSE, net::ERR_NAME_NOT_RESOLVED Failed to fetch here
        // chrome: status = (failed) for errors, TypeError with `Failed to fetch` message
        // plus other errors, eg. NetworkError
        throw new CustomErrorFetch({
            code: ERROR_CODE_NETWORK.NET_FAILED_TO_FETCH,
            error: errorTyped,
            failedToFetch: true,
            messageDefault:
                errorTyped.message || 'Failed to fetch default message',
            request,
        });
    }

    return response;
};

export const fetchJson = async <T>(
    resource: FetchResource,
    init: RequestInit = {},
) => {
    init.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...init.headers,
    };

    const response = await fetchEnhanced(resource, init);
    const data = (await response.json()) as T;

    return data;
};

// // pathnamePlus = pathname + search (+ hash)
// export const fetchJsonRest = async <T>(pathnamePlus: string, init: RequestInit = {}) => {
//   const data = await fetchJson<T>(config.rest + pathnamePlus, init);

//   return data;
// };

export const fetchText = async (
    resource: FetchResource,
    init: RequestInit = {},
) => {
    init.headers = {
        Accept: 'text/plain',
        'Content-Type': 'text/plain',
        ...init.headers,
    };

    const response = await fetchEnhanced(resource, init);
    const data = await response.text();

    return data;
};

// // 'test' for vitest
// if (import.meta.env.MODE !== 'test' && import.meta.env.DEV) {
//   window.dev = window.dev || {};
//   window.dev.fetchEnhanced = fetchEnhanced;
//   window.dev.fetchJson = fetchJson;
// }
