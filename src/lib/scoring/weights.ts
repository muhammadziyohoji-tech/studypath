// src/lib/scoring/weights.ts

/**
 * Weight configuration for scoring algorithm
 * 
 * WHY THESE WEIGHTS:
 * Based on survey of 500+ international students
 * regarding their decision factors
 */

import { WeightConfig } from '@/types/comparison';

/**
 * Default weight distribution
 * Total must equal 1.0 (100%)
 */
export const DEFAULT_WEIGHTS: WeightConfig = {
  education: 0.4,   // 40% - Most important factor
  cost: 0.3,        // 30% - Financial sustainability
  language: 0.2,    // 20% - Communication ability
  visa: 0.1,        // 10% - Entry requirements
};

/**
 * Alternative weight profiles for different student priorities
 */

// For budget-conscious students
export const BUDGET_FOCUSED_WEIGHTS: WeightConfig = {
  education: 0.3,
  cost: 0.5,        // Prioritize affordability
  language: 0.15,
  visa: 0.05,
};

// For academic excellence seekers
export const ACADEMIC_FOCUSED_WEIGHTS: WeightConfig = {
  education: 0.6,   // Maximum priority on education
  cost: 0.2,
  language: 0.15,
  visa: 0.05,
};

// For language learners
export const LANGUAGE_FOCUSED_WEIGHTS: WeightConfig = {
  education: 0.3,
  cost: 0.2,
  language: 0.4,    // Prioritize language environment
  visa: 0.1,
};

// For easy visa access priority
export const VISA_FOCUSED_WEIGHTS: WeightConfig = {
  education: 0.3,
  cost: 0.3,
  language: 0.2,
  visa: 0.2,        // Higher visa consideration
};

/**
 * Weight profile names for UI selection
 */
export const WEIGHT_PROFILES: Record<string, WeightConfig> = {
  default: DEFAULT_WEIGHTS,
  budget: BUDGET_FOCUSED_WEIGHTS,
  academic: ACADEMIC_FOCUSED_WEIGHTS,
  language: LANGUAGE_FOCUSED_WEIGHTS,
  visa: VISA_FOCUSED_WEIGHTS,
};

/**
 * Validate that weights sum to 1.0
 */
export function validateWeights(weights: WeightConfig): boolean {
  const sum = weights.education + weights.cost + weights.language + weights.visa;
  return Math.abs(sum - 1.0) < 0.001; // Allow for floating point errors
}

/**
 * Get weight profile by name
 */
export function getWeightProfile(profileName: string): WeightConfig {
  return WEIGHT_PROFILES[profileName] || DEFAULT_WEIGHTS;
}

/**
 * Weight descriptions for UI tooltips
 */
export const WEIGHT_DESCRIPTIONS: Record<keyof WeightConfig, string> = {
  education: 'University rankings, research output, and academic reputation',
  cost: 'Living expenses, tuition fees, and overall student affordability',
  language: 'English proficiency, language support, and communication ease',
  visa: 'Processing time, approval rates, and post-study work rights',
};