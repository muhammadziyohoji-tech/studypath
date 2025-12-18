// src/app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Study Abroad Destination
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Data-driven insights to help you choose the right country for your international education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/countries"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Explore Countries
              </Link>
              <Link
                href="/compare"
                className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition border-2 border-white"
              >
                Compare Destinations
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-blue-200">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-blue-200">Key Factors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Data-Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How StudyPath Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Search</h3>
              <p className="text-gray-600">
                Browse 250+ countries with detailed information on education, costs, and living conditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Compare</h3>
              <p className="text-gray-600">
                Use our scoring algorithm to objectively compare countries based on your priorities
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Decide</h3>
              <p className="text-gray-600">
                Get personalized recommendations and make an informed decision about your future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Scoring Methodology
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We evaluate countries using a weighted algorithm based on four critical factors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education Quality */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3">Education Quality</h3>
              <div className="text-3xl font-bold text-blue-600 mb-3">40%</div>
              <p className="text-gray-600">
                University rankings, research output, and academic reputation
              </p>
            </div>

            {/* Cost of Living */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Affordability</h3>
              <div className="text-3xl font-bold text-green-600 mb-3">30%</div>
              <p className="text-gray-600">
                Living costs, tuition fees, and overall student expenses
              </p>
            </div>

            {/* Language */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Language</h3>
              <div className="text-3xl font-bold text-purple-600 mb-3">20%</div>
              <p className="text-gray-600">
                English proficiency, language support, and communication ease
              </p>
            </div>

            {/* Visa */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-3">Visa Access</h3>
              <div className="text-3xl font-bold text-orange-600 mb-3">10%</div>
              <p className="text-gray-600">
                Visa processing ease, approval rates, and post-study work rights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive Maps</h3>
                <p className="text-gray-600">
                  Visualize study destinations on an interactive world map with score-based markers
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  📈
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data Visualizations</h3>
                <p className="text-gray-600">
                  Charts and graphs showing cost breakdowns, population trends, and more
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  🔍
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Filtering</h3>
                <p className="text-gray-600">
                  Filter by region, language, cost range, and other criteria to find your match
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Data</h3>
                <p className="text-gray-600">
                  Information sourced from REST Countries API and World Bank databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Study Destination?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have used StudyPath to make informed decisions about their education abroad
          </p>
          <Link
            href="/countries"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">StudyPath</h3>
              <p className="text-gray-400">
                Data-driven insights for international students making life-changing decisions
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/countries" className="hover:text-white transition">
                    Browse Countries
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="hover:text-white transition">
                    Compare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Data Sources</h4>
              <ul className="space-y-2 text-sm">
                <li>• REST Countries API</li>
                <li>• World Bank Database</li>
                <li>• QS University Rankings</li>
                <li>• Numbeo Cost of Living Index</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 StudyPath. Built as an academic portfolio project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}