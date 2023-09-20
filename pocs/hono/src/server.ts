import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { z } from 'zod';

const app = new Hono();

app.use('*', async (c, next) => {
    const start = Date.now();

    await next();

    const end = Date.now();

    c.res.headers.set('X-Response-Time-In-Miliseconds', `${end - start}`);
});

app.use('*', compress());

const route = app.get(
    '/hello',
    zValidator(
        'query',
        z.object({
            name: z.string(),
        }),
    ),
    (c) => {
        const { name } = c.req.valid('query');

        return c.jsonT({
            message: `Hello! ${name}`,
        });
    },
);

export type AppType = typeof route;

app.use('/*', serveStatic({ root: './src' }));

app.use('/favicon.ico', serveStatic({ path: './src/favicon.ico' }));

app.get('/', (c) => c.text('Hello Hono! You can access: /static(s)/hello.txt'));

app.get(
    '/*',
    serveStatic({
        root: './src',
        rewriteRequestPath: (path) => path.replace(/^\/statics/, '/static'),
    }),
);

app.get('*', serveStatic({ path: './src/static/fallback.txt' }));

serve({
    fetch: app.fetch,
    port: 8787,
});

console.log('Server started @ http://localhost:8787');
