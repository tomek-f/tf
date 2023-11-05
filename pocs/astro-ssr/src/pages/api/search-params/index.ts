import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
    return new Response(JSON.stringify([...url.searchParams]), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
