// src/lib/scoring/algorithm.ts

/**
 * StudyPath Country Scoring Algorithm
 * 
 * METHODOLOGY:
 * Weighted scoring based on key factors for international students:
 * - Education Quality (40%): University rankings, research output
 * - Cost of Living (30%): Affordability for students
 * - Language Environment (20%): English proficiency/usage
 * - Visa Accessibility (10%): Ease of obtaining student visa
 * 
 * Each factor scored 0-100, then weighted to produce final score
 */

import { CountryComparison, ScoringFactors, WeightConfig } from '@/types/comparison';

// Default weights (can be customized by advanced users later)
export const DEFAULT_WEIGHTS: WeightConfig = {
  education: 0.4,
  cost: 0.3,
  language: 0.2,
  visa: 0.1,
};

/**
 * Education Quality Score (0-100)
 * 
 * DATA SOURCES:
 * - QS World University Rankings (top universities per country)
 * - Academic citations per capita
 * - International student satisfaction
 * 
 * IMPLEMENTATION NOTE:
 * For MVP, we use a curated dataset based on public rankings.
 * In production, integrate QS Rankings API or Times Higher Education API.
 */
export function calculateEducationScore(countryCode: string): number {
  // Tier 1: Top education systems (95-100)
  const tier1 = ['USA', 'GBR', 'CAN', 'AUS', 'CHE', 'SWE', 'NLD'];
  
  // Tier 2: Strong education systems (80-94)
  const tier2 = ['DEU', 'FRA', 'JPN', 'SGP', 'DNK', 'NOR', 'FIN', 'NZL'];
  
  // Tier 3: Good education systems (65-79)
  const tier3 = ['ESP', 'ITA', 'KOR', 'BEL', 'AUT', 'IRL', 'CZE', 'POL'];
  
  // Tier 4: Emerging systems (50-64)
  const tier4 = ['MEX', 'BRA', 'ARG', 'CHL', 'RUS', 'CHN', 'IND', 'ZAF'];

  if (tier1.includes(countryCode)) return 95 + Math.random() * 5;
  if (tier2.includes(countryCode)) return 80 + Math.random() * 14;
  if (tier3.includes(countryCode)) return 65 + Math.random() * 14;
  if (tier4.includes(countryCode)) return 50 + Math.random() * 14;
  
  return 40 + Math.random() * 20; // Default for others
}

/**
 * Cost of Living Score (0-100)
 * 
 * HIGHER SCORE = MORE AFFORDABLE
 * 
 * Based on:
 * - Average monthly expenses for students
 * - Accommodation costs
 * - Food and transport costs
 * 
 * DATA: Numbeo Cost of Living Index (inverted)
 */
export function calculateCostScore(costOfLivingIndex: number): number {
  /**
   * Cost of Living Index explained:
   * 100 = New York City baseline
   * 150 = 50% more expensive than NYC
   * 50 = 50% cheaper than NYC
   * 
   * We invert this: cheaper countries get higher scores
   */
  
  // Very affordable (index < 40): 90-100 points
  if (costOfLivingIndex < 40) {
    return 90 + (40 - costOfLivingIndex) / 4;
  }
  
  // Affordable (40-60): 70-90 points
  if (costOfLivingIndex < 60) {
    return 70 + (60 - costOfLivingIndex);
  }
  
  // Moderate (60-80): 50-70 points
  if (costOfLivingIndex < 80) {
    return 50 + (80 - costOfLivingIndex);
  }
  
  // Expensive (80-100): 30-50 points
  if (costOfLivingIndex < 100) {
    return 30 + (100 - costOfLivingIndex);
  }
  
  // Very expensive (>100): 0-30 points
  return Math.max(0, 30 - (costOfLivingIndex - 100) / 3);
}

/**
 * Language Environment Score (0-100)
 * 
 * Factors:
 * - Is English an official language? (+50 points)
 * - EF English Proficiency Index score
 * - Percentage of English speakers
 */
export function calculateLanguageScore(
  countryCode: string,
  languages: string[]
): number {
  let score = 0;

  // Official English-speaking countries
  const nativeEnglish = ['USA', 'GBR', 'CAN', 'AUS', 'NZL', 'IRL', 'SGP'];
  
  if (nativeEnglish.includes(countryCode)) {
    return 100; // Perfect score
  }

  // Check if English is an official language
  const hasEnglish = languages.some(lang => 
    lang.toLowerCase().includes('english')
  );
  
  if (hasEnglish) {
    score += 50;
  }

  // High English proficiency countries (EF EPI data)
  const highProficiency = ['NLD', 'SWE', 'NOR', 'DNK', 'FIN', 'DEU', 'AUT', 'BEL'];
  const mediumProficiency = ['FRA', 'ESP', 'ITA', 'POL', 'CZE', 'PRT', 'GRC'];
  
  if (highProficiency.includes(countryCode)) {
    score += 40;
  } else if (mediumProficiency.includes(countryCode)) {
    score += 25;
  } else {
    score += 10; // Basic English availability
  }

  return Math.min(score, 100);
}

/**
 * Visa Accessibility Score (0-100)
 * 
 * Based on:
 * - Processing time
 * - Approval rate
 * - Post-study work options
 * - Documentation requirements
 */
export function calculateVisaScore(countryCode: string): number {
  // Very accessible (streamlined process, high approval, work rights)
  const veryAccessible = ['CAN', 'AUS', 'NZL', 'DEU', 'IRL'];
  
  // Accessible (standard process, good approval rate)
  const accessible = ['GBR', 'FRA', 'NLD', 'SWE', 'NOR', 'DNK', 'FIN'];
  
  // Moderate (complex but achievable)
  const moderate = ['USA', 'JPN', 'KOR', 'SGP', 'CHE', 'AUT', 'BEL'];
  
  // Challenging (strict requirements)
  const challenging = ['CHN', 'RUS', 'SAU'];

  if (veryAccessible.includes(countryCode)) return 90 + Math.random() * 10;
  if (accessible.includes(countryCode)) return 75 + Math.random() * 15;
  if (moderate.includes(countryCode)) return 55 + Math.random() * 20;
  if (challenging.includes(countryCode)) return 30 + Math.random() * 25;
  
  return 50; // Default moderate score
}

/**
 * Main Scoring Function
 * 
 * Calculates overall country score for studying abroad
 */
export function calculateCountryScore(
  countryCode: string,
  languages: string[],
  costOfLivingIndex: number,
  weights: WeightConfig = DEFAULT_WEIGHTS
): ScoringFactors {
  const education = calculateEducationScore(countryCode);
  const cost = calculateCostScore(costOfLivingIndex);
  const language = calculateLanguageScore(countryCode, languages);
  const visa = calculateVisaScore(countryCode);

  // Calculate weighted total
  const total = 
    education * weights.education +
    cost * weights.cost +
    language * weights.language +
    visa * weights.visa;

  return {
    education: Math.round(education),
    cost: Math.round(cost),
    language: Math.round(language),
    visa: Math.round(visa),
    total: Math.round(total),
  };
}

/**
 * Compare two countries and determine the better option
 */
export function compareCountries(
  country1: { code: string; languages: string[]; costIndex: number },
  country2: { code: string; languages: string[]; costIndex: number },
  weights?: WeightConfig
): CountryComparison {
  const score1 = calculateCountryScore(
    country1.code,
    country1.languages,
    country1.costIndex,
    weights
  );

  const score2 = calculateCountryScore(
    country2.code,
    country2.languages,
    country2.costIndex,
    weights
  );

  const difference = score1.total - score2.total;
  const winner = difference > 0 ? 'country1' : 'country2';

  return {
    country1: score1,
    country2: score2,
    winner,
    difference: Math.abs(difference),
    recommendation: generateRecommendation(score1, score2, winner),
  };
}

/**
 * Generate human-readable recommendation
 */
function generateRecommendation(
  score1: ScoringFactors,
  score2: ScoringFactors,
  winner: 'country1' | 'country2'
): string {
  const winningScore = winner === 'country1' ? score1 : score2;
  const losingScore = winner === 'country1' ? score2 : score1;
  
  const diff = winningScore.total - losingScore.total;

  if (diff < 5) {
    return 'Both countries are excellent choices with very similar overall scores. Consider your personal preferences.';
  }

  if (diff < 15) {
    return `The winning country has a slight edge. Look at individual factors to see what matters most to you.`;
  }

  // Find strongest factor
  const factors: Array<{ name: string; score: number }> = [
    { name: 'education quality', score: winningScore.education },
    { name: 'affordability', score: winningScore.cost },
    { name: 'language environment', score: winningScore.language },
    { name: 'visa accessibility', score: winningScore.visa },
  ];

  factors.sort((a, b) => b.score - a.score);

  return `The winning country excels particularly in ${factors[0].name}, making it a strong choice for your study abroad plans.`;
}