import { expect, test } from 'vitest';

import CustomErrorFetch, {
    type CustomErrorFetchParametersObject,
    type CustomRequest,
} from '../custom-error-fetch';

test('required data', () => {
    const errorData = {
        messageDefault: 'Error 1',
        request: {
            url: new URL('/111', 'https://elo.yolo.com'),
        } as CustomRequest,
    } satisfies CustomErrorFetchParametersObject;
    const errorWrapped = new CustomErrorFetch(errorData);

    expect(errorWrapped instanceof CustomErrorFetch).toBe(true);
    expect(errorWrapped.message).toEqual(errorData.messageDefault);
    expect(errorWrapped.request).toEqual(
        JSON.parse(JSON.stringify(errorData.request)),
    );
    expect(errorWrapped.failedToFetch).toBe(false);
});

test('all data', () => {
    const error0 = new Error('Error 0');
    const errorData = {
        error: error0,
        failedToFetch: true,
        messageDefault: 'Error 2',
        request: {
            url: 'https://elo.yolo.com/y',
        } as CustomRequest,
        response: {
            ok: true,
        } as Response,
    } satisfies CustomErrorFetchParametersObject;
    const errorWrapped = new CustomErrorFetch(errorData);

    expect(errorWrapped instanceof CustomErrorFetch).toBe(true);
    expect(errorWrapped.message).toEqual(error0.message);
    expect(errorWrapped.request).toEqual(errorData.request);
    expect(errorWrapped.response).toEqual(errorData.response);
    expect(errorWrapped.stack).toEqual(error0.stack);
    expect(errorWrapped.failedToFetch).toBe(true);
});

test('urls', () => {
    const errorData = {
        messageDefault: 'Error 3',
        request: {
            url: new URL('/222', 'https://kek.com'),
        } as CustomRequest,
    } satisfies CustomErrorFetchParametersObject;
    const errorWrapped = new CustomErrorFetch(errorData);
    const errorData2 = {
        message: 'Error 4',
        request: {
            url: 'https://kek.com/333',
        } as CustomRequest,
    };
    const errorWrapped2 = new CustomErrorFetch(errorData2);

    expect(errorWrapped.request?.url).toBe(errorData.request.url.toString());
    expect(errorWrapped2.request?.url).toBe(errorData2.request.url);
});

test('failed to fetch', () => {
    const error = new TypeError('Failed to fetch');
    const errorWrapped = new CustomErrorFetch({
        error,
        failedToFetch: true,
    });

    expect(errorWrapped instanceof CustomErrorFetch).toBe(true);
    expect(errorWrapped.message).toEqual(error.message);
    expect(errorWrapped.request).toBe(undefined);
    expect(errorWrapped.response).toBe(undefined);
    expect(errorWrapped.stack).toEqual(error.stack);
    expect(errorWrapped.failedToFetch).toBe(true);
});

test('aborted', () => {
    const error = new TypeError('Failed to fetch');
    const errorWrapped = new CustomErrorFetch({
        aborted: true,
        error,
    });

    expect(errorWrapped instanceof CustomErrorFetch).toBe(true);
    expect(errorWrapped.message).toEqual(error.message);
    expect(errorWrapped.request).toBe(undefined);
    expect(errorWrapped.response).toBe(undefined);
    expect(errorWrapped.stack).toEqual(error.stack);
    expect(errorWrapped.aborted).toBe(true);
});

test('default message', () => {
    const errorWrapped = new CustomErrorFetch();

    expect(errorWrapped.message).toEqual('Something went wrong');
});
