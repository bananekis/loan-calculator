import { MAXIMUM_AMOUNT, MAXIMUM_TERM_MONTHS, MINIMUM_AMOUNT, MINIMUM_TERM_MONTHS } from '@/config';
import { formatPriceCurrency } from '@/utils/loanFunctions';
import { z } from 'zod';

export type LoanDetails = {
  monthlyPayment: number;
  totalInterest: number;
  formData: LoanOptions;
  insuranceAmount: number;
};

export type LoanOptions = z.infer<typeof loanOptionsSchema>;

export const loanOptionsSchema = z
  .object({
    amount: z
      .number()
      .int()
      .min(MINIMUM_AMOUNT, {
        message: `Minimum amount is ${formatPriceCurrency(MINIMUM_AMOUNT)} Kč`,
      })
      .max(MAXIMUM_AMOUNT, {
        message: `Maximum amount is ${formatPriceCurrency(MAXIMUM_AMOUNT)} Kč`,
      })
      .transform((value) => (typeof value === 'string' ? parseFloat(value) : value)),
    termMonths: z
      .number()
      .int()
      .min(Number(MINIMUM_TERM_MONTHS), {
        message: `Minimum amount is ${MINIMUM_TERM_MONTHS} months`,
      })
      .max(Number(MAXIMUM_TERM_MONTHS), {
        message: `Maximum amount is ${MAXIMUM_TERM_MONTHS} months`,
      }),
    insurance: z.union([z.literal('withInsurance'), z.literal('withoutInsurance')]),
  })
  .strict();
