import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Portal</h1>
        <div>
          {userId ? (
            <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Dashboard
            </Link>
          ) : (
            <Link href="/sign-in" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </Link>
          )}
        </div>
      </header>
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-5xl font-bold mb-4">Welcome to the Future of Portals</h2>
        <p className="text-lg text-gray-400 mb-8">A modern, fast, and secure portal built with Next.js and Clerk.</p>
        <Link href={userId ? "/dashboard" : "/sign-up"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg">
          Get Started
        </Link>
        <p className="text-lg text-gray-400 mt-8 max-w-2xl">
          This portal, powered by Badjr Tech, is designed to be simple, modern, and complete — everything you need, all in one place. Its clean, intuitive layout makes navigation effortless, while sleek design elements keep the experience fresh and professional. Whether you’re managing data, connecting with others, or organizing business operations, every feature is built for clarity and efficiency. No clutter, no confusion — just a seamless platform from Badjr Tech that works the way you do.
        </p>
      </main>
    </div>
  );
}
