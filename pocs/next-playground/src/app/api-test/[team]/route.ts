import { NextResponse, type NextRequest } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { team: string } },
) {
    console.log(params);

    return NextResponse.json({ params }, { status: 200 });
}
