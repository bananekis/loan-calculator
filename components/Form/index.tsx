'use client';

import { Box, Button, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { INITIAL_RATE, defaultLoanOptions } from '@/config';
import { LoanOptions, loanOptionsSchema } from '@/types';
import { fetchLoanDetails } from '@/server/apiClient';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import AmountControl from './AmountControl';
import InsuranceControl from './InsuranceControl';
import LoanDetailsSummary from '../LoanDetailsSummary';
import TermMonthsControl from './TermMonthsControl';

const LoanForm: FC = () => {
  const [loanOptions, setLoanOptions] = useState<LoanOptions>(defaultLoanOptions);

  const { error, isLoading } = useQuery({
    queryKey: ['loanDetails', loanOptions],
    queryFn: () => fetchLoanDetails(loanOptions),
    staleTime: 1000 * 60 * 10, // refetch every 10 min
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoanOptions>({
    defaultValues: defaultLoanOptions,
    resolver: zodResolver(loanOptionsSchema),
  });

  const onSubmit = (loanOptions: LoanOptions) => setLoanOptions(loanOptions);

  if (error) {
    return <>Error: {error.message}</>;
  }

  return (
    <Box width='100%' maxW='md' mx='auto' p='4' borderWidth='1px' rounded='md' shadow='md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AmountControl
          control={{ ...control }}
          errors={errors}
          handleSubmit={() => handleSubmit(onSubmit)()}
        />
        <TermMonthsControl
          control={{ ...control }}
          errors={errors}
          handleSubmit={() => handleSubmit(onSubmit)()}
        />
        <InsuranceControl
          control={{ ...control }}
          errors={errors}
          handleSubmit={() => handleSubmit(onSubmit)()}
        />
        <LoanDetailsSummary loanOptions={loanOptions} />
        <Text fontSize='sm' marginBottom={3}>
          *Annual interest rate from {INITIAL_RATE}% / APR from 5.02%
        </Text>
        <Button
          type='submit'
          colorScheme='blue'
          textAlign='center'
          width='100%'
          isDisabled={isLoading || isSubmitting}
          onClick={() => alert('Ahoj slunicko :))')}
        >
          Continue
        </Button>
      </form>
    </Box>
  );
};

export default LoanForm;
