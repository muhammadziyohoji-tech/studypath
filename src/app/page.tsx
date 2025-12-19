// src/app/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-indigo-950">
        {/* Additional hero background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-emerald-400/15 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              Find Your Perfect Study
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Abroad Destination
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Data-driven insights to help you choose the right country for your international education
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/countries"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-emerald-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
              >
                Explore Countries
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/compare"
                className="px-8 py-4 backdrop-blur-lg bg-white/5 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all border border-white/20 hover:border-white/40 hover:scale-105 transform duration-300"
              >
                Compare Destinations
              </Link>
            </motion.div>

            {/* Stats with Enhanced Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
            >
              {[
                { value: '250+', label: 'Countries' },
                { value: '4', label: 'Key Factors' },
                { value: '100%', label: 'Data-Driven' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-6 tracking-tight">
              How StudyPath Works
            </h2>
            <p className="text-xl text-slate-400 text-center mb-20 max-w-2xl mx-auto">
              Three simple steps to discover your ideal study destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🔍', title: 'Search', desc: 'Browse 250+ countries with detailed information on education, costs, and living conditions', color: 'blue' },
              { icon: '📊', title: 'Compare', desc: 'Use our scoring algorithm to objectively compare countries based on your priorities', color: 'green' },
              { icon: '✅', title: 'Decide', desc: 'Get personalized recommendations and make an informed decision about your future', color: 'purple' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Factors - Enhanced Bento Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                Our Scoring Methodology
              </span>
            </h2>
            <p className="text-xl text-slate-400 text-center mb-20 max-w-3xl mx-auto">
              We evaluate countries using a weighted algorithm based on four critical factors
            </p>
          </motion.div>

          {/* Advanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Education Quality - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="md:col-span-2 md:row-span-2 backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl p-10 border border-white/10 hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-7xl mb-6">🎓</div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Education Quality</h3>
                <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  40%
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  University rankings, research output, and academic reputation from top institutions worldwide
                </p>
              </div>
            </motion.div>

            {/* Affordability - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="md:col-span-2 backdrop-blur-lg bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-3xl p-8 border border-white/10 hover:border-green-400/40 transition-all hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">Affordability</h3>
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                  30%
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Living costs, tuition fees, and overall student expenses
                </p>
              </div>
            </motion.div>

            {/* Language - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="md:col-span-1 backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-3xl p-8 border border-white/10 hover:border-purple-400/40 transition-all hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Language</h3>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  20%
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  English proficiency and support
                </p>
              </div>
            </motion.div>

            {/* Visa Access - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="md:col-span-1 backdrop-blur-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-3xl p-8 border border-white/10 hover:border-orange-400/40 transition-all hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Visa Access</h3>
                <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
                  10%
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Processing ease and work rights
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Enhanced Glassmorphism */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                Powerful Features
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📍', title: 'Interactive Maps', desc: 'Visualize study destinations on an interactive world map with score-based markers', color: 'from-blue-500/20 to-cyan-500/20' },
              { icon: '📈', title: 'Data Visualizations', desc: 'Charts and graphs showing cost breakdowns, population trends, and more', color: 'from-green-500/20 to-emerald-500/20' },
              { icon: '🔍', title: 'Advanced Filtering', desc: 'Filter by region, language, cost range, and other criteria to find your match', color: 'from-purple-500/20 to-pink-500/20' },
              { icon: '📊', title: 'Real-Time Data', desc: 'Information sourced from REST Countries API and World Bank databases', color: 'from-orange-500/20 to-yellow-500/20' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`backdrop-blur-lg bg-gradient-to-br ${feature.color} rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:shadow-xl hover:shadow-blue-500/20 flex gap-6 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 backdrop-blur-md bg-white/10 rounded-2xl flex items-center justify-center text-3xl border border-white/20">
                    {feature.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-emerald-600/20 rounded-[3rem] p-16 border border-white/20 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                Ready to Find Your Study Destination?
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of students who have used StudyPath to make informed decisions about their education abroad
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/countries"
                  className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-emerald-600 transition-all shadow-xl hover:shadow-2xl"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 backdrop-blur-lg bg-slate-900/50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                StudyPath
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Data-driven insights for international students making life-changing decisions
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 tracking-tight">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/countries" className="text-slate-400 hover:text-white transition">
                    Browse Countries
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-slate-400 hover:text-white transition">
                    Compare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 tracking-tight">Data Sources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• REST Countries API</li>
                <li>• World Bank Database</li>
                <li>• QS University Rankings</li>
                <li>• Numbeo Cost of Living Index</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 StudyPath. Built as an academic portfolio project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}