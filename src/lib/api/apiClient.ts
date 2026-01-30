import { ApiError } from '@/types/api';

interface RequestOptions extends RequestInit {
  retry?: number;
  retryDelay?: number;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor(baseURL: string = '', defaultHeaders: HeadersInit = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const {
      retry = 3,
      retryDelay = 1000,
      headers,
      ...fetchOptions
    } = options;

    const url = this.baseURL + endpoint;
    const requestHeaders = { ...this.defaultHeaders, ...headers };

    let lastError: any = null;

    for (let attempt = 0; attempt <= retry; attempt++) {
      try {
        const response = await fetch(url, {
          ...fetchOptions,
          headers: requestHeaders,
        });

        if (!response.ok) {
          throw new ApiError(
            `HTTP ${response.status}: ${response.statusText}`,
            response.status
          );
        }

        const text = await response.text();
        const data = text ? JSON.parse(text) : {};
        return data as T;
      } catch (error: unknown) { 
        // 'unknown' xatosini mana bu yerda 'any' ga o'girib lastError'ga saqlaymiz
        lastError = error;

        // Xatolikni tekshirish
        if (error instanceof ApiError) {
          if (error.statusCode < 500) {
            throw error; // Client xatolarida (400, 401, 404) retry qilmaymiz
          }
        }

        if (attempt < retry) {
          await this.delay(retryDelay * (attempt + 1));
        }
      }
    }

    // Agar oxirida ham xato bo'lsa
    if (lastError instanceof ApiError) {
      throw lastError;
    }
    throw new ApiError(lastError?.message || 'Request failed', 500);
  }

  // GET, POST, PUT, DELETE metodlari...
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const apiClient = new ApiClient();
export default ApiClient;