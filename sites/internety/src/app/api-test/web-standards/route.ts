export async function GET(request: Request) {
    console.log(request.headers.get('user-agent'));

    return new Response('{ hello: "next.js" }', {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
}
