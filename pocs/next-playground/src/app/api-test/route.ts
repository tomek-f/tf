import { cookies, headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    console.log(request.headers.get('user-agent'));
    console.log(request.cookies.getAll());
    console.log(headers().get('user-agent'));
    console.log(cookies().getAll());
    console.log([...new URL(request.url).searchParams]);

    // return new NextResponse('{ "hello": "next.js" }', {
    //     headers: { 'Content-Type': 'application/json' },
    //     status: 200,
    // });

    return NextResponse.json({ hello: 'next.js' }, { status: 200 });
}
