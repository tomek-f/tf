import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            message: 'This was a GET!',
        }),
    );
};

export const POST: APIRoute = () => {
    return new Response(
        JSON.stringify({
            message: 'This was a POST!',
        }),
    );
};

export const DELETE: APIRoute = () => {
    return new Response(
        JSON.stringify({
            message: 'This was a DELETE!',
        }),
    );
};

export const ALL: APIRoute = ({ request }) => {
    return new Response(
        JSON.stringify({
            message: `This was a ${request.method} (ALL)!`,
        }),
    );
};
