import type { APIRoute } from 'astro';
import { v4 as uuidv4 } from 'uuid';

export interface Uuidv4Data {
    id: string;
}

export const GET: APIRoute = () => {
    const data = { id: uuidv4() } satisfies Uuidv4Data;

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
