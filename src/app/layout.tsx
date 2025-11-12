import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Link from 'next/link'; // Import Link for navigation

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk Portal",
  description: "A simple portal with Clerk and Next.js",
};

import { dark } from '@clerk/themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signInUrl="/sign-in"
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#476c2e',
          colorWarning: '#ffbd5a',
          colorText: '#ffffff',
          colorBackground: '#363636',
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-gray-50 text-gray-900`}>
          {/* Fixed Navigation Bar */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-[#476c2e] text-2xl font-bold">Badjr Tech</Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-[#476c2e] font-medium hover:underline hover:decoration-[#ffbd59] hover:decoration-2 hover:underline-offset-4 transition duration-300">Home</Link>
                <Link href="/dashboard" className="text-[#476c2e] font-medium hover:underline hover:decoration-[#ffbd59] hover:decoration-2 hover:underline-offset-4 transition duration-300">Dashboard</Link>
                <Link href="/sign-in" className="text-[#476c2e] font-medium hover:underline hover:decoration-[#ffbd59] hover:decoration-2 hover:underline-offset-4 transition duration-300">Sign In</Link>
              </div>
            </div>
          </nav>
          <main className="pt-20"> {/* Add padding-top to prevent content from being hidden by fixed nav */}
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
