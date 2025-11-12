import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden font-sans">
      {/* Textured Background & Gradient Overlays */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zM36 4v-4h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4H4v4H0v2h4v4h2V6h4V4H6zm0 30v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4H4v4H0v2h4v4h2V6h4V4H6zm0 30v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4H4v4H0v2h4v4h2V6h4V4H6zm0 30v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4H4v4H0v2h4v4h2V6h4V4H6zm0 30v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 30V30h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4H4v4H0v2h4v4h2V6h4V4H6zm0 30v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6zm0 30V30H4v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950/90"></div>

      <header className="relative z-20 flex justify-between items-center p-6">
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

      <main className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        {/* Floating Card Section */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-3xl p-12 max-w-4xl text-center shadow-2xl border border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-3xl">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
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
