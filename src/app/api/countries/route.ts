// src/app/api/countries/route.ts

/**
 * Next.js API Route for Countries
 * 
 * WHY API ROUTES:
 * - Server-side data fetching
 * - Hide API keys
 * - Add caching layer
 * - Transform data before sending to client
 * 
 * ENDPOINTS:
 * - GET /api/countries - Get all countries
 * - GET /api/countries?code=USA - Get specific country
 * - GET /api/countries?region=Europe - Filter by region
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAllCountries, getCountryByCode } from '@/lib/api/restCountries';

/**
 * GET /api/countries
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const region = searchParams.get('region');

    // Get specific country by code
    if (code) {
      const country = await getCountryByCode(code);
      
      return NextResponse.json(
        {
          success: true,
          data: country,
          timestamp: new Date().toISOString(),
        },
        { 
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
          },
        }
      );
    }

    // Get all countries
    let countries = await getAllCountries();

    // Filter by region if specified
    if (region && region !== 'all') {
      countries = countries.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: countries,
        count: countries.length,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch countries',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/countries
 * (Optional: For future features like saving favorites)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // TODO: Implement saving favorites, user preferences, etc.

    return NextResponse.json(
      {
        success: true,
        message: 'Feature not yet implemented',
        timestamp: new Date().toISOString(),
      },
      { status: 501 }
    );
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/countries
 * CORS preflight
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}