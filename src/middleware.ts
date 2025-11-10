import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('Simple middleware is running!');
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
