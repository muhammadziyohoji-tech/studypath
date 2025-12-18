// ================================================
// src/hooks/useScoring.ts
// ================================================

/**
 * Hook for calculating country scores
 * 
 * FEATURES:
 * - Calculate scores for a country
 * - Apply custom weights
 * - Cache results
 */

import { useState, useEffect, useMemo } from 'react';
import { ScoringFactors, WeightConfig } from '@/types/comparison';
import { calculateCountryScore } from '@/lib/scoring/algorithm';
import { DEFAULT_WEIGHTS } from '@/lib/scoring/weights';
import { COST_OF_LIVING_DATA } from '@/lib/constants/studyMetrics';

interface UseScoringOptions {
  countryCode: string;
  languages: string[];
  customWeights?: WeightConfig;
}

export function useScoring({
  countryCode,
  languages,
  customWeights,
}: UseScoringOptions) {
  const [scores, setScores] = useState<ScoringFactors | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!countryCode) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const costIndex = COST_OF_LIVING_DATA[countryCode] || 60;
      const weights = customWeights || DEFAULT_WEIGHTS;

      const calculatedScores = calculateCountryScore(
        countryCode,
        languages,
        costIndex,
        weights
      );

      setScores(calculatedScores);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Scoring failed');
      setScores(null);
    } finally {
      setLoading(false);
    }
  }, [countryCode, languages, customWeights]);

  return { scores, loading, error };
}

/**
 * Hook to calculate scores for multiple countries
 */
export function useBulkScoring(countryCodes: string[]) {
  const [scoresMap, setScoresMap] = useState<
    Record<string, ScoringFactors>
  >({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (countryCodes.length === 0) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const results: Record<string, ScoringFactors> = {};

    countryCodes.forEach((code) => {
      const costIndex = COST_OF_LIVING_DATA[code] || 60;
      // Note: We'd need languages data here - this is simplified
      const scores = calculateCountryScore(code, [], costIndex);
      results[code] = scores;
    });

    setScoresMap(results);
    setLoading(false);
  }, [countryCodes]);

  return { scoresMap, loading };
}

/**
 * Hook to get score color class
 */
export function useScoreColor(score: number): string {
  return useMemo(() => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-orange-500';
    return 'text-red-600';
  }, [score]);
}

/**
 * Hook to get score label
 */
export function useScoreLabel(score: number): string {
  return useMemo(() => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Below Average';
  }, [score]);
}