import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!.+\.[\w]+$|_next).*)', // Match all paths except static files and Next.js internal paths
    '/', // Explicitly match the root
    '/dashboard(.*)', // Explicitly match dashboard and its sub-paths
  ],
};