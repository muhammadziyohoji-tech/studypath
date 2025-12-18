import { Country, CountryDetail } from '@/types/country';

/**
 * Transform REST Countries API response to our Country type
 */
export function transformCountryData(apiData: any): Country {
  return {
    code: apiData.cca3,
    name: apiData.name.common,
    officialName: apiData.name.official,
    capital: apiData.capital?.[0] || 'N/A',
    population: apiData.population,
    flag: apiData.flags.svg,
    region: apiData.region,
    languages: apiData.languages ? Object.values(apiData.languages) : [],
  };
}

/**
 * Transform detailed country data
 */
export function transformCountryDetailData(apiData: any): CountryDetail {
  return {
    code: apiData.cca3,
    name: apiData.name.common,
    officialName: apiData.name.official,
    capital: apiData.capital?.[0] || 'N/A',
    population: apiData.population,
    flag: apiData.flags.svg,
    region: apiData.region,
    subregion: apiData.subregion || 'N/A',
    languages: apiData.languages ? Object.values(apiData.languages) : [],
    currencies: apiData.currencies
      ? Object.values(apiData.currencies).map((c: any) => c.name)
      : [],
    timezones: apiData.timezones || [],
    borders: apiData.borders || [],
    area: apiData.area || 0,
    latlng: apiData.latlng || [0, 0],
  };
}

/**
 * Sort countries by name
 */
export function sortCountriesByName(countries: Country[]): Country[] {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Sort countries by population
 */
export function sortCountriesByPopulation(
  countries: Country[],
  descending = true
): Country[] {
  return [...countries].sort((a, b) =>
    descending ? b.population - a.population : a.population - b.population
  );
}

/**
 * Filter countries by search query
 */
export function filterCountriesBySearch(
  countries: Country[],
  query: string
): Country[] {
  if (!query.trim()) return countries;
  
  const lowerQuery = query.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(lowerQuery) ||
      country.capital.toLowerCase().includes(lowerQuery) ||
      country.region.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter countries by region
 */
export function filterCountriesByRegion(
  countries: Country[],
  region: string
): Country[] {
  if (region === 'all' || !region) return countries;
  return countries.filter((country) => country.region === region);
}
