// src/hooks/useComparison.ts

/**
 * Hook for managing country comparison state
 * 
 * FEATURES:
 * - Select two countries
 * - Calculate comparison
 * - Manage loading/error states
 */

import { useState, useCallback } from 'react';
import { CountryComparison, ComparisonState } from '@/types/comparison';
import { compareCountries } from '@/lib/scoring/algorithm';
import { COST_OF_LIVING_DATA } from '@/lib/constants/studyMetrics';
import { useCountries } from './useCountries';

export function useComparison() {
  const { countries } = useCountries();
  
  const [state, setState] = useState<ComparisonState>({
    selectedCountries: [undefined, undefined],
    isComparing: false,
    result: null,
    error: null,
  });

  /**
   * Select a country for comparison
   */
  const selectCountry = useCallback((code: string, position: 0 | 1) => {
    setState((prev) => {
      const newSelection = [...prev.selectedCountries] as [string?, string?];
      newSelection[position] = code;
      return {
        ...prev,
        selectedCountries: newSelection,
        result: null,
        error: null,
      };
    });
  }, []);

  /**
   * Clear all selections
   */
  const clearSelection = useCallback(() => {
    setState({
      selectedCountries: [undefined, undefined],
      isComparing: false,
      result: null,
      error: null,
    });
  }, []);

  /**
   * Perform comparison
   */
  const performComparison = useCallback(() => {
    const [code1, code2] = state.selectedCountries;

    if (!code1 || !code2) {
      setState((prev) => ({
        ...prev,
        error: 'Please select two countries',
      }));
      return;
    }

    if (code1 === code2) {
      setState((prev) => ({
        ...prev,
        error: 'Please select two different countries',
      }));
      return;
    }

    setState((prev) => ({ ...prev, isComparing: true, error: null }));

    try {
      const country1 = countries.find((c) => c.code === code1);
      const country2 = countries.find((c) => c.code === code2);

      if (!country1 || !country2) {
        throw new Error('Country data not found');
      }

      const costIndex1 = COST_OF_LIVING_DATA[code1] || 60;
      const costIndex2 = COST_OF_LIVING_DATA[code2] || 60;

      const result = compareCountries(
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
      );

      setState((prev) => ({
        ...prev,
        result,
        isComparing: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Comparison failed',
        isComparing: false,
      }));
    }
  }, [state.selectedCountries, countries]);

  /**
   * Check if comparison is ready
   */
  const canCompare =
    state.selectedCountries[0] !== undefined &&
    state.selectedCountries[1] !== undefined &&
    state.selectedCountries[0] !== state.selectedCountries[1];

  return {
    ...state,
    selectCountry,
    clearSelection,
    performComparison,
    canCompare,
  };
}
