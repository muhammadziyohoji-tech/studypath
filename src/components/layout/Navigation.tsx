'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/countries', label: 'Countries' },
    { href: '/compare', label: 'Compare' },
    { href: '/consulting', label: 'consulting' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`font-medium transition ${
            isActive(item.href)
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}