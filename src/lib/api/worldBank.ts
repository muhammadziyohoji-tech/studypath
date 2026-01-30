import ApiClient from './apiClient';
import { WorldBankRawResponse, WorldBankIndicator } from '@/types/api';

const worldBankClient = new ApiClient('https://api.worldbank.org/v2');

export const INDICATORS = {
  GDP_PER_CAPITA: 'NY.GDP.PCAP.CD',
  GDP_GROWTH: 'NY.GDP.MKTP.KD.ZG',
  EDUCATION_EXPENDITURE: 'SE.XPD.TOTL.GD.ZS',
  UNEMPLOYMENT: 'SL.UEM.TOTL.ZS',
  INTERNET_USERS: 'IT.NET.USER.ZS',
  LIFE_EXPECTANCY: 'SP.DYN.LE00.IN',
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

    // BU YERDA TUZATILDI: [any, ...] o'rniga WorldBankResponse ishlatamiz
    const response = await worldBankClient.get<WorldBankRawResponse>(endpoint);

    // Response[0] - bu metadata, Response[1] - bu ma'lumotlar massivi
    if (Array.isArray(response) && response.length > 1) {
      return response[1];
    }
    
    return [];
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

  // Promise.all orqali tezroq ishlashini ta'minlaymiz
  await Promise.all(
    indicators.map(async (indicator) => {
      const data = await getCountryIndicator(countryCode, indicator);
      results[indicator] = data;
    })
  );

  return results;
}

// ... qolgan getGDPPerCapita, getEducationExpenditure va getEconomicHealthScore o'zgarishsiz qoladi