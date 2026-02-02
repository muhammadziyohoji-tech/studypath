// src/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menyudagi linklar ro'yxati
  // "Universities"ni shu yerga qo'shdim, shunda u ham telefonda, ham kompyuterda ko'rinadi
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Countries', href: '/countries' },
    { name: 'Universities', href: '/universities' }, // <--- Qo'shildi
    { name: 'Programs', href: '/programs' },
    { name: 'Compare', href: '/compare' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-[100] w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition z-50">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-bold text-gray-900">StudyPath</span>
          </Link>

          {/* Desktop Navigation (Kompyuter va Laptop uchun) */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="ml-4 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button (Faqat telefonda ko'rinadi) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (Telefonda ochiladigan menyu) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-xl border-t border-gray-100 pt-20 pb-10 z-40 animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-4 px-6">
              {/* Bu yerda navLinks bo'yicha aylanyapti, demak Universities ham chiqadi */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50 transition"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-blue-600 text-white text-center rounded-xl font-semibold shadow-md"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}