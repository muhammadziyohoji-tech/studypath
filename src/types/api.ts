// ================================================
// src/types/api.ts
// ================================================

/**
 * API response and error types
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: number;
}

/**
 * API error details
 */
export interface ApiError {
  message: string;
  statusCode?: number;
  details?: unknown;
}

/**
 * REST Countries API raw response type (before transformation)
 */
export interface RestCountriesResponse {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca2: string;         // ISO 3166-1 alpha-2 code
  cca3: string;         // ISO 3166-1 alpha-3 code
  ccn3?: string;        // ISO 3166-1 numeric code
  capital?: string[];
  population: number;
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  region: string;
  subregion?: string;
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
  timezones?: string[];
  borders?: string[];
  area?: number;
  latlng?: [number, number];
  landlocked?: boolean;
  independent?: boolean;
}

/**
 * World Bank API response type
 */
export interface WorldBankResponse {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  data: WorldBankIndicator[];
}

export interface WorldBankIndicator {
  indicator: {
    id: string;
    value: string;
  };
  country: {
    id: string;
    value: string;
  };
  countryiso3code: string;
  date: string;
  value: number | null;
  unit: string;
  obs_status: string;
  decimal: number;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

/**
 * API request options
 */
export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}