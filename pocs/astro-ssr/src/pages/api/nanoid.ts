import type { APIRoute } from 'astro';
import { nanoid } from 'nanoid';

export interface NanoidData {
    id: string;
}

export const GET: APIRoute = () => {
    const data = { id: nanoid() } satisfies NanoidData;

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
