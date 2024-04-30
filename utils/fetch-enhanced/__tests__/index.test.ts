import { afterEach, describe, expect, test, vi } from 'vitest';

import { fetchEnhanced, fetchJson, fetchText } from '..';
import type CustomErrorFetch from '../custom-error-fetch';
import type { SomeObject } from '../types';

type FetchEnhancedTypes =
    | typeof fetchEnhanced
    | typeof fetchJson
    | typeof fetchText;

function wrongMethod<T extends FetchEnhancedTypes>(fetchFunction: T) {
    test('wrong method', async () => {
        await expect(
            fetchFunction('/', {
                method: 'GET1',
            }),
        ).rejects.toThrow(
            'Use one these methods (lowercase or uppercase): GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
        );
        await expect(
            fetchFunction('/', {
                method: 'elo',
            }),
        ).rejects.toThrow(
            'Use one these methods (lowercase or uppercase): GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
        );
    });
}

function responseOk<T extends FetchEnhancedTypes>(
    fetchFunction: T,
    data: SomeObject | string,
    processFunction = (value: Response) => Promise.resolve(value),
) {
    test('response ok', async () => {
        global.fetch = vi.fn().mockImplementation(
            () =>
                ({
                    json: () => new Promise((resolve) => resolve(data)),
                    ok: true,
                    text: () => new Promise((resolve) => resolve(String(data))),
                }) as Response,
        );

        const response = await fetchFunction('/');

        await expect(processFunction(response as Response)).resolves.toEqual(
            data,
        );
    });
}

function responseNotOk<T extends FetchEnhancedTypes>(fetchFunction: T) {
    test('response not ok', async () => {
        global.fetch = vi
            .fn()
            .mockImplementation(() =>
                Promise.resolve({ ok: false, status: 404 } as Response),
            );

        await expect(fetchFunction('/')).rejects.toThrow('Response not ok');

        try {
            await fetchFunction('/');
        } catch (error) {
            const errorTyped = error as CustomErrorFetch;

            await expect(errorTyped.code).toBe('NET_404');
            await expect(errorTyped.failedToFetch).toBe(false);
            await expect(errorTyped.aborted).toBe(false);
        }
    });
}

function failedTofetch<T extends FetchEnhancedTypes>(fetchFunction: T) {
    test('failed to fetch', async () => {
        global.fetch = vi.fn().mockImplementation(() => {
            throw new TypeError('Failed to fetch');
        });

        await expect(fetchFunction('/')).rejects.toThrow('Failed to fetch');

        try {
            await fetchFunction('/');
        } catch (error) {
            const errorTyped = error as CustomErrorFetch;

            await expect(errorTyped.code).toBe('NET_FAILED_TO_FETCH');
            await expect(errorTyped.failedToFetch).toBe(true);
            await expect(errorTyped.aborted).toBe(false);
        }
    });
}

function aborted<T extends FetchEnhancedTypes>(fetchFunction: T) {
    test('aborted', async () => {
        global.fetch = vi.fn().mockImplementation(() => {
            throw new DOMException('Mission abort!', 'AbortError');
        });

        await expect(fetchFunction('/')).rejects.toThrow('Mission abort!');

        try {
            await fetchFunction('/');
        } catch (error) {
            const errorTyped = error as CustomErrorFetch;

            await expect(errorTyped.code).toBe('NET_FETCH_ABORTED');
            await expect(errorTyped.failedToFetch).toBe(false);
            await expect(errorTyped.aborted).toBe(true);
        }
    });
}

afterEach(() => {
    vi.restoreAllMocks();
});

describe('fetchEnhanced', () => {
    wrongMethod(fetchEnhanced);

    responseOk(
        fetchEnhanced,
        { rates: 1 },
        (response) => response.json() as Promise<Response>,
    );

    responseNotOk(fetchEnhanced);

    failedTofetch(fetchEnhanced);

    aborted(fetchEnhanced);
});

describe('fetchJson', () => {
    wrongMethod(fetchJson);

    responseOk(fetchJson, { rates: 2 });

    responseNotOk(fetchJson);

    failedTofetch(fetchJson);

    aborted(fetchJson);
});

describe('fetchText', () => {
    wrongMethod(fetchText);

    responseOk(fetchText, '{ rates: 2 }');

    responseNotOk(fetchText);

    failedTofetch(fetchText);

    aborted(fetchText);
});
