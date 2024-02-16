'use client';

import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { MAXIMUM_AMOUNT, MINIMUM_AMOUNT, STEP_AMOUNT } from '@/config';
import { formatPriceCurrency } from '@/utils/loanFunctions';

import { LoanOptions } from '@/types';
import React from 'react';

type Props = {
  control: Control<LoanOptions>;
  errors: FieldErrors<LoanOptions>;
  handleSubmit: () => void;
};

const AmountControl = ({ errors, control, handleSubmit }: Props) => {
  return (
    <FormControl isInvalid={!!errors.amount}>
      <Controller
        name='amount'
        control={control}
        render={({ field }) => (
          <Box marginBottom={10}>
            <Flex justify='space-between' alignItems='center' marginBottom={2}>
              <FormLabel htmlFor='amount' width={'md'} margin={0}>
                Loan Amount:
              </FormLabel>

              <InputGroup id='amount' minWidth={180}>
                <NumberInput
                  inputMode='decimal'
                  focusBorderColor={!!errors.amount ? 'red.300' : 'blue.300'}
                  {...field}
                  format={(value) => formatPriceCurrency(Number(value))}
                  onChange={(e) => field.onChange(parseFloat(e))}
                  onBlur={() => handleSubmit()}
                >
                  <NumberInputField borderRightRadius={'none'} fontWeight={600} minWidth={100} />
                </NumberInput>
                <InputRightAddon>Kč</InputRightAddon>
              </InputGroup>
            </Flex>

            <FormErrorMessage>{errors.amount && errors.amount.message}</FormErrorMessage>

            <Slider
              aria-label='slider-amount'
              focusThumbOnChange={false}
              {...field}
              size='lg'
              min={MINIMUM_AMOUNT}
              max={MAXIMUM_AMOUNT}
              step={STEP_AMOUNT}
              onChangeEnd={() => handleSubmit()}
              isDisabled={!!errors.amount}
            >
              <Box>
                <SliderMark value={MINIMUM_AMOUNT} ml='1' mt='4'>
                  {formatPriceCurrency(MINIMUM_AMOUNT)} Kč
                </SliderMark>
              </Box>
              <Box>
                <SliderMark value={MAXIMUM_AMOUNT} ml='-110' mt='4'>
                  {formatPriceCurrency(MAXIMUM_AMOUNT)} Kč
                </SliderMark>
              </Box>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        )}
      />
    </FormControl>
  );
};

export default AmountControl;
