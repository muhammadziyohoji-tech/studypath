// src/app/countries/[code]/page.tsx

import { getCountryByCode } from '@/lib/api/restCountries';
import { getStudyMetadata } from '@/lib/constants/studyMetrics';
import { calculateCountryScore } from '@/lib/scoring/algorithm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * Generate static paths for all countries (optional optimization)
 */
export async function generateStaticParams() {
  // For demo, we'll use dynamic rendering
  // In production, you could pre-generate all country pages
  return [];
}

export default async function CountryDetailPage({
  params,
}: {
  params: { code: string };
}) {
  try {
    // Fetch country data
    const country = await getCountryByCode(params.code);
    const studyData = getStudyMetadata(params.code);

    // Calculate scores
    const costIndex = studyData?.costOfLivingIndex || 60;
    const scores = calculateCountryScore(
      country.code,
      country.languages,
      costIndex
    );

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Flag */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <h1 className="text-5xl font-bold mb-2">{country.name}</h1>
              <p className="text-xl text-gray-200">{country.officialName}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-6">
            <Link
              href="/countries"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to all countries
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Study Suitability Score */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Study Suitability Score
                </h2>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-6xl font-bold">{scores.total}</span>
                  <span className="text-3xl text-blue-200 mb-2">/100</span>
                </div>
                <p className="text-blue-100">
                  Based on education quality, cost, language, and visa factors
                </p>
              </div>

              {/* Score Breakdown */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Score Breakdown</h2>
                
                <div className="space-y-4">
                  <ScoreItem
                    label="Education Quality"
                    score={scores.education}
                    weight="40%"
                    icon="🎓"
                  />
                  <ScoreItem
                    label="Affordability"
                    score={scores.cost}
                    weight="30%"
                    icon="💰"
                  />
                  <ScoreItem
                    label="Language Environment"
                    score={scores.language}
                    weight="20%"
                    icon="💬"
                  />
                  <ScoreItem
                    label="Visa Accessibility"
                    score={scores.visa}
                    weight="10%"
                    icon="✈️"
                  />
                </div>
              </div>

              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InfoItem label="Capital" value={country.capital} />
                  <InfoItem
                    label="Population"
                    value={country.population.toLocaleString()}
                  />
                  <InfoItem label="Region" value={country.region} />
                  <InfoItem label="Subregion" value={country.subregion} />
                  <InfoItem
                    label="Area"
                    value={`${country.area?.toLocaleString()} km²`}
                  />
                  <InfoItem
                    label="Languages"
                    value={country.languages.join(', ')}
                  />
                  <InfoItem
                    label="Currencies"
                    value={country.currencies.join(', ')}
                  />
                  <InfoItem
                    label="Timezones"
                    value={`${country.timezones.length} timezone(s)`}
                  />
                </div>
              </div>

              {/* Study Information */}
              {studyData && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Study Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Cost of Living Index
                      </h3>
                      <p className="text-gray-600">
                        {studyData.costOfLivingIndex} (Base: NYC = 100)
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {studyData.costOfLivingIndex < 60
                          ? 'Very affordable for students'
                          : studyData.costOfLivingIndex < 80
                          ? 'Moderately affordable'
                          : 'Higher cost of living'}
                      </p>
                    </div>

                    <div className="border-l-4 border-green-600 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Average Monthly Expenses
                      </h3>
                      <p className="text-gray-600">
                        ${studyData.averageMonthlyExpenses.toLocaleString()} USD
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Including accommodation, food, transport, and utilities
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Visa Processing Time
                      </h3>
                      <p className="text-gray-600">
                        {studyData.visaProcessingTime}
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-600 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        International Students
                      </h3>
                      <p className="text-gray-600">
                        {studyData.studentPopulation.toLocaleString()} students
                      </p>
                    </div>

                    <div className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Post-Study Work Rights
                      </h3>
                      <p className="text-gray-600">
                        {studyData.postStudyWorkRights ? (
                          <span className="text-green-600 font-medium">
                            ✓ Available
                          </span>
                        ) : (
                          <span className="text-red-600 font-medium">
                            ✗ Limited or unavailable
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Top Universities */}
              {studyData?.topUniversities &&
                studyData.topUniversities.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Top Universities
                    </h2>
                    <ul className="space-y-3">
                      {studyData.topUniversities.map((uni, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="font-bold text-blue-600 text-lg">
                            {index + 1}
                          </span>
                          <span className="text-gray-900">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Link
                    href="/compare"
                    className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
                  >
                    Compare with Another Country
                  </Link>
                  
                  <button className="block w-full px-4 py-3 bg-gray-100 text-gray-900 text-center rounded-lg hover:bg-gray-200 transition">
                    Save to Favorites
                  </button>
                </div>
              </div>

              {/* Neighboring Countries */}
              {country.borders && country.borders.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Bordering Countries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {country.borders.slice(0, 8).map((border) => (
                      <Link
                        key={border}
                        href={`/countries/${border}`}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-blue-100 hover:text-blue-700 transition"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Study Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-blue-900">
                  💡 Study Tips
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Research scholarship opportunities early</li>
                  <li>• Check visa requirements 6+ months ahead</li>
                  <li>• Connect with current international students</li>
                  <li>• Budget for initial setup costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

// Helper Components
function ScoreItem({
  label,
  score,
  weight,
  icon,
}: {
  label: string;
  score: number;
  weight: string;
  icon: string;
}) {
  const percentage = score;
  const color = score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-blue-600' : score >= 40 ? 'bg-orange-500' : 'bg-red-500';

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-gray-900">{score}</span>
          <span className="text-sm text-gray-500 ml-1">/ 100</span>
          <span className="text-xs text-gray-400 ml-2">({weight})</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h4 className="text-sm text-gray-500 mb-1">{label}</h4>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}