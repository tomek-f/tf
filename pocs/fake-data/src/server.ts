import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { randPost, randSuperhero } from '@ngneat/falso';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { z } from 'zod';

const app = new Hono();

app.use('*', compress());

app.use('*', async (c, next) => {
    const start = Date.now();

    await next();

    const end = Date.now();

    c.res.headers.set('X-Response-Miliseconds', `${end - start}`);
});

const apiPost = app
    .get(
        '/posts',
        zValidator(
            'query',
            z.object({
                count: z.string().optional(),
            }),
        ),
        (c) => {
            const { count } = c.req.valid('query');

            return c.jsonT(
                randPost({ length: count ? Number.parseInt(count) : 1 }),
            );
        },
    )
    .get('/hero', (c) => {
        return c.jsonT(randSuperhero());
    })
    .get('/post', (c) => {
        return c.jsonT(randPost());
    });

const apiHero = app
    .get(
        '/heros',
        zValidator(
            'query',
            z.object({
                count: z.string().optional(),
            }),
        ),
        (c) => {
            const { count } = c.req.valid('query');

            return c.jsonT(
                randSuperhero({ length: count ? Number.parseInt(count) : 1 }),
            );
        },
    )
    .get('/hero', (c) => {
        return c.jsonT(randSuperhero());
    })
    .get('/hero2', (c) => {
        return c.jsonT(randSuperhero());
    });

// to be used with hono/client
export type ApiPost = typeof apiPost;
export type ApiHero = typeof apiHero;

app.get('/', (c) => c.text('Hello fake-data!'));

serve({
    fetch: app.fetch,
    port: 2137,
});

console.log('Server started @ http://localhost:2137');
