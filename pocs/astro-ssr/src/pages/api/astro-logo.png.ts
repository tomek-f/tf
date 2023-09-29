import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const response = await fetch(
        'https://docs.astro.build/assets/full-logo-light.png',
    );
    const buffer = Buffer.from(await response.arrayBuffer());
    const headers = new Headers({ 'Content-Type': 'image/png', Elo: 'yolo' });

    // return new Response(await response.arrayBuffer());

    return new Response(buffer, { headers });
};
