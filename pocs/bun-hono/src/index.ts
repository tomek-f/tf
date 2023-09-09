import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('*', async (c, next) => {
    const start = Date.now();

    await next();

    const end = Date.now();

    c.res.headers.set('X-Response-Time', `${end - start}`);
});
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

export default {
    port: 2137,
    fetch: app.fetch,
};
