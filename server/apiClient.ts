import { INITIAL_AMOUNT, INITIAL_TERM_MONTHS, apiUrl } from '@/config';
import { LoanDetails, LoanOptions } from '@/types';
import { ZodIssue } from 'zod';
import ky from 'ky';

export async function fetchLoanDetails(
  options: LoanOptions = {
    amount: INITIAL_AMOUNT,
    insurance: 'withoutInsurance',
    termMonths: INITIAL_TERM_MONTHS,
  }
): Promise<LoanDetails> {
  try {
    const response = await ky
      .post(process.env.URL + apiUrl, { json: options })
      .json<LoanDetails | { errors: ZodIssue[] }>();

    if ('errors' in response) {
      const errorMessage = response.errors.map((err) => `${err.path} ${err.message}`).join('; ');
      throw new Error(errorMessage);
    } else {
      return response;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
