import { INITIAL_RATE, INSURANCE_RATE } from '@/config';
import { LoanDetails, loanOptionsSchema } from '@/types';
import { NextResponse } from 'next/server';
import { ZodIssue } from 'zod';
import { calculateMonthlyPayment, roundNum } from '@/utils/loanFunctions';

export async function POST(
  request: Request
): Promise<NextResponse<{ errors: ZodIssue[] }> | NextResponse<LoanDetails>> {
  const body: unknown = await request.json();

  const result = loanOptionsSchema.safeParse(body);

  // If validation fails, construct and return error response
  if (!result.success) {
    return NextResponse.json({ errors: result.error.issues });
  }

  // If validation succeeds, proceed with calculations
  const rate = INITIAL_RATE;
  const termMonths = result.data.termMonths;
  const insurance = result.data.insurance;
  const amount = result.data.amount;

  const monthlyPayment = calculateMonthlyPayment(amount, rate, termMonths);
  const totalInterest = monthlyPayment * termMonths - amount;
  const insuranceAmount = insurance === 'withInsurance' ? amount * INSURANCE_RATE : 0;

  const loanDetails: LoanDetails = {
    monthlyPayment: roundNum(monthlyPayment),
    totalInterest: insuranceAmount
      ? roundNum(totalInterest + insuranceAmount)
      : roundNum(totalInterest),
    insuranceAmount,
    formData: {
      amount,
      termMonths,
      insurance,
    },
  };

  return NextResponse.json(loanDetails, { status: 200 });
}
