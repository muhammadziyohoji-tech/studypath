// src/hooks/useCountries.ts

/**
 * Custom Hook for Country Data Management
 * 
 * WHY USE HOOKS:
 * - Encapsulates data fetching logic (reusable across components)
 * - Manages loading/error states automatically
 * - Provides type-safe data
 * - Easy to test in isolation
 * 
 * USAGE EXAMPLE:
 * const { countries, loading, error } = useCountries();
 */

import { useState, useEffect } from 'react';
import { Country } from '@/types/country';
import { getAllCountries } from '@/lib/api/restCountries';

interface UseCountriesReturn {
  countries: Country[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCountries(): UseCountriesReturn {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getAllCountries();
      setCountries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching countries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []); // Empty dependency array = run once on mount

  return {
    countries,
    loading,
    error,
    refetch: fetchCountries, // Allow manual refetch
  };
}

/**
 * Hook for filtered country search
 */
export function useCountrySearch() {
  const { countries, loading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // Filter countries based on search and region
  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    const matchesRegion = 
      selectedRegion === 'all' || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return {
    countries: filteredCountries,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    totalCount: countries.length,
    filteredCount: filteredCountries.length,
  };
}

/**
 * Hook for country comparison
 */
export function useCountryComparison() {
  const [selectedCountries, setSelectedCountries] = useState<[string?, string?]>([
    undefined,
    undefined,
  ]);

  const selectCountry = (countryCode: string, position: 0 | 1) => {
    const newSelection = [...selectedCountries] as [string?, string?];
    newSelection[position] = countryCode;
    setSelectedCountries(newSelection);
  };

  const clearSelection = () => {
    setSelectedCountries([undefined, undefined]);
  };

  const canCompare = 
    selectedCountries[0] !== undefined && 
    selectedCountries[1] !== undefined &&
    selectedCountries[0] !== selectedCountries[1];

  return {
    selectedCountries,
    selectCountry,
    clearSelection,
    canCompare,
  };
}