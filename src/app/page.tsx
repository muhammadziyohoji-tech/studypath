"use client"; // Next.js App Routerda useState ishlatish uchun bu qator zarur

import React, { useState } from 'react';
import { GraduationCap, Globe, Users, ChevronRight, Star, BookOpen, Award, DollarSign, Check } from 'lucide-react';

export default function StudyPath() {
  const [activeTab, setActiveTab] = useState('home');

  const countries = [
    {
      name: "USA",
      flag: "🇺🇸",
      universities: 4000,
      avgCost: "$30,000",
      rating: 4.8,
      popular: true,
      features: ["Top Universities", "Research Opportunities", "Cultural Diversity"]
    },
    {
      name: "UK",
      flag: "🇬🇧",
      universities: 160,
      avgCost: "$25,000",
      rating: 4.7,
      popular: true,
      features: ["Historic Universities", "1-Year Masters", "Global Recognition"]
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      universities: 100,
      avgCost: "$20,000",
      rating: 4.9,
      popular: true,
      features: ["Post-Study Work", "Safe Environment", "Quality Education"]
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      universities: 43,
      avgCost: "$28,000",
      rating: 4.6,
      popular: false,
      features: ["Beautiful Campuses", "Work Opportunities", "High Living Standard"]
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      universities: 380,
      avgCost: "$12,000",
      rating: 4.7,
      popular: false,
      features: ["Low Tuition Fees", "Engineering Excellence", "EU Access"]
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      universities: 70,
      avgCost: "$15,000",
      rating: 4.5,
      popular: false,
      features: ["English Programs", "Innovation Hub", "Central Location"]
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "50+ Countries",
      description: "Explore study destinations across the globe with detailed insights",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "10,000+ Programs",
      description: "Find the perfect program matching your career goals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Scholarship Info",
      description: "Access comprehensive scholarship and funding opportunities",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get personalized advice from education counselors",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: "50K+", label: "Students Helped" },
    { value: "100+", label: "Universities" },
    { value: "45+", label: "Countries" },
    { value: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                <GraduationCap className="text-white" size={28} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StudyPath
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Countries', 'Programs', 'Compare'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  // XATO TUZATILDI: Quyidagi qatorda backtick (`) belgilari qo'shildi
                  className={`text-sm font-medium transition-all ${
                    activeTab === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-medium">Trusted by 50,000+ Students</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Study Abroad Destination
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover universities, compare programs, and start your journey to global education with personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center group">
                Explore Countries
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium hover:shadow-lg border-2 border-gray-200 transition-all">
                Take Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StudyPath?</h2>
          <p className="text-gray-600 text-lg">Everything you need to make the right decision</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Countries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
            <p className="text-gray-600">Start exploring top study abroad countries</p>
          </div>
          <button className="text-blue-600 font-medium flex items-center hover:gap-2 transition-all">
            View All
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-8xl">{country.flag}</div>
                {country.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{country.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <BookOpen size={16} className="mr-2 text-blue-600" />
                    <span className="text-sm">{country.universities} Universities</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={16} className="mr-2 text-green-600" />
                    <span className="text-sm">Avg. {country.avgCost}/year</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star size={16} className="mr-2 text-yellow-500" fill="currentColor" />
                    <span className="text-sm">{country.rating} Rating</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {country.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <Check size={14} className="mr-2 text-green-500" />
                      {feat}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all group-hover:scale-105">
                  Explore {country.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who found their perfect study destination through StudyPath
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold text-white">StudyPath</span>
              </div>
              <p className="text-sm text-gray-400">Your trusted partner in international education</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Countries</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Universities</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Scholarships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>contact@inomjonov_mz</li>
                <li>+998 (88) 117-13-77</li>
                <li>Mon-Fri: 9AM - 6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 StudyPath. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}