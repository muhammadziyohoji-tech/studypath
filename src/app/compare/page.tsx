// src/app/compare/page.tsx

/**
 * Country Comparison Page
 * 
 * FEATURES:
 * - Select two countries from dropdown
 * - Calculate and display scores
 * - Visual comparison with bar charts
 * - Winner recommendation
 */

'use client';

import { useState, useMemo } from 'react';
import { useCountries } from '@/hooks/useCountries';
import { compareCountries } from '@/lib/scoring/algorithm';
import { COST_OF_LIVING_DATA } from '@/lib/constants/studyMetrics';

export default function ComparePage() {
  const { countries, loading } = useCountries();
  const [country1Code, setCountry1Code] = useState<string>('');
  const [country2Code, setCountry2Code] = useState<string>('');

  // Calculate comparison when both countries selected
  const comparison = useMemo(() => {
    if (!country1Code || !country2Code || country1Code === country2Code) {
      return null;
    }

    const country1 = countries.find(c => c.code === country1Code);
    const country2 = countries.find(c => c.code === country2Code);

    if (!country1 || !country2) return null;

    // Get cost of living data (in real app, fetch from API)
    const costIndex1 = COST_OF_LIVING_DATA[country1Code] || 60;
    const costIndex2 = COST_OF_LIVING_DATA[country2Code] || 60;

    return {
      ...compareCountries(
        {
          code: country1.code,
          languages: country1.languages,
          costIndex: costIndex1,
        },
        {
          code: country2.code,
          languages: country2.languages,
          costIndex: costIndex2,
        }
      ),
      country1Data: country1,
      country2Data: country2,
    };
  }, [country1Code, country2Code, countries]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading countries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Study Destinations
          </h1>
          <p className="text-lg text-gray-600">
            Select two countries to see which is better for your study abroad plans
          </p>
        </div>

        {/* Country Selectors */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Country 1 Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country 1
              </label>
              <select
                value={country1Code}
                onChange={(e) => setCountry1Code(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option 
                    key={country.code} 
                    value={country.code}
                    disabled={country.code === country2Code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Country 2 Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country 2
              </label>
              <select
                value={country2Code}
                onChange={(e) => setCountry2Code(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option 
                    key={country.code} 
                    value={country.code}
                    disabled={country.code === country1Code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Results */}
        {comparison && (
          <div className="space-y-8">
            {/* Winner Announcement */}
            <div className={`rounded-lg p-6 text-center ${
              comparison.winner === 'country1' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-green-50 border-2 border-green-200'
            }`}>
              <h2 className="text-2xl font-bold mb-2">
                🎓 {comparison.winner === 'country1' 
                  ? comparison.country1Data.name 
                  : comparison.country2Data.name
                } is the Better Choice
              </h2>
              <p className="text-lg text-gray-700">
                Overall Score: {
                  comparison.winner === 'country1' 
                    ? comparison.country1.total 
                    : comparison.country2.total
                }/100
              </p>
              <p className="mt-2 text-gray-600">
                {comparison.recommendation}
              </p>
            </div>

            {/* Detailed Score Comparison */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">Detailed Comparison</h3>
              
              <div className="space-y-6">
                {/* Education Quality */}
                <ScoreBar
                  label="Education Quality (40%)"
                  score1={comparison.country1.education}
                  score2={comparison.country2.education}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />

                {/* Cost of Living */}
                <ScoreBar
                  label="Affordability (30%)"
                  score1={comparison.country1.cost}
                  score2={comparison.country2.cost}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />

                {/* Language Environment */}
                <ScoreBar
                  label="Language Environment (20%)"
                  score1={comparison.country1.language}
                  score2={comparison.country2.language}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />

                {/* Visa Accessibility */}
                <ScoreBar
                  label="Visa Accessibility (10%)"
                  score1={comparison.country1.visa}
                  score2={comparison.country2.visa}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />
              </div>

              {/* Total Scores */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">{comparison.country1Data.name}</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {comparison.country1.total}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">{comparison.country2Data.name}</p>
                    <p className="text-3xl font-bold text-green-600">
                      {comparison.country2.total}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!comparison && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">
              Select two countries above to compare them
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Component: Visual score comparison bar
 */
interface ScoreBarProps {
  label: string;
  score1: number;
  score2: number;
  country1Name: string;
  country2Name: string;
}

function ScoreBar({ label, score1, score2, country1Name, country2Name }: ScoreBarProps) {
  const maxScore = Math.max(score1, score2);
  const width1 = (score1 / 100) * 100;
  const width2 = (score2 / 100) * 100;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-3">{label}</h4>
      
      {/* Country 1 Bar */}
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 w-32 truncate">{country1Name}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div
              className={`h-6 rounded-full flex items-center justify-end pr-2 ${
                score1 === maxScore ? 'bg-blue-600' : 'bg-blue-400'
              }`}
              style={{ width: `${width1}%` }}
            >
              <span className="text-white text-xs font-medium">{score1}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Country 2 Bar */}
      <div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 w-32 truncate">{country2Name}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div
              className={`h-6 rounded-full flex items-center justify-end pr-2 ${
                score2 === maxScore ? 'bg-green-600' : 'bg-green-400'
              }`}
              style={{ width: `${width2}%` }}
            >
              <span className="text-white text-xs font-medium">{score2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}