import { NextResponse /* , userAgent */ } from 'next/server';

// import type { NextRequest } from 'next/server';
// import { supabase } from './lib/initSupabase';
// import { withAxiom } from 'next-axiom';
// import type { AxiomRequest } from 'next-axiom/dist/withAxiom';

// export const config = {
//   // matcher: ['login', '/about/:path*', '/dashboard/:path*'],
//   matcher: ['/hello', '/redirect-2-hello', '/ssg-example'],
// };

// AxiomRequest is extended NextRequest
// for next-axiom remove export
// function middleware(request: AxiomRequest) {
// eslint-disable-next-line consistent-return
export async function middleware(/* request: NextRequest */) {
  // if (
  //   [
  //     '/admin-ssr',
  //     '/admin',
  //     '/admin-ssr',
  //     '/countries',
  //     '/dashboard',
  //     '/graphql',
  //   ].includes(request.nextUrl.pathname)
  // ) {
  //   const authCookie = request.cookies.get('sb-access-token');

  //   console.log({ authCookie });

  //   if (!authCookie) {
  //     return NextResponse.redirect(
  //       new URL(`/login?redirect=${request.nextUrl.pathname}`, request.url),
  //     );
  //   }

  //   // const { data: user, error } = await supabase.auth.api.getUser(authCookie);

  //   // console.log({ user, error });

  //   // if (error || !user) {
  //   //   return NextResponse.redirect(new URL('/login', request.url));
  //   // }
  // }

  const response = NextResponse.next();

  // if (request.nextUrl.pathname.startsWith('/hello')) {
  //   request.log.info('hello from middleware', { bar: 'baz' });
  // }

  return response;
}

// export default withAxiom(middleware);
