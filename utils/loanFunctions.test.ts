import {
  calculateMonthlyPayment,
  formatPriceCurrency,
  formatTerm,
  roundNum,
} from './loanFunctions';

describe('Utility Functions', () => {
  describe('calculateMonthlyPayment', () => {
    test('calculates monthly payment correctly', () => {
      const loanAmt = 10000;
      const loanRate = 5;
      const loanTerm = 12;
      const expectedMonthlyPayment = 856.07; // Expected monthly payment value

      const monthlyPayment = calculateMonthlyPayment(loanAmt, loanRate, loanTerm);
      expect(monthlyPayment).toBeCloseTo(expectedMonthlyPayment);
    });
  });

  describe('roundNum', () => {
    test('rounds number to two decimal places', () => {
      const num = 10.23456;
      const roundedNum = roundNum(num);
      expect(roundedNum).toBe(10.23); // Expected rounded number value
    });
  });

  describe('formatTerm', () => {
    test('formats term correctly', () => {
      const months = 24;
      const formattedTerm = formatTerm(months);
      expect(formattedTerm).toBe('2 years'); // Expected formatted term value
    });
  });

  describe('formatPriceCurrency', () => {
    test('formats price correctly without decimal part', () => {
      const price = 10000;
      const formattedPrice = formatPriceCurrency(price);
      expect(formattedPrice).toBe('10 000'); // Expected formatted price value
    });

    test('formats price correctly with decimal part', () => {
      const price = 1234.56;
      const formattedPrice = formatPriceCurrency(price);
      expect(formattedPrice).toBe('1 234.56'); // Expected formatted price value
    });
  });
});
