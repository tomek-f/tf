import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url: { searchParams }, redirect }) => {
    const a = searchParams.get('a') ?? '0';

    if (a === '111') {
        return new Response(null, {
            status: 404,
            statusText: 'Not found',
        });
    }

    if (a === '0') {
        return new Response(JSON.stringify('Hello world!'), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }

    return redirect('fake-307', 307);
};