import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
// import { compress } from 'hono/compress';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono();

app.use('*', async (c, next) => {
    const start = performance.now();

    await next();

    const end = performance.now();

    c.res.headers.set('X-Response-Time-In-Miliseconds', `${end - start}`);
});
app.use('*', prettyJSON({ space: 4 }));
// can't do this right now, on bun https://github.com/oven-sh/bun/issues/1723
// app.use('*', compress());
app.get('/hello', (c) => {
    return c.json({ message: `Hello!` });
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
