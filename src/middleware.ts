import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  publicRoutes: ["/sign-in(.*)", "/sign-up(.*)"],
});

export const config = {
  matcher: [
    '/',
    '/dashboard(.*)',
  ],
};