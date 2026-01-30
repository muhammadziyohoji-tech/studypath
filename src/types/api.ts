/**
 * 1. Umumiy API javob o'ramlari
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: number;
}

/**
 * 2. API Xatolik Klassi (Eng muhim tuzatish)
 * Interface emas, Class bo'lishi 'new ApiError' qilishga imkon beradi.
 */
export class ApiError extends Error {
  statusCode: number;
  details?: unknown;

  constructor(message: string, statusCode: number = 500, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;

    // TypeScript klass meros olishini to'g'ri ishlashi uchun:
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/**
 * 3. REST Countries API tiplari
 */
export interface RestCountriesResponse {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca2: string;
  cca3: string;
  ccn3?: string;
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
 * 4. World Bank API tiplari (Struktura aniqlashtirildi)
 */
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

// World Bank API odatda metadata va ma'lumotni alohida qaytaradi
export interface WorldBankMetadata {
  page: number;
  pages: number;
  per_page: number;
  total: number;
}

// Raw Response massiv ko'rinishida bo'ladi: [Metadata, Data[]]
export type WorldBankRawResponse = [WorldBankMetadata, WorldBankIndicator[]];

/**
 * 5. Navigatsiya va So'rov parametrlari
 */
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

export interface ApiRequestOptions extends RequestInit {
  retry?: number;
  retryDelay?: number;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}