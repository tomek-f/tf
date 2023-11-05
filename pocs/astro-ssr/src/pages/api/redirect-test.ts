import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url: { searchParams }, redirect }) => {
    const a = searchParams.get('a');

    if (a === '1') {
        return new Response(JSON.stringify('Hello world!'), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }

    // TODO on vercel returns an unstyled 404, same thing in pages/api/user/[id].json.ts returns a proper styled pages/404.astro
    if (a === '2') {
        return new Response(null, {
            status: 404,
            statusText: 'Not found',
        });
    }

    return redirect('/fake-307', 307); // 307 -> 404 for /fake-307
};
