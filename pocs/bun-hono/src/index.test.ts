// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from 'bun:test';

import app from '.';

describe('My first test', () => {
    test('Should return 200 Response', async () => {
        const req = new Request('http://localhost/');
        const res = await app.fetch(req);

        expect(res.status).toBe(200);
    });
});

describe('arithmetic', () => {
    test('2 + 2', () => {
        expect(2 + 2).toBe(4);
    });

    test('2 * 2', () => {
        expect(2 * 2).toBe(4);
    });
});
