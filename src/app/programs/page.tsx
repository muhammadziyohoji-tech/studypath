// src/app/programs/page.tsx

"use client";

import React from 'react';
import { Calendar, MapPin, DollarSign, Users, ExternalLink, PlayCircle, CheckCircle } from 'lucide-react';

export default function ProgramsPage() {
  
  // Bu yerga yangi dasturlarni qo'shib borasiz
  const programs = [
    {
      id: 1,
      title: "Stanford Pre-Collegiate Summer Institutes",
      country: "AQSH",
      flag: "🇺🇸",
      coverage: "To'liq", // Moliyaviy ta'minot
      age: "15-18",
      description: "Butun dunyo bo'ylab o'rta maktab o'quvchilari o'z sohalarida bilimdon va o'qitishga ishtiyoqli o'qituvchilar bilan kichik sinflarda kashf qilish va o'rganishga taklif qilinadilar.",
      benefits: [
        "Dunyoning top universiteti rasmiylari tomonidan leksiyalar",
        "Istalgan soha bo'yicha bilimlarni oshirish",
        "Xalqaro do'stlar orttirish"
      ],
      deadline: "13-mart, 2026",
      link: "https://summerinstitutes.spcs.stanford.edu/admissions",
      podcast: "https://youtu.be/PI7mzK-rNy8?si=WlOsyq5ed4PUQhlY",
      category: "Summer School"
    },
    // Keyingi programmani shu yerdan vergul qo'yib davom ettirasiz...
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahifa sarlavhasi */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Xalqaro Dasturlar va Grantlar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dunyodagi eng nufuzli universitetlar, yozgi maktablar va to'liq moliyalashtiriladigan grant dasturlari haqida ma'lumot oling.
          </p>
        </div>

        {/* Dasturlar ro'yxati (Grid) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              
              {/* Header qismi */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white relative">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm mb-3 border border-white/30">
                      {prog.category}
                    </span>
                    <h2 className="text-2xl font-bold leading-tight mb-2">{prog.title}</h2>
                  </div>
                  <span className="text-4xl bg-white/10 p-2 rounded-lg backdrop-blur-sm">{prog.flag}</span>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-2 text-sm">
                   <div className="flex items-center bg-green-500/20 px-2 py-1 rounded border border-green-400/30">
                     <DollarSign size={14} className="mr-1" />
                     {prog.coverage}
                   </div>
                   <div className="flex items-center bg-white/20 px-2 py-1 rounded">
                     <Users size={14} className="mr-1" />
                     Yosh: {prog.age}
                   </div>
                   <div className="flex items-center bg-white/20 px-2 py-1 rounded">
                     <MapPin size={14} className="mr-1" />
                     {prog.country}
                   </div>
                </div>
              </div>

              {/* Tana qismi */}
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {prog.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-blue-600 mr-2">➡️</span> Imtiyozlari:
                  </h4>
                  <ul className="space-y-2">
                    {prog.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-100 mb-6">
                   <Calendar size={18} className="mr-2" />
                   So'nggi muddat: {prog.deadline}
                </div>
              </div>

              {/* Footer tugmalar */}
              <div className="p-6 pt-0 mt-auto flex flex-col sm:flex-row gap-3">
                <a 
                  href={prog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Ro'yxatdan o'tish <ExternalLink size={18} />
                </a>
                {prog.podcast && (
                  <a 
                    href={prog.podcast} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-50 text-red-600 border border-red-200 text-center py-3 rounded-xl font-medium hover:bg-red-100 transition flex items-center justify-center gap-2"
                  >
                    <PlayCircle size={18} />
                    Podkastni ko'rish
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}