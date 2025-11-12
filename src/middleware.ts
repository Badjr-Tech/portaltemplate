import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
}, {
  publicRoutes: ["/sign-in(.*)", "/sign-up(.*)"]
});

export const config = {
  matcher: ['/', '/dashboard(.*)'],
};