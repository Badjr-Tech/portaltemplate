import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server'; // Import NextResponse

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, request) => {
  // Log the authentication state for debugging
  console.log('Middleware running for:', request.url);
  const { userId } = auth(); // Get the userId from the auth state
  console.log('User ID:', userId);
  console.log('Is public route:', isPublicRoute(request));

  if (!isPublicRoute(request)) {
    if (!userId) { // If no user is signed in
      console.log('User not authenticated, redirecting to sign-in.');
      const signInUrl = new URL('/sign-in', request.url);
      return NextResponse.redirect(signInUrl);
    }
    // If user is authenticated, protect the route
    auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
