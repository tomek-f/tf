import type { APIRoute } from 'astro';

export const GET: APIRoute = async (data) => {
    console.log([...data.url.searchParams]);

    return new Response(JSON.stringify([...data.url.searchParams]), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
