// src/lib/api/restCountries.ts

/**
 * REST Countries API Client
 * 
 * WHY THIS APPROACH:
 * - Centralized API logic (single source of truth)
 * - Error handling in one place
 * - Type-safe responses with TypeScript
 * - Easy to mock for testing
 */

import { Country, CountryDetail } from '@/types/country';

const BASE_URL = 'https://restcountries.com/v3.1';

// Cache to reduce API calls (professional optimization)
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

/**
 * Generic fetch with caching and error handling
 */
async function fetchWithCache<T>(url: string): Promise<T> {
  // Check cache first
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Update cache
    cache.set(url, { data, timestamp: Date.now() });
    
    return data as T;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw new Error('Failed to fetch data. Please try again later.');
  }
}

/**
 * Fetch all countries with essential fields
 * WHY: Reduces payload size by requesting only needed fields
 */
export async function getAllCountries(): Promise<Country[]> {
  const fields = 'name,capital,population,flags,cca3,region,languages';
  const url = `${BASE_URL}/all?fields=${fields}`;
  
  const data = await fetchWithCache<any[]>(url);
  
  // Transform API response to our internal type
  return data.map(country => ({
    code: country.cca3,
    name: country.name.common,
    officialName: country.name.official,
    capital: country.capital?.[0] || 'N/A',
    population: country.population,
    flag: country.flags.svg,
    region: country.region,
    languages: country.languages ? Object.values(country.languages) : [],
  }));
}

/**
 * Fetch detailed information for a single country
 */
export async function getCountryByCode(code: string): Promise<CountryDetail> {
  const url = `${BASE_URL}/alpha/${code}`;
  const data = await fetchWithCache<any[]>(url);
  
  const country = data[0];
  
  return {
    code: country.cca3,
    name: country.name.common,
    officialName: country.name.official,
    capital: country.capital?.[0] || 'N/A',
    population: country.population,
    flag: country.flags.svg,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages ? Object.values(country.languages) : [],
    currencies: country.currencies 
      ? Object.values(country.currencies).map((c: any) => c.name)
      : [],
    timezones: country.timezones || [],
    borders: country.borders || [],
    area: country.area,
    // Add lat/lng for map visualization
    latlng: country.latlng || [0, 0],
  };
}

/**
 * Search countries by name
 * WHY: Better UX than filtering client-side for large datasets
 */
export async function searchCountries(query: string): Promise<Country[]> {
  if (!query || query.length < 2) {
    return getAllCountries();
  }

  const url = `${BASE_URL}/name/${query}`;
  
  try {
    const data = await fetchWithCache<any[]>(url);
    
    return data.map(country => ({
      code: country.cca3,
      name: country.name.common,
      officialName: country.name.official,
      capital: country.capital?.[0] || 'N/A',
      population: country.population,
      flag: country.flags.svg,
      region: country.region,
      languages: country.languages ? Object.values(country.languages) : [],
    }));
  } catch {
    // If search fails, return empty array
    return [];
  }
}

/**
 * Filter countries by region
 */
export async function getCountriesByRegion(region: string): Promise<Country[]> {
  const url = `${BASE_URL}/region/${region}`;
  const data = await fetchWithCache<any[]>(url);
  
  return data.map(country => ({
    code: country.cca3,
    name: country.name.common,
    officialName: country.name.official,
    capital: country.capital?.[0] || 'N/A',
    population: country.population,
    flag: country.flags.svg,
    region: country.region,
    languages: country.languages ? Object.values(country.languages) : [],
  }));
}