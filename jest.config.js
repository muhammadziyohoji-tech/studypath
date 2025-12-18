// jest.config.js

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/_*.{js,jsx,ts,tsx}',
  ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);


// ===================================
// jest.setup.js
// ===================================

import '@testing-library/jest-dom';


// ===================================
// __tests__/scoring/algorithm.test.ts
// ===================================

import {
  calculateEducationScore,
  calculateCostScore,
  calculateLanguageScore,
  calculateVisaScore,
  calculateCountryScore,
} from '@/lib/scoring/algorithm';

describe('Scoring Algorithm Tests', () => {
  describe('calculateEducationScore', () => {
    it('should return high scores for tier 1 countries', () => {
      const score = calculateEducationScore('USA');
      expect(score).toBeGreaterThanOrEqual(95);
      expect(score).toBeLessThanOrEqual(100);
    });

    it('should return medium scores for tier 2 countries', () => {
      const score = calculateEducationScore('DEU');
      expect(score).toBeGreaterThanOrEqual(80);
      expect(score).toBeLessThan(95);
    });

    it('should handle unknown countries gracefully', () => {
      const score = calculateEducationScore('UNKNOWN');
      expect(score).toBeGreaterThan(0);
      expect(score).toBeLessThanOrEqual(100);
    });
  });

  describe('calculateCostScore', () => {
    it('should give high scores to affordable countries', () => {
      const score = calculateCostScore(30); // Very affordable
      expect(score).toBeGreaterThanOrEqual(90);
    });

    it('should give low scores to expensive countries', () => {
      const score = calculateCostScore(110); // Very expensive
      expect(score).toBeLessThan(30);
    });

    it('should handle edge cases', () => {
      expect(calculateCostScore(0)).toBeGreaterThan(0);
      expect(calculateCostScore(200)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('calculateLanguageScore', () => {
    it('should give perfect score to native English countries', () => {
      const score = calculateLanguageScore('USA', ['English']);
      expect(score).toBe(100);
    });

    it('should give bonus to countries with English as official language', () => {
      const score = calculateLanguageScore('IND', ['English', 'Hindi']);
      expect(score).toBeGreaterThanOrEqual(50);
    });

    it('should give lower scores to non-English countries', () => {
      const score = calculateLanguageScore('JPN', ['Japanese']);
      expect(score).toBeLessThan(50);
    });
  });

  describe('calculateVisaScore', () => {
    it('should give high scores to accessible countries', () => {
      const score = calculateVisaScore('CAN');
      expect(score).toBeGreaterThanOrEqual(80);
    });

    it('should give moderate scores to challenging countries', () => {
      const score = calculateVisaScore('USA');
      expect(score).toBeGreaterThanOrEqual(50);
      expect(score).toBeLessThan(80);
    });
  });

  describe('calculateCountryScore', () => {
    it('should return all score components', () => {
      const scores = calculateCountryScore('USA', ['English'], 85);
      
      expect(scores).toHaveProperty('education');
      expect(scores).toHaveProperty('cost');
      expect(scores).toHaveProperty('language');
      expect(scores).toHaveProperty('visa');
      expect(scores).toHaveProperty('total');
    });

    it('should return scores within valid range', () => {
      const scores = calculateCountryScore('DEU', ['German'], 70);
      
      expect(scores.education).toBeGreaterThanOrEqual(0);
      expect(scores.education).toBeLessThanOrEqual(100);
      expect(scores.total).toBeGreaterThanOrEqual(0);
      expect(scores.total).toBeLessThanOrEqual(100);
    });

    it('should apply correct weights', () => {
      const scores = calculateCountryScore('GBR', ['English'], 90);
      
      // Education (40%) + Cost (30%) + Language (20%) + Visa (10%) = 100%
      const recalculated = 
        scores.education * 0.4 +
        scores.cost * 0.3 +
        scores.language * 0.2 +
        scores.visa * 0.1;
      
      expect(Math.abs(recalculated - scores.total)).toBeLessThan(1);
    });
  });
});