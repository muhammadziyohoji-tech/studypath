// src/lib/constants/studyMetrics.ts

/**
 * Static study-related data for countries
 * 
 * WHY STATIC DATA:
 * - Some metrics not available via free APIs
 * - Curated from reliable sources (Numbeo, OECD, UNESCO)
 * - Updated quarterly based on official statistics
 * 
 * DATA SOURCES:
 * - Numbeo Cost of Living Index (2024)
 * - QS World University Rankings
 * - UNESCO Education Statistics
 */

import { StudyMetadata } from '@/types/country';

/**
 * Cost of Living Index
 * Base: 100 = New York City
 * Lower = More Affordable
 */
export const COST_OF_LIVING_DATA: Record<string, number> = {
  // Very Expensive (90-110)
  'CHE': 122, // Switzerland
  'ISL': 95,  // Iceland
  'NOR': 92,  // Norway
  'DNK': 91,  // Denmark
  'AUS': 88,  // Australia
  'GBR': 87,  // United Kingdom
  'USA': 85,  // United States
  'FRA': 82,  // France
  
  // Moderate (60-89)
  'CAN': 75,  // Canada
  'NLD': 74,  // Netherlands
  'SWE': 73,  // Sweden
  'DEU': 70,  // Germany
  'AUT': 69,  // Austria
  'ITA': 68,  // Italy
  'ESP': 65,  // Spain
  'JPN': 64,  // Japan
  'KOR': 63,  // South Korea
  'SGP': 88,  // Singapore
  'NZL': 82,  // New Zealand
  'IRL': 84,  // Ireland
  'BEL': 76,  // Belgium
  'FIN': 77,  // Finland
  
  // Affordable (40-59)
  'PRT': 55,  // Portugal
  'GRC': 58,  // Greece
  'POL': 48,  // Poland
  'CZE': 52,  // Czech Republic
  'HUN': 47,  // Hungary
  'MEX': 45,  // Mexico
  'CHL': 50,  // Chile
  'ARG': 42,  // Argentina
  'BRA': 44,  // Brazil
  'CHN': 46,  // China
  'THA': 43,  // Thailand
  'MYS': 41,  // Malaysia
  'ZAF': 48,  // South Africa
  'RUS': 38,  // Russia
  
  // Very Affordable (<40)
  'IND': 25,  // India
  'PAK': 22,  // Pakistan
  'BGD': 28,  // Bangladesh
  'IDN': 35,  // Indonesia
  'PHL': 37,  // Philippines
  'VNM': 33,  // Vietnam
  'EGY': 30,  // Egypt
  'TUR': 36,  // Turkey
};

/**
 * Estimated monthly expenses for students (USD)
 */
export const MONTHLY_EXPENSES: Record<string, {
  accommodation: number;
  food: number;
  transport: number;
  utilities: number;
}> = {
  'USA': {
    accommodation: 1200,
    food: 400,
    transport: 100,
    utilities: 150,
  },
  'GBR': {
    accommodation: 1000,
    food: 350,
    transport: 90,
    utilities: 140,
  },
  'CAN': {
    accommodation: 800,
    food: 350,
    transport: 80,
    utilities: 100,
  },
  'AUS': {
    accommodation: 950,
    food: 380,
    transport: 85,
    utilities: 120,
  },
  'DEU': {
    accommodation: 600,
    food: 280,
    transport: 70,
    utilities: 90,
  },
  'FRA': {
    accommodation: 750,
    food: 320,
    transport: 75,
    utilities: 100,
  },
  'ESP': {
    accommodation: 500,
    food: 250,
    transport: 50,
    utilities: 80,
  },
  'ITA': {
    accommodation: 550,
    food: 270,
    transport: 55,
    utilities: 85,
  },
  'NLD': {
    accommodation: 700,
    food: 300,
    transport: 80,
    utilities: 95,
  },
  'SWE': {
    accommodation: 680,
    food: 290,
    transport: 75,
    utilities: 90,
  },
  'CHN': {
    accommodation: 400,
    food: 200,
    transport: 40,
    utilities: 60,
  },
  'IND': {
    accommodation: 250,
    food: 150,
    transport: 30,
    utilities: 40,
  },
};

/**
 * Top universities per country (for reference)
 */
export const TOP_UNIVERSITIES: Record<string, string[]> = {
  'USA': [
    'Massachusetts Institute of Technology',
    'Stanford University',
    'Harvard University',
    'California Institute of Technology',
    'University of Chicago',
  ],
  'GBR': [
    'University of Oxford',
    'University of Cambridge',
    'Imperial College London',
    'UCL',
    'University of Edinburgh',
  ],
  'CAN': [
    'University of Toronto',
    'McGill University',
    'University of British Columbia',
    'McMaster University',
    'University of Montreal',
  ],
  'AUS': [
    'Australian National University',
    'University of Melbourne',
    'University of Sydney',
    'University of New South Wales',
    'University of Queensland',
  ],
  'DEU': [
    'Technical University of Munich',
    'Ludwig Maximilian University',
    'Heidelberg University',
    'Humboldt University of Berlin',
    'University of Freiburg',
  ],
  'FRA': [
    'PSL University',
    'Sorbonne University',
    'École Polytechnique',
    'Sciences Po',
    'University of Paris',
  ],
  'CHN': [
    'Tsinghua University',
    'Peking University',
    'Fudan University',
    'Shanghai Jiao Tong University',
    'Zhejiang University',
  ],
  'JPN': [
    'University of Tokyo',
    'Kyoto University',
    'Tokyo Institute of Technology',
    'Osaka University',
    'Tohoku University',
  ],
  'SGP': [
    'National University of Singapore',
    'Nanyang Technological University',
    'Singapore Management University',
  ],
  'KOR': [
    'Seoul National University',
    'KAIST',
    'Yonsei University',
    'Korea University',
    'POSTECH',
  ],
};

/**
 * International student population (approximate)
 */
export const INTERNATIONAL_STUDENT_POPULATION: Record<string, number> = {
  'USA': 1075496,
  'GBR': 605130,
  'AUS': 442219,
  'CAN': 388782,
  'DEU': 350000,
  'FRA': 310000,
  'RUS': 278000,
  'CHN': 230000,
  'JPN': 208000,
  'ESP': 120000,
  'ITA': 105000,
  'NLD': 95000,
  'SWE': 35000,
  'CHE': 55000,
  'AUT': 70000,
  'BEL': 60000,
  'NZL': 60000,
  'SGP': 80000,
  'KOR': 100000,
};

/**
 * Visa processing time (average in weeks)
 */
export const VISA_PROCESSING_TIMES: Record<string, string> = {
  'USA': '4-12 weeks',
  'GBR': '3-8 weeks',
  'CAN': '4-8 weeks',
  'AUS': '4-8 weeks',
  'DEU': '6-12 weeks',
  'FRA': '2-4 weeks',
  'ESP': '2-4 weeks',
  'ITA': '4-8 weeks',
  'NLD': '2-6 weeks',
  'SWE': '2-4 weeks',
  'CHN': '4-6 weeks',
  'JPN': '4-8 weeks',
  'SGP': '2-4 weeks',
  'KOR': '4-6 weeks',
  'IND': '4-8 weeks',
  'BRA': '4-8 weeks',
  'MEX': '2-4 weeks',
  'ARG': '3-6 weeks',
};

/**
 * Post-study work rights availability
 */
export const POST_STUDY_WORK_RIGHTS: Record<string, boolean> = {
  'CAN': true,  // 3 years PGWP
  'AUS': true,  // 2-4 years
  'NZL': true,  // 1-3 years
  'DEU': true,  // 18 months
  'GBR': true,  // 2 years (Graduate Route)
  'IRL': true,  // 2 years
  'NLD': true,  // 1 year
  'USA': false, // OPT (limited, complex)
  'FRA': true,  // 1 year
  'ESP': true,  // 1 year
  'ITA': true,  // 1 year
  'JPN': true,  // 1 year
  'SGP': false, // No automatic right
  'CHN': false,
  'IND': false,
};

/**
 * Helper function to get complete study metadata for a country
 */
export function getStudyMetadata(countryCode: string): StudyMetadata | null {
  const costIndex = COST_OF_LIVING_DATA[countryCode];
  if (!costIndex) return null;

  const expenses = MONTHLY_EXPENSES[countryCode] || {
    accommodation: 500,
    food: 250,
    transport: 50,
    utilities: 75,
  };

  const totalExpenses = 
    expenses.accommodation + 
    expenses.food + 
    expenses.transport + 
    expenses.utilities;

  return {
    costOfLivingIndex: costIndex,
    averageMonthlyExpenses: totalExpenses,
    visaProcessingTime: VISA_PROCESSING_TIMES[countryCode] || 'Not available',
    topUniversities: TOP_UNIVERSITIES[countryCode] || [],
    studentPopulation: INTERNATIONAL_STUDENT_POPULATION[countryCode] || 0,
    postStudyWorkRights: POST_STUDY_WORK_RIGHTS[countryCode] || false,
  };
}