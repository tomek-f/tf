import type { APIRoute } from 'astro';

export const prerender = true;

const usernames = ['Sarah', 'Chris', 'Yan', 'Elian', '2137'];

export const GET: APIRoute = ({ params }) => {
    const id = Number(params.id);

    if (Number.isNaN(id) || id < 0 || id >= usernames.length) {
        return new Response(null, {
            status: 404,
            statusText: 'Not found',
        });
    }

    return new Response(JSON.stringify({ name: usernames[id] }));
};

export function getStaticPaths() {
    return [
        { params: { id: '0' } },
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
    ];
}
