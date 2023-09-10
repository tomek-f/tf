import { hc } from 'hono/client';

import app, { type AppType } from './server';

const client = hc<AppType>(`http://[::1]:${app.port}`); // localhost as it runs on bun now
const res = await client.hello.$get({
    query: {
        name: 'Hono',
    },
});

const data = await res.json();

console.log(`${data.message}`);
