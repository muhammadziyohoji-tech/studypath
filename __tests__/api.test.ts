// __tests__/api.test.ts

/**
 * API Client Tests
 * 
 * Tests for REST Countries API integration
 */

import { getAllCountries, getCountryByCode, searchCountries } from '@/lib/api/restCountries';

// Mock fetch globally
global.fetch = jest.fn();

describe('REST Countries API Client', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllCountries', () => {
    it('should fetch all countries successfully', async () => {
      const mockData = [
        {
          cca3: 'USA',
          name: { common: 'United States', official: 'United States of America' },
          capital: ['Washington, D.C.'],
          population: 331900000,
          flags: { svg: 'https://example.com/usa.svg' },
          region: 'Americas',
          languages: { eng: 'English' },
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const countries = await getAllCountries();

      expect(countries).toHaveLength(1);
      expect(countries[0].code).toBe('USA');
      expect(countries[0].name).toBe('United States');
      expect(countries[0].population).toBe(331900000);
    });

    it('should handle API errors gracefully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      await expect(getAllCountries()).rejects.toThrow();
    });

    it('should cache results', async () => {
      const mockData = [
        {
          cca3: 'USA',
          name: { common: 'United States', official: 'United States of America' },
          capital: ['Washington, D.C.'],
          population: 331900000,
          flags: { svg: 'https://example.com/usa.svg' },
          region: 'Americas',
          languages: { eng: 'English' },
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      // First call
      await getAllCountries();

      // Second call (should use cache)
      await getAllCountries();

      // Fetch should only be called once due to caching
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCountryByCode', () => {
    it('should fetch country by code', async () => {
      const mockData = [
        {
          cca3: 'USA',
          name: { common: 'United States', official: 'United States of America' },
          capital: ['Washington, D.C.'],
          population: 331900000,
          flags: { svg: 'https://example.com/usa.svg' },
          region: 'Americas',
          subregion: 'North America',
          languages: { eng: 'English' },
          currencies: { USD: { name: 'United States dollar', symbol: '$' } },
          timezones: ['UTC-12:00', 'UTC-11:00'],
          borders: ['CAN', 'MEX'],
          area: 9372610,
          latlng: [38, -97],
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const country = await getCountryByCode('USA');

      expect(country.code).toBe('USA');
      expect(country.name).toBe('United States');
      expect(country.capital).toBe('Washington, D.C.');
      expect(country.currencies).toContain('United States dollar');
      expect(country.borders).toContain('CAN');
    });

    it('should handle invalid country code', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(getCountryByCode('INVALID')).rejects.toThrow();
    });
  });

  describe('searchCountries', () => {
    it('should search countries by name', async () => {
      const mockData = [
        {
          cca3: 'USA',
          name: { common: 'United States', official: 'United States of America' },
          capital: ['Washington, D.C.'],
          population: 331900000,
          flags: { svg: 'https://example.com/usa.svg' },
          region: 'Americas',
          languages: { eng: 'English' },
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const countries = await searchCountries('United');

      expect(countries).toHaveLength(1);
      expect(countries[0].name).toBe('United States');
    });

    it('should return empty array for no matches', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Not found'));

      const countries = await searchCountries('XYZ123');

      expect(countries).toEqual([]);
    });

    it('should handle short queries', async () => {
      const countries = await searchCountries('U');

      // Should return all countries for short queries
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});