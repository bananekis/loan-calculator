import { LoanOptions } from './types';

export const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const apiUrl = '/api';

export const MINIMUM_AMOUNT = 5000; // Default amount: $5000
export const MAXIMUM_AMOUNT = 1500000;
export const STEP_AMOUNT = 1000;

export const MINIMUM_TERM_MONTHS = 24; // Default term: 2 years (24 months)
export const MAXIMUM_TERM_MONTHS = 120; // Default term: 10 years (120 months)
export const STEP_TERM_MONTHS = 1; // Default term: 1 month

export const INITIAL_AMOUNT = 300000; // Default amount: $5000
export const INITIAL_RATE = 4.87; // Default rate: 4.87%
export const INITIAL_TERM_MONTHS = 96; // Default term: 8 years (96 months)

export const INSURANCE_RATE = 0.01;

export const defaultLoanOptions: LoanOptions = {
  amount: INITIAL_AMOUNT,
  termMonths: INITIAL_TERM_MONTHS,
  insurance: 'withoutInsurance',
};
