'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

const tabs = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              TechLine
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    pathname === tab.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary',
                    'px-3 py-2 text-sm font-medium transition-colors duration-200'
                  )}
                  aria-current={pathname === tab.href ? 'page' : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </header>
  );
}
