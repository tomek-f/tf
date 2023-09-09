import { Hono } from 'hono';

const app = new Hono();

app.get('/', (context) => context.text('Hello Hono!'));

export default app;
