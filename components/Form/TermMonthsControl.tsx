'use client';

import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { LoanOptions } from '@/types';
import { MAXIMUM_TERM_MONTHS, MINIMUM_TERM_MONTHS, STEP_TERM_MONTHS } from '@/config';
import { formatTerm } from '@/utils/loanFunctions';
import React, { FC } from 'react';

type Props = {
  control: Control<LoanOptions>;
  errors: FieldErrors<LoanOptions>;
  handleSubmit: () => void;
};

const TermMonthsControl: FC<Props> = ({ errors, control, handleSubmit }: Props) => {
  return (
    <FormControl isInvalid={!!errors.termMonths}>
      <Controller
        name='termMonths'
        control={control}
        render={({ field }) => (
          <Box marginBottom={10}>
            <Flex justify={'space-between'} alignItems={'center'} gap={30} marginBottom={2}>
              <FormLabel htmlFor='termMonths' width={'md'} margin={0}>
                Duration:
                <Text fontSize={'sm'} fontWeight={200}>
                  {formatTerm(field.value)}
                </Text>
              </FormLabel>
              <InputGroup id='termMonths' minWidth={180}>
                <Input
                  type='number'
                  fontWeight={600}
                  focusBorderColor={!!errors.termMonths ? 'red.300' : 'blue.300'}
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  onBlur={() => handleSubmit()}
                />
                <InputRightAddon>Months</InputRightAddon>
              </InputGroup>
            </Flex>
            <FormErrorMessage>{errors.termMonths && errors.termMonths.message}</FormErrorMessage>
            <Slider
              aria-label='slider-termMonths'
              focusThumbOnChange={false}
              {...field}
              size='lg'
              min={MINIMUM_TERM_MONTHS}
              max={MAXIMUM_TERM_MONTHS}
              step={STEP_TERM_MONTHS}
              onChangeEnd={() => handleSubmit()}
              isDisabled={!!errors.termMonths}
            >
              <SliderMark value={MINIMUM_TERM_MONTHS} ml='1' mt='4'>
                {MINIMUM_TERM_MONTHS} months
              </SliderMark>
              <SliderMark value={MAXIMUM_TERM_MONTHS} ml='-100' mt='4'>
                {MAXIMUM_TERM_MONTHS} months
              </SliderMark>
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

export default TermMonthsControl;
