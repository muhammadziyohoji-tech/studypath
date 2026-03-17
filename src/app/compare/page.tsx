/**
 * Country Comparison Page
 * * FEATURES:
 * - Select two countries from dropdown
 * - Calculate and display scores
 * - Visual comparison with bar charts
 * - Winner recommendation
 * - 🤖 AI Expert Analysis (Deep Dive)
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

  // --- AI States ---
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Calculate comparison when both countries selected
  const comparison = useMemo(() => {
    // Agar davlatlar o'zgarsa, eski AI javobini tozalab tashlaymiz
    setAiAnalysis(null);
    setAiError(null);

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


  // --- AI Fetch Function ---
  const fetchAiAnalysis = async () => {
    if (!comparison) return;
    setIsAiLoading(true);
    setAiError(null);

    try {
      const response = await fetch('/api/ai-compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country1: comparison.country1Data,
          country2: comparison.country2Data,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAiAnalysis(data.analysis);
      } else {
        setAiError(data.error || "Failed to fetch AI analysis.");
      }
    } catch (error) {
      setAiError("Network error occurred while contacting the AI.");
    } finally {
      setIsAiLoading(false);
    }
  };

  // --- Helper to render AI Markdown Text ---
  const renderAiText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold matnlarni (**text**) ajratib olib, qalin qilib ko'rsatamiz
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="mb-3 text-gray-700 leading-relaxed text-justify">
          {parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={index} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };


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
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Country 1 Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Destination 1
              </label>
              <select
                value={country1Code}
                onChange={(e) => setCountry1Code(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-gray-800"
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
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Destination 2
              </label>
              <select
                value={country2Code}
                onChange={(e) => setCountry2Code(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-gray-800"
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
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Winner Announcement */}
            <div className={`rounded-2xl p-8 text-center shadow-sm ${
              comparison.winner === 'country1' ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200' : 'bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200'
            }`}>
              <h2 className="text-3xl font-black mb-3 text-gray-900">
                🏆 {comparison.winner === 'country1' 
                  ? comparison.country1Data.name 
                  : comparison.country2Data.name
                } is the Better Choice
              </h2>
              <p className="text-xl font-medium text-gray-700 mb-4">
                Overall Match Score: <span className="font-black text-2xl">{
                  comparison.winner === 'country1' 
                    ? comparison.country1.total 
                    : comparison.country2.total
                }</span>/100
              </p>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {comparison.recommendation}
              </p>
            </div>

            {/* Detailed Score Comparison */}
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-black mb-8 text-gray-900 border-b pb-4">Detailed Metrics</h3>
              
              <div className="space-y-8">
                <ScoreBar
                  label="Education Quality (40%)"
                  score1={comparison.country1.education}
                  score2={comparison.country2.education}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />
                <ScoreBar
                  label="Affordability (30%)"
                  score1={comparison.country1.cost}
                  score2={comparison.country2.cost}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />
                <ScoreBar
                  label="Language Environment (20%)"
                  score1={comparison.country1.language}
                  score2={comparison.country2.language}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />
                <ScoreBar
                  label="Visa Accessibility (10%)"
                  score1={comparison.country1.visa}
                  score2={comparison.country2.visa}
                  country1Name={comparison.country1Data.name}
                  country2Name={comparison.country2Data.name}
                />
              </div>
            </div>

            {/* --- AI EXPERT ANALYSIS SECTION --- */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 md:p-10 border border-slate-700 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-blue-500/20 p-4 rounded-full mb-4 ring-1 ring-blue-500/30">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Ask the Global Strategist</h3>
                <p className="text-slate-300 mb-8 max-w-xl">
                  Numbers only tell half the story. Get a deep-dive analysis on visa policies, cost of living, and actual student success rates between {comparison.country1Data.name} and {comparison.country2Data.name}.
                </p>

                {!aiAnalysis && !isAiLoading && (
                  <button 
                    onClick={fetchAiAnalysis}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] active:scale-95 flex items-center gap-3"
                  >
                    Generate Expert Insights
                  </button>
                )}

                {isAiLoading && (
                  <div className="flex flex-col items-center gap-4 text-blue-400 font-medium">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500/30 border-t-blue-500"></div>
                    Generating comprehensive analysis...
                  </div>
                )}

                {aiError && (
                  <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl w-full max-w-3xl text-left">
                    <p className="font-bold mb-1">Error</p>
                    <p className="text-sm">{aiError}</p>
                    <button onClick={fetchAiAnalysis} className="mt-3 text-sm underline hover:text-red-300">Try Again</button>
                  </div>
                )}
              </div>

              {/* AI Analysis Result Output */}
              {aiAnalysis && (
                <div className="mt-10 bg-white/95 backdrop-blur-sm rounded-2xl p-8 relative z-10 shadow-inner">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                    <h4 className="text-2xl font-black text-gray-900">Strategic Verdict</h4>
                  </div>
                  <div className="prose prose-blue max-w-none">
                    {renderAiText(aiAnalysis)}
                  </div>
                </div>
              )}
            </div>
            {/* --- END OF AI SECTION --- */}

          </div>
        )}

        {/* Empty State */}
        {!comparison && (
          <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200 p-16 text-center mt-8">
            <div className="text-6xl mb-4 opacity-50">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Compare?</h3>
            <p className="text-gray-500">
              Select two destinations from the dropdowns above to uncover which one matches your goals.
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
  const width1 = Math.max((score1 / 100) * 100, 5); // Ensure at least 5% width for visibility
  const width2 = Math.max((score2 / 100) * 100, 5);

  return (
    <div>
      <h4 className="text-sm font-bold text-gray-800 mb-4 tracking-wide">{label}</h4>
      
      {/* Country 1 Bar */}
      <div className="mb-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600 w-32 truncate" title={country1Name}>{country1Name}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-8 relative shadow-inner overflow-hidden">
            <div
              className={`h-full flex items-center justify-end pr-4 transition-all duration-1000 ease-out ${
                score1 === maxScore ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-md' : 'bg-gradient-to-r from-blue-300 to-blue-400'
              }`}
              style={{ width: `${width1}%` }}
            >
              <span className="text-white text-sm font-bold">{score1}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Country 2 Bar */}
      <div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600 w-32 truncate" title={country2Name}>{country2Name}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-8 relative shadow-inner overflow-hidden">
            <div
              className={`h-full flex items-center justify-end pr-4 transition-all duration-1000 ease-out delay-100 ${
                score2 === maxScore ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-md' : 'bg-gradient-to-r from-green-300 to-green-400'
              }`}
              style={{ width: `${width2}%` }}
            >
              <span className="text-white text-sm font-bold">{score2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}