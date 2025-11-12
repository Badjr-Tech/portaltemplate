import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="relative z-10 flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">Badjr Tech Portal</h1>
        <div>
          {userId ? (
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Dashboard
            </Link>
          ) : (
            <Link href="/sign-in" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Sign In
            </Link>
          )}
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-20 px-4">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mb-16">
          <h2 className="text-6xl font-extrabold mb-6 leading-tight text-gray-800">
            Your Gateway to Seamless Operations
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            A modern, fast, and secure portal built by Badjr Tech to streamline your workflow and connect you to what matters most.
          </p>
          <Link href={userId ? "/dashboard" : "/sign-up"} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            Get Started Today
          </Link>
        </section>

        {/* Content Section */}
        <section className="bg-white p-12 rounded-2xl shadow-xl max-w-5xl text-left border border-gray-200">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">Experience Unmatched Efficiency</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            This portal, powered by Badjr Tech, is designed to be simple, modern, and complete — everything you need, all in one place. Its clean, intuitive layout makes navigation effortless, while sleek design elements keep the experience fresh and professional. Whether you’re managing data, connecting with others, or organizing business operations, every feature is built for clarity and efficiency. No clutter, no confusion — just a seamless platform from Badjr Tech that works the way you do.
          </p>
        </section>
      </main>
    </div>
  );
}