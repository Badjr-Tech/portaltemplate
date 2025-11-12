import { auth } from "@clerk/nextjs/server";
import Link from 'next/link';
import { FaChartLine, FaCog, FaUserCircle } from 'react-icons/fa'; // Importing icons

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #476c2e 0%, #ffbd59 100%)' }}>
        {/* Faint white glow in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column (60%) */}
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-6xl font-extrabold mb-4 leading-tight text-white">
              Your Ultimate <span className="text-[#ffbd59]">Portal</span> for Success
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Streamline your operations, connect with ease, and achieve more with Badjr Tech.
            </p>
            <Link href={userId ? "/dashboard" : "/sign-up"} className="inline-block bg-[#476c2e] hover:bg-[#5b8f3a] text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Get Started Today
            </Link>
          </div>

          {/* Right Column (40%) - Placeholder for Image/3D Shape */}
          <div className="md:w-2/5 flex justify-center items-center">
            <div className="w-80 h-80 bg-gray-300 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 flex items-center justify-center text-gray-600 text-lg">
              [Image/3D Shape Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#ffbd59] border-opacity-50 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 bg-[#ffbd59] rounded-full flex items-center justify-center mb-6 shadow-md">
              <FaChartLine className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#476c2e] mb-4">Intuitive Dashboard</h3>
            <p className="text-gray-600 mb-6">
              Gain insights at a glance with a clean, easy-to-navigate overview of your key metrics.
            </p>
            <Link href="/dashboard" className="bg-[#ffbd59] hover:bg-[#e6a84d] text-[#476c2e] font-bold py-2 px-6 rounded-full transition duration-300">Learn More</Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#ffbd59] border-opacity-50 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 bg-[#ffbd59] rounded-full flex items-center justify-center mb-6 shadow-md">
              <FaCog className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#476c2e] mb-4">Customizable Settings</h3>
            <p className="text-gray-600 mb-6">
              Tailor your experience to fit your unique needs with flexible and powerful settings.
            </p>
            <Link href="/settings" className="bg-[#ffbd59] hover:bg-[#e6a84d] text-[#476c2e] font-bold py-2 px-6 rounded-full transition duration-300">Configure</Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#ffbd59] border-opacity-50 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 bg-[#ffbd59] rounded-full flex items-center justify-center mb-6 shadow-md">
              <FaUserCircle className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#476c2e] mb-4">Personalized Profile</h3>
            <p className="text-gray-600 mb-6">
              Manage your identity and connect with others through your dedicated profile page.
            </p>
            <Link href="/profile" className="bg-[#ffbd59] hover:bg-[#e6a84d] text-[#476c2e] font-bold py-2 px-6 rounded-full transition duration-300">View Profile</Link>
          </div>
        </div>
      </section>
    </div>
  );
}