import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { LoanDetails, LoanOptions } from '@/types';
import { formatPriceCurrency } from '@/utils/loanFunctions';
import { useQueryClient } from '@tanstack/react-query';
import React, { FC } from 'react';

type Props = {
  loanOptions: LoanOptions;
};

const LoanDetailsSummary: FC<Props> = ({ loanOptions }) => {
  const queryClient = useQueryClient();

  const data: LoanDetails | undefined = queryClient.getQueryData(['loanDetails', loanOptions]);
  const isLoading = data === undefined;

  return (
    <Flex height={200} justifyContent={'center'} alignItems={'center'}>
      {isLoading ? (
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      ) : (
        <Box borderWidth='1px' borderRadius='md' p={4} boxShadow='md' flex={1}>
          <Text fontSize='lg' fontWeight='bold' mb={4}>
            Loan Details
          </Text>
          <Flex justifyContent='space-between' alignItems='center' mb={2}>
            <Text fontSize='md'>Monthly Payment:</Text>
            <Box>
              <Text fontSize='md' fontWeight='bold' textAlign='right'>
                {formatPriceCurrency(data.monthlyPayment)} Kč
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent='space-between' alignItems='center' mb={2}>
            <Text fontSize='md'>Insurance Amount:</Text>
            <Box>
              <Text fontSize='md' textAlign='right'>
                {formatPriceCurrency(data.insuranceAmount)} Kč
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text fontSize='md'>Total Interest:</Text>
            <Box>
              <Text fontSize='md' textAlign='right'>
                {formatPriceCurrency(data.totalInterest)} Kč
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default LoanDetailsSummary;
