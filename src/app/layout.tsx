import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk Portal",
  description: "A simple portal with Clerk and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider proxyUrl={process.env.NEXT_PUBLIC_CLERK_PROXY_URL}>
      <html lang="en">
        <body className={`${inter.className} bg-background-light text-text-dark min-h-screen flex flex-col`}>          <Header />
          <main className="flex-grow">
            {children}
          </main></body>
      </html>
    </ClerkProvider>
  );
}
