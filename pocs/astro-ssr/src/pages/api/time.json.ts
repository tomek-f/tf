import type { APIRoute } from 'astro';

// Outputs: /time.json
export const GET: APIRoute = async () => {
    return new Response(JSON.stringify({ time: new Date() }), {
        headers: {
            'Cache-Control': 's-maxage=10, stale-while-revalidate',
            'Content-Type': 'application/json',
        },
        status: 200,
    });
};
