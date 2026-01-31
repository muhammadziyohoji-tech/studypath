// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header'; // Biz tuzatgan Header chaqirildi
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyPath - Find Your Perfect Study Abroad Destination',
  description: 'Compare and choose study abroad destinations based on education quality, cost, and visa factors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8155292006538521"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className={inter.className}>
        {/* Mana shu yerda biz yasagan tayyor Header ishlaydi */}
        <Header /> 
        <main>{children}</main>
      </body>
    </html>
  );
}