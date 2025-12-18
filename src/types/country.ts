// src/types/country.ts

/**
 * Core type definitions for country data
 * 
 * WHY TYPES MATTER:
 * - Catch errors at compile time (not runtime)
 * - Self-documenting code
 * - Better IDE autocomplete
 * - Easier refactoring
 */

/**
 * Basic country information (list view)
 */
export interface Country {
  code: string; // ISO 3166-1 alpha-3 code (e.g., "USA")
  name: string; // Common name
  officialName: string; // Official name
  capital: string;
  population: number;
  flag: string; // SVG URL
  region: string; // e.g., "Europe", "Asia"
  languages: string[];
}

/**
 * Detailed country information (detail page)
 */
export interface CountryDetail extends Country {
  subregion: string;
  currencies: string[];
  timezones: string[];
  borders: string[]; // Array of bordering country codes
  area: number; // Square kilometers
  latlng: [number, number]; // [latitude, longitude]
}

/**
 * Study-specific metadata (not from API)
 */
export interface StudyMetadata {
  costOfLivingIndex: number; // Numbeo index (100 = NYC baseline)
  averageMonthlyExpenses: number; // USD
  visaProcessingTime: string; // e.g., "4-6 weeks"
  topUniversities: string[]; // Names of top 5 universities
  studentPopulation: number; // International students
  postStudyWorkRights: boolean;
}

/**
 * Combined country data for study comparison
 */
export interface StudyCountry extends CountryDetail {
  studyData: StudyMetadata;
}

// src/types/comparison.ts

/**
 * Individual scoring factors
 */
export interface ScoringFactors {
  education: number; // 0-100
  cost: number; // 0-100
  language: number; // 0-100
  visa: number; // 0-100
  total: number; // Weighted total
}

/**
 * Configurable weights for scoring
 */
export interface WeightConfig {
  education: number; // Default: 0.4
  cost: number; // Default: 0.3
  language: number; // Default: 0.2
  visa: number; // Default: 0.1
}

/**
 * Result of comparing two countries
 */
export interface CountryComparison {
  country1: ScoringFactors;
  country2: ScoringFactors;
  winner: 'country1' | 'country2';
  difference: number; // Absolute difference in total scores
  recommendation: string; // Human-readable recommendation
}

/**
 * Comparison request from user
 */
export interface ComparisonRequest {
  country1Code: string;
  country2Code: string;
  customWeights?: WeightConfig;
}

// src/types/api.ts

/**
 * API response types
 */

export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: number;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  details?: unknown;
}

/**
 * REST Countries API raw response type
 * (before transformation)
 */
export interface RestCountriesResponse {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capital?: string[];
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  subregion?: string;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  timezones?: string[];
  borders?: string[];
  area?: number;
  latlng?: [number, number];
}