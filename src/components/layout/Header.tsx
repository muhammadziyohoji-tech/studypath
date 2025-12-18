// src/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-bold text-gray-900">StudyPath</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/countries"
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              Countries
            </Link>
            <Link
              href="/compare"
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              Compare
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/compare"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition"
              >
                Home
              </Link>
              <Link
                href="/countries"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition"
              >
                Countries
              </Link>
              <Link
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition"
              >
                Compare
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition"
              >
                About
              </Link>
              <Link
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}