// import { getProduct } from '../db';

export async function GET() {
    // const id = params.id;
    // const product = await getProduct(id);

    // if (!product) {
    //     return new Response(null, {
    //         status: 404,
    //         statusText: 'Not found',
    //     });
    // }

    return new Response(JSON.stringify('Hello world!'), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
