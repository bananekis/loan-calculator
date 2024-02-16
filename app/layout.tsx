import { Inter } from 'next/font/google';
import Provider from '@/components/Provider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loan Calculator',
  description:
    'Calculate your loan details with simple loan calculator. Utilize React Hook Form for form management and React Query for efficient data fetching.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
