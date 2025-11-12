import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/',
]);

export default clerkMiddleware((auth, req) => {
  console.log('clerkMiddleware executing for path:', req.nextUrl.pathname);
  if (isProtectedRoute(req)) {
    console.log('Path is protected:', req.nextUrl.pathname);
    auth.protect();
  } else {
    console.log('Path is NOT protected:', req.nextUrl.pathname);
  }
});

export const config = {
  matcher: [
    '/',
    '/dashboard(.*)',
  ],
};