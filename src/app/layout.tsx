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

import { dark } from '@clerk/themes';

// ... (rest of the imports)

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
        <body className={`${inter.className} bg-background-light text-text-dark min-h-screen flex flex-col`}>          
          <main className="flex-grow">
            {children}
          </main></body>
      </html>
    </ClerkProvider>
  );
}
