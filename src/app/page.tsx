import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Shapes/Layers */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

      <header className="relative z-10 flex justify-between items-center p-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-100">Badjr Tech Portal</h1>
        <div>
          {userId ? (
            <Link href="/dashboard" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Dashboard
            </Link>
          ) : (
            <Link href="/sign-in" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Sign In
            </Link>
          )}
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        {/* Glassmorphism Panel */}
        <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl border border-gray-700 rounded-3xl p-12 max-w-4xl text-center shadow-2xl">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
            Elevate Your Operations
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            This portal, powered by Badjr Tech, is designed to be simple, modern, and complete — everything you need, all in one place.
          </p>
          <Link href={userId ? "/dashboard" : "/sign-up"} className="inline-block bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Get Started Today
          </Link>
          <p className="text-md text-gray-400 mt-10 max-w-3xl mx-auto leading-relaxed">
            Its clean, intuitive layout makes navigation effortless, while sleek design elements keep the experience fresh and professional. Whether you’re managing data, connecting with others, or organizing business operations, every feature is built for clarity and efficiency. No clutter, no confusion — just a seamless platform from Badjr Tech that works the way you do.
          </p>
        </div>
      </main>
    </div>
  );
}
