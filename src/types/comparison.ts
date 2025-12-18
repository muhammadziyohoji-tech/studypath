// src/types/comparison.ts

/**
 * Types for country comparison functionality
 */

/**
 * Individual scoring factors for a country
 */
export interface ScoringFactors {
  education: number;    // 0-100
  cost: number;         // 0-100
  language: number;     // 0-100
  visa: number;         // 0-100
  total: number;        // Weighted total score
}

/**
 * Configurable weights for scoring algorithm
 */
export interface WeightConfig {
  education: number;    // Default: 0.4
  cost: number;         // Default: 0.3
  language: number;     // Default: 0.2
  visa: number;         // Default: 0.1
}

/**
 * Result of comparing two countries
 */
export interface CountryComparison {
  country1: ScoringFactors;
  country2: ScoringFactors;
  winner: 'country1' | 'country2';
  difference: number;           // Absolute difference in total scores
  recommendation: string;        // Human-readable recommendation
}

/**
 * Comparison request from user
 */
export interface ComparisonRequest {
  country1Code: string;
  country2Code: string;
  customWeights?: WeightConfig;
}

/**
 * Comparison state for UI
 */
export interface ComparisonState {
  selectedCountries: [string?, string?];
  isComparing: boolean;
  result: CountryComparison | null;
  error: string | null;
}