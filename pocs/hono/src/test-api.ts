import { hc } from 'hono/client';

// import { type AppType } from './server'; // this breaks tsx
import type { AppType } from './server';

const client = hc<AppType>('http://0.0.0.0:8787');
const res = await client.hello.$get({
    query: {
        name: 'Hono',
    },
});

const data = await res.json();

console.log(`${data.message}`);