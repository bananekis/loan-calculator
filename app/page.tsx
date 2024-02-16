import { Flex } from '@chakra-ui/react';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { defaultLoanOptions } from '@/config';
import { fetchLoanDetails } from '@/server/apiClient';
import LoanForm from '@/components/Form';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['loanDetails', defaultLoanOptions],
    queryFn: () => fetchLoanDetails(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex justifyContent='center' alignItems='center' height='100vh' px={4}>
        <LoanForm />
      </Flex>
    </HydrationBoundary>
  );
}
