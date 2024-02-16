import { LoanOptions } from '@/types';

export const calculateMonthlyPayment = (
  loanAmt: LoanOptions['amount'],
  loanRate: number,
  loanTerm: LoanOptions['termMonths']
): number => {
  const monthlyRate = loanRate / 100 / 12;
  return loanAmt * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanTerm)));
};

export const roundNum = (num: number): number => {
  return Math.round(num * 100) / 100;
};

export const formatTerm = (months: number): string => {
  const yearStr = 'year';
  const monthStr = 'month';

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearTerm = years === 1 ? `${years} ${yearStr}` : `${years} ${yearStr}s`;
  const monthTerm =
    remainingMonths === 1 ? `${remainingMonths} ${monthStr}` : `${remainingMonths} ${monthStr}s`;

  if (years === 0) {
    return monthTerm;
  } else if (remainingMonths === 0) {
    return yearTerm;
  } else {
    return `${yearTerm} ${monthTerm}`;
  }
};

export const formatPriceCurrency = (price: number | string) => {
  const priceString = String(price);
  const [integerPart, decimalPart = ''] = priceString.split('.');

  // Format integer part with thousands separator
  const integerPartFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // Concatenate integer part and decimal part with dot (.) separator
  return decimalPart.length > 0 ? `${integerPartFormatted}.${decimalPart}` : integerPartFormatted;
};
