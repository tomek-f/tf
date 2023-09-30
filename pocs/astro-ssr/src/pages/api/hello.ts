import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(JSON.stringify({ greeting: 'Hello' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
