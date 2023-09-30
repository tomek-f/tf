import type { APIRoute } from 'astro';

export const GET: APIRoute = async (data) => {
    console.log([...data.url.searchParams]);

    return new Response(JSON.stringify('Hello world!'), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};
