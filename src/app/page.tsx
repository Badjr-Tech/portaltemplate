import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Shapes/Layers */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <header className="relative z-10 flex justify-between items-center p-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Badjr Tech Portal</h1>
        <div>
          {userId ? (
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Dashboard
            </Link>
          ) : (
            <Link href="/sign-in" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Sign In
            </Link>
          )}
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        {/* Glassmorphism Panel */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-2xl p-10 max-w-3xl text-center shadow-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Welcome to the Future of Portals
          </h2>
          <p className="text-lg text-gray-200 mb-8">A modern, fast, and secure portal built with Next.js and Clerk.</p>
          <Link href={userId ? "/dashboard" : "/sign-up"} className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            Get Started Today
          </Link>
          <p className="text-lg text-gray-400 mt-8 max-w-2xl mx-auto">
            This portal, powered by Badjr Tech, is designed to be simple, modern, and complete — everything you need, all in one place. Its clean, intuitive layout makes navigation effortless, while sleek design elements keep the experience fresh and professional. Whether you’re managing data, connecting with others, or organizing business operations, every feature is built for clarity and efficiency. No clutter, no confusion — just a seamless platform from Badjr Tech that works the way you do.
          </p>
        </div>
      </main>
    </div>
  );
}
