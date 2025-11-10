import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('Middleware is definitely running!'); // Keep this log just in case
  const signInUrl = new URL('/sign-in', request.url);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
