// src/app/programs/page.tsx

"use client";

import React from 'react';
import { Calendar, MapPin, DollarSign, Users, ExternalLink, PlayCircle, CheckCircle } from 'lucide-react';

export default function ProgramsPage() {
  
  const programs = [
    {
      id: 1,
      title: "Stanford Pre-Collegiate Summer Institutes",
      country: "USA",
      flag: "🇺🇸",
      coverage: "Tuition Covered",
      age: "15-18",
      description: "High school students from around the world are invited to discover and explore in small classes with instructors who are passionate about their subjects.",
      benefits: [
        "Lectures by Stanford University officials",
        "Deep dive into specific academic fields",
        "Networking with international peers"
      ],
      deadline: "March 13, 2026",
      link: "https://summerinstitutes.spcs.stanford.edu/admissions",
      podcast: "https://youtu.be/PI7mzK-rNy8?si=WlOsyq5ed4PUQhlY",
      category: "Summer School"
    },
    {
      id: 2,
      title: "2026 International Busan Design Award (IBDA)",
      country: "South Korea",
      flag: "🇰🇷",
      coverage: "$38,900 Prize Pool",
      age: "Under 18",
      description: "A prestigious global competition allowing designers worldwide to showcase their innovative projects. Organized to connect creative minds with investors.",
      benefits: [
        "Total prize pool of ~$38,900",
        "Exhibition of winning projects on IBDA official site",
        "Networking with investors and major Asian companies"
      ],
      deadline: "April 3, 2026",
      link: "https://adp.dcb.or.kr/ibda/guide",
      category: "Contest"
    },
    {
      id: 3,
      title: "GRIPS 2026 Research Program",
      country: "China",
      flag: "🇨🇳",
      coverage: "Fully Funded / Research",
      age: "Bachelor & Master",
      description: "Offline research program at Zhejiang University. Students engage in scientific research, mentorship, and gain academic experience in top laboratories.",
      benefits: [
        "Research at Zhejiang University labs",
        "Mentorship from experienced supervisors",
        "Official certificate and academic experience",
        "International networking and innovation skills"
      ],
      deadline: "March 1, 2026",
      link: "http://grips.zju.edu.cn/main.htm",
      category: "Research"
    },
    {
      id: 4,
      title: "Economics World Cup 2026",
      country: "International",
      flag: "🌎",
      coverage: "Trip to Hong Kong",
      age: "12-18",
      description: "A global competition on economic thinking and problem-solving. No prior economic knowledge required. Open to school students worldwide.",
      benefits: [
        "Certificate of participation for all",
        "Experience in economic analysis of real problems",
        "Mentorship for top universities & $10,500 consulting gift card",
        "Fully funded trip to Hong Kong & World Youth Forum access"
      ],
      deadline: "May 30, 2026",
      link: "https://www.economicsworldcup.org/",
      category: "Olympiad"
    },
    {
      id: 5,
      title: "Japan Summer Cultural Camp",
      country: "Japan",
      flag: "🇯🇵",
      coverage: "Fully/Partially Funded",
      age: "17-40",
      description: "A summer school founded by AYFN Academy, taking place in Osaka, Kyoto, and Nara. Experience local traditions and life in Japan.",
      benefits: [
        "6 days stay in Osaka",
        "Walking tours across Kyoto",
        "Cultural immersion and local life experience",
        "Certificate of participation"
      ],
      deadline: "March 30, 2026",
      link: "https://ayfnhq.org/win-the-summer-cultural-trip-to-japan-2026/?__im-a4nu3vzg=12243706585926072284",
      category: "Exchange Program"
    },
    {
      id: 6,
      title: "Writers of the Future Contest",
      country: "USA",
      flag: "🇺🇸",
      coverage: "$5,000 Prize",
      age: "All Ages",
      description: "A great opportunity for new science fiction and fantasy writers to present their work to industry experts and the public.",
      benefits: [
        "$5,000 Grand Prize",
        "L. Ron Hubbard Golden Pen Award",
        "Gain experience and new connections in the industry"
      ],
      deadline: "March 31, 2026",
      link: "https://writersofthefuture.com/enter-writer-contest/",
      category: "Contest"
    },
    {
      id: 7,
      title: "Young Climate Prize",
      country: "USA",
      flag: "🇺🇸",
      coverage: "Trip to New York",
      age: "13-25",
      description: "Upload a 2-minute video explaining your climate-focused initiative. Finalists get to attend a summit in New York.",
      benefits: [
        "3 Finalists attend the Summit in New York",
        "Mentorship from experts",
        "Certificates and global exposure"
      ],
      deadline: "July 31, 2026",
      link: "https://theworldaround.org/young-climate-prize",
      category: "Competition"
    },
    {
      id: 8,
      title: "Videominute International Contest",
      country: "Spain",
      flag: "🇪🇸",
      coverage: "€500 Prize",
      age: "All Ages",
      description: "Participate by creating a 1-minute video on any topic. A creative challenge for filmmakers and enthusiasts.",
      benefits: [
        "Chance to win up to €500",
        "Winners showcased on international websites",
        "Portfolio enrichment and certificate"
      ],
      deadline: "April 30, 2026",
      link: "https://cultura.unizar.es/regulations-videominute-international-contest",
      category: "Contest"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Global Opportunities & Grants
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover fully funded scholarships, contests, and summer schools from top organizations around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              
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
                     Age: {prog.age}
                   </div>
                   <div className="flex items-center bg-white/20 px-2 py-1 rounded">
                     <MapPin size={14} className="mr-1" />
                     {prog.country}
                   </div>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {prog.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
                    <span className="text-blue-600 mr-2">➡️</span> Benefits:
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

                <div className="flex items-center text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-100 mb-6 text-sm">
                   <Calendar size={18} className="mr-2" />
                   Deadline: {prog.deadline}
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto flex flex-col sm:flex-row gap-3">
                <a 
                  href={prog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Apply Now <ExternalLink size={18} />
                </a>
                {prog.podcast && (
                  <a 
                    href={prog.podcast} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-50 text-red-600 border border-red-200 text-center py-3 rounded-xl font-medium hover:bg-red-100 transition flex items-center justify-center gap-2"
                  >
                    <PlayCircle size={18} />
                    Watch Podcast
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