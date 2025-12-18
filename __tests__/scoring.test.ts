// ================================================
// __tests__/scoring.test.ts
// ================================================

/**
 * Scoring Algorithm Tests
 * 
 * Comprehensive tests for the country scoring system
 */

import {
  calculateEducationScore,
  calculateCostScore,
  calculateLanguageScore,
  calculateVisaScore,
  calculateCountryScore,
  compareCountries,
} from '@/lib/scoring/algorithm';
import { DEFAULT_WEIGHTS } from '@/lib/scoring/weights';

describe('Scoring Algorithm', () => {
  describe('calculateEducationScore', () => {
    it('should return high scores for tier 1 countries', () => {
      const tier1Countries = ['USA', 'GBR', 'CAN', 'AUS'];

      tier1Countries.forEach((code) => {
        const score = calculateEducationScore(code);
        expect(score).toBeGreaterThanOrEqual(95);
        expect(score).toBeLessThanOrEqual(100);
      });
    });

    it('should return medium scores for tier 2 countries', () => {
      const tier2Countries = ['DEU', 'FRA', 'JPN', 'SGP'];

      tier2Countries.forEach((code) => {
        const score = calculateEducationScore(code);
        expect(score).toBeGreaterThanOrEqual(80);
        expect(score).toBeLessThan(95);
      });
    });

    it('should return lower scores for tier 3 countries', () => {
      const tier3Countries = ['ESP', 'ITA', 'KOR'];

      tier3Countries.forEach((code) => {
        const score = calculateEducationScore(code);
        expect(score).toBeGreaterThanOrEqual(65);
        expect(score).toBeLessThan(80);
      });
    });

    it('should handle unknown countries', () => {
      const score = calculateEducationScore('UNKNOWN');
      expect(score).toBeGreaterThan(0);
      expect(score).toBeLessThanOrEqual(100);
    });

    it('should always return valid scores', () => {
      const testCodes = ['USA', 'DEU', 'ESP', 'IND', 'UNKNOWN'];

      testCodes.forEach((code) => {
        const score = calculateEducationScore(code);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('calculateCostScore', () => {
    it('should give high scores to affordable countries', () => {
      const affordableIndexes = [20, 30, 35, 40];

      affordableIndexes.forEach((index) => {
        const score = calculateCostScore(index);
        expect(score).toBeGreaterThanOrEqual(90);
      });
    });

    it('should give low scores to expensive countries', () => {
      const expensiveIndexes = [100, 110, 120, 150];

      expensiveIndexes.forEach((index) => {
        const score = calculateCostScore(index);
        expect(score).toBeLessThan(30);
      });
    });

    it('should be inversely proportional to cost', () => {
      const score1 = calculateCostScore(30);
      const score2 = calculateCostScore(60);
      const score3 = calculateCostScore(90);

      expect(score1).toBeGreaterThan(score2);
      expect(score2).toBeGreaterThan(score3);
    });

    it('should handle edge cases', () => {
      expect(calculateCostScore(0)).toBeGreaterThan(0);
      expect(calculateCostScore(200)).toBeGreaterThanOrEqual(0);
      expect(calculateCostScore(50)).toBeGreaterThan(0);
    });
  });

  describe('calculateLanguageScore', () => {
    it('should give perfect score to native English countries', () => {
      const nativeEnglish = ['USA', 'GBR', 'CAN', 'AUS', 'NZL'];

      nativeEnglish.forEach((code) => {
        const score = calculateLanguageScore(code, ['English']);
        expect(score).toBe(100);
      });
    });

    it('should give bonus for English as official language', () => {
      const score = calculateLanguageScore('IND', ['English', 'Hindi']);
      expect(score).toBeGreaterThanOrEqual(50);
    });

    it('should give lower scores to non-English countries', () => {
      const score1 = calculateLanguageScore('JPN', ['Japanese']);
      const score2 = calculateLanguageScore('CHN', ['Chinese']);

      expect(score1).toBeLessThan(50);
      expect(score2).toBeLessThan(50);
    });

    it('should account for English proficiency', () => {
      const highProficiency = calculateLanguageScore('NLD', ['Dutch']);
      const lowProficiency = calculateLanguageScore('THA', ['Thai']);

      expect(highProficiency).toBeGreaterThan(lowProficiency);
    });
  });

  describe('calculateVisaScore', () => {
    it('should give high scores to accessible countries', () => {
      const accessible = ['CAN', 'AUS', 'NZL', 'DEU'];

      accessible.forEach((code) => {
        const score = calculateVisaScore(code);
        expect(score).toBeGreaterThanOrEqual(80);
      });
    });

    it('should give moderate scores to complex countries', () => {
      const moderate = ['USA', 'JPN', 'KOR'];

      moderate.forEach((code) => {
        const score = calculateVisaScore(code);
        expect(score).toBeGreaterThanOrEqual(50);
        expect(score).toBeLessThan(80);
      });
    });

    it('should always return valid scores', () => {
      const testCodes = ['CAN', 'USA', 'CHN', 'UNKNOWN'];

      testCodes.forEach((code) => {
        const score = calculateVisaScore(code);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      });
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

      Object.values(scores).forEach((score) => {
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      });
    });

    it('should apply correct weights', () => {
      const scores = calculateCountryScore('GBR', ['English'], 90);

      const recalculated =
        scores.education * DEFAULT_WEIGHTS.education +
        scores.cost * DEFAULT_WEIGHTS.cost +
        scores.language * DEFAULT_WEIGHTS.language +
        scores.visa * DEFAULT_WEIGHTS.visa;

      expect(Math.abs(recalculated - scores.total)).toBeLessThan(1);
    });

    it('should handle custom weights', () => {
      const customWeights = {
        education: 0.5,
        cost: 0.3,
        language: 0.1,
        visa: 0.1,
      };

      const scores = calculateCountryScore('CAN', ['English', 'French'], 75, customWeights);

      expect(scores.total).toBeGreaterThanOrEqual(0);
      expect(scores.total).toBeLessThanOrEqual(100);
    });
  });

  describe('compareCountries', () => {
    it('should compare two countries correctly', () => {
      const comparison = compareCountries(
        { code: 'USA', languages: ['English'], costIndex: 85 },
        { code: 'IND', languages: ['Hindi'], costIndex: 25 }
      );

      expect(comparison).toHaveProperty('country1');
      expect(comparison).toHaveProperty('country2');
      expect(comparison).toHaveProperty('winner');
      expect(comparison).toHaveProperty('difference');
      expect(comparison).toHaveProperty('recommendation');
    });

    it('should calculate score difference', () => {
      const comparison = compareCountries(
        { code: 'CAN', languages: ['English'], costIndex: 75 },
        { code: 'ESP', languages: ['Spanish'], costIndex: 65 }
      );

      expect(comparison.difference).toBeGreaterThanOrEqual(0);
      expect(Math.abs(comparison.country1.total - comparison.country2.total)).toBe(
        comparison.difference
      );
    });

    it('should determine winner correctly', () => {
      const comparison = compareCountries(
        { code: 'USA', languages: ['English'], costIndex: 85 },
        { code: 'IND', languages: ['Hindi'], costIndex: 25 }
      );

      const winner =
        comparison.country1.total > comparison.country2.total ? 'country1' : 'country2';
      expect(comparison.winner).toBe(winner);
    });

    it('should generate recommendation', () => {
      const comparison = compareCountries(
        { code: 'GBR', languages: ['English'], costIndex: 87 },
        { code: 'DEU', languages: ['German'], costIndex: 70 }
      );

      expect(comparison.recommendation).toBeTruthy();
      expect(typeof comparison.recommendation).toBe('string');
      expect(comparison.recommendation.length).toBeGreaterThan(10);
    });
  });
});