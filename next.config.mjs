/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

console.log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in next.config.mjs:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default nextConfig;
