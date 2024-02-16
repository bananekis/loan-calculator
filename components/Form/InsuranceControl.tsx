'use client';

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import React from 'react';

import { LoanOptions } from '@/types';

type Props = {
  control: Control<LoanOptions>;
  errors: FieldErrors<LoanOptions>;
  handleSubmit: () => void;
};

const InsuranceControl = ({ errors, handleSubmit, control }: Props) => {
  return (
    <FormControl isInvalid={!!errors.insurance}>
      <Controller
        name='insurance'
        control={control}
        render={({ field }) => (
          <Box gap={3} display={'flex'} flexDirection={'column'}>
            <FormLabel htmlFor='insurance' margin={0}>
              Insurance against inability to repay the loan
            </FormLabel>
            <FormErrorMessage>{errors.insurance && errors.insurance.message}</FormErrorMessage>
            <RadioGroup
              id='insurance'
              onChange={(value) => {
                field.onChange(value);
                handleSubmit();
              }}
              value={field.value}
            >
              <Stack spacing={5} direction='row'>
                <Radio size='sm' colorScheme='blue' {...field} value='withInsurance'>
                  With Insurance
                </Radio>
                <Radio size='sm' colorScheme='red' {...field} value='withoutInsurance'>
                  Without Insurance
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        )}
      />
    </FormControl>
  );
};

export default InsuranceControl;
