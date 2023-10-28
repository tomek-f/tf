import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: {
            // TODO ? fix this
            // eslint-disable-next-line unicorn/prefer-module
            REACT_PG: resolve(__dirname, 'src'),
        },
    },
    test: { environment: 'happy-dom' },
});
