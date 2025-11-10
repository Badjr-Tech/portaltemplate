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
    <header className="bg-dark-gray">
      <div className="bg-accent text-dark-gray text-center py-1 text-sm">
        Your Banner Text Here
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="sm:hidden">
              {/* Mobile menu button */}
            </div>
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    pathname === tab.href
                      ? 'bg-white text-dark-gray'
                      : 'bg-light-gray text-dark-gray hover:bg-white/80',
                    'rounded-t-lg px-4 py-2 text-sm font-medium'
                  )}
                  aria-current={pathname === tab.href ? 'page' : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}
