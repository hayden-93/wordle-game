import React from 'react';
import { AccuracyEnum, StyledLetterButton } from './Letter.styles';

interface ILetterProps {
  position?: number;
  value: string;
  accuracy: AccuracyEnum;
}

export default function Letter({ position, value, accuracy }: ILetterProps) {
  return <StyledLetterButton accuracy={accuracy}>{value}</StyledLetterButton>;
}
