import type { APIRoute } from 'astro';

export const ALL: APIRoute = ({ request }) => {
    console.log('cookie', request.headers.get('cookie'));
    console.log('headers', Object.fromEntries(request.headers));

    return new Response(
        JSON.stringify({
            message: `This was a ${request.method} (ALL)!`,
        }),
    );
};
