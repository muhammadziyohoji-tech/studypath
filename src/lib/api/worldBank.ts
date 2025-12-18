// ================================================
// src/lib/api/worldBank.ts
// ================================================

/**
 * World Bank API Client
 * 
 * WHY WORLD BANK:
 * - Authoritative economic data
 * - GDP, education expenditure, etc.
 * - Free, no authentication required
 * 
 * API Docs: https://datahelpdesk.worldbank.org/knowledgebase/articles/889392
 */

import ApiClient from './apiClient';
import { WorldBankResponse, WorldBankIndicator } from '@/types/api';

const worldBankClient = new ApiClient('https://api.worldbank.org/v2');

/**
 * Indicator codes we care about
 */
export const INDICATORS = {
  GDP_PER_CAPITA: 'NY.GDP.PCAP.CD',           // GDP per capita (current US$)
  GDP_GROWTH: 'NY.GDP.MKTP.KD.ZG',            // GDP growth (annual %)
  EDUCATION_EXPENDITURE: 'SE.XPD.TOTL.GD.ZS', // Education expenditure (% of GDP)
  UNEMPLOYMENT: 'SL.UEM.TOTL.ZS',             // Unemployment rate
  INTERNET_USERS: 'IT.NET.USER.ZS',           // Internet users (% of population)
  LIFE_EXPECTANCY: 'SP.DYN.LE00.IN',          // Life expectancy at birth
};

/**
 * Fetch indicator data for a country
 */
export async function getCountryIndicator(
  countryCode: string,
  indicator: string,
  startYear?: number,
  endYear?: number
): Promise<WorldBankIndicator[]> {
  try {
    const yearRange = startYear && endYear ? `${startYear}:${endYear}` : '';
    const endpoint = `/country/${countryCode}/indicator/${indicator}?format=json&date=${yearRange}`;

    const response = await worldBankClient.get<[any, WorldBankIndicator[]]>(
      endpoint
    );

    // World Bank returns [metadata, data]
    return response[1] || [];
  } catch (error) {
    console.error('World Bank API error:', error);
    return [];
  }
}

/**
 * Fetch multiple indicators for a country
 */
export async function getCountryIndicators(
  countryCode: string,
  indicators: string[]
): Promise<Record<string, WorldBankIndicator[]>> {
  const results: Record<string, WorldBankIndicator[]> = {};

  await Promise.all(
    indicators.map(async (indicator) => {
      const data = await getCountryIndicator(countryCode, indicator);
      results[indicator] = data;
    })
  );

  return results;
}

/**
 * Get GDP per capita for a country (most recent year)
 */
export async function getGDPPerCapita(
  countryCode: string
): Promise<number | null> {
  const data = await getCountryIndicator(
    countryCode,
    INDICATORS.GDP_PER_CAPITA
  );

  // Return most recent non-null value
  const recent = data.find((d) => d.value !== null);
  return recent?.value || null;
}

/**
 * Get education expenditure as % of GDP
 */
export async function getEducationExpenditure(
  countryCode: string
): Promise<number | null> {
  const data = await getCountryIndicator(
    countryCode,
    INDICATORS.EDUCATION_EXPENDITURE
  );

  const recent = data.find((d) => d.value !== null);
  return recent?.value || null;
}

/**
 * Get economic health score (0-100)
 * Based on GDP per capita and growth
 */
export async function getEconomicHealthScore(
  countryCode: string
): Promise<number> {
  const [gdp, growth] = await Promise.all([
    getGDPPerCapita(countryCode),
    getCountryIndicator(countryCode, INDICATORS.GDP_GROWTH),
  ]);

  let score = 50; // Default medium score

  // Score based on GDP per capita
  if (gdp) {
    if (gdp > 40000) score += 30;
    else if (gdp > 20000) score += 20;
    else if (gdp > 10000) score += 10;
  }

  // Adjust based on GDP growth
  const recentGrowth = growth.find((d) => d.value !== null);
  if (recentGrowth?.value) {
    if (recentGrowth.value > 3) score += 10;
    else if (recentGrowth.value < 0) score -= 10;
  }

  return Math.min(100, Math.max(0, score));
}

