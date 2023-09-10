// eslint-disable-next-line import/no-unresolved
import { describe, expect, test } from 'bun:test';

import app from './server';

describe('My first test', () => {
    test('Should return 200 Response', async () => {
        // const req = new Request('http://[::1]'); // this returns `Static file: ./src/index.html is not found` to the console, but the test passes 🤷
        const req = new Request('http://[::1]/static/demo');
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
