// ================================================
// src/lib/utils/validation.ts
// ================================================

/**
 * Validation utility functions
 */

/**
 * Validate country code format (3-letter ISO code)
 */
export function isValidCountryCode(code: string): boolean {
  return /^[A-Z]{3}$/.test(code);
}

/**
 * Validate score is within range
 */
export function isValidScore(score: number): boolean {
  return score >= 0 && score <= 100;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize user input (basic XSS prevention)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}