import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, request) => {
  console.log('Middleware running for:', request.url);
  console.log('Is public route:', isPublicRoute(request));

  if (!isPublicRoute(request)) {
    console.log('Route is protected. Calling auth.protect()');
    auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
