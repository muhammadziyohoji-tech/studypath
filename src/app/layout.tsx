// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import { Send, Phone } from 'lucide-react'; // Ikonkalar chaqirildi
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyPath - International education opportunities',
  description: 'A platform that provides information about studying abroad, scholarships, and international programs.',
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
        <Header />
        <main className="min-h-screen">{children}</main>

        {/* YANGILANGAN FOOTER */}
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              
              {/* 1. Biz haqimizda (About) */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🎓</span>
                  <span className="text-xl font-bold text-white">StudyPath</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                 StudyPath is a project that helps young people find the best educational opportunities, scholarships, and summer schools around the world.
Our goal is to show every student the path to accessing quality education.
                </p>
              </div>

              {/* 2. Tezkor Linklar */}
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Chapters</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="/" className="hover:text-blue-400 transition-colors">Bosh sahifa</a></li>
                  <li><a href="/programs" className="hover:text-blue-400 transition-colors">Grants va Projects</a></li>
                  <li><a href="/countries" className="hover:text-blue-400 transition-colors">Countries</a></li>
                </ul>
              </div>

              {/* 3. Bog'lanish (Contact & Support) */}
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Yordam kerakmi?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  If you have any questions or suggestions regarding the project, feel free to contact us:
                </p>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://t.me/inomjonov_mz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center group text-white hover:text-blue-400 transition-colors"
                    >
                      <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-500 transition">
                        <Send size={18} className="text-white" />
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400">contact me on the Telegram</span>
                        <span className="font-medium">@inomjonov_mz</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+998881171377" 
                      className="flex items-center group text-white hover:text-green-400 transition-colors"
                    >
                      <div className="bg-green-600 p-2 rounded-lg mr-3 group-hover:bg-green-500 transition">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400">call us</span>
                        <span className="font-medium">+998 (88) 117-13-77</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              <p>&copy; 2026 StudyPath. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}