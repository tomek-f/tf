import type { APIRoute } from 'astro';

const data = { greeting: 'Hello' };

export type HelloData = typeof data;

export const GET: APIRoute = () => {
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
