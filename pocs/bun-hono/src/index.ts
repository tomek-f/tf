import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('/*', serveStatic({ root: './src' }));
app.use('/favicon.ico', serveStatic({ path: './src/favicon.ico' }));
app.get('/', (context) =>
    context.text('Hello Hono! You can access: /static(s)/hello.txt'),
);
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
