import { useEffect, useState } from 'react';
import { AccuracyEnum } from '../../utils/accuracy';
import { StyledBlankButton, StyledLetterButton } from './Letter.styles';

export interface ILetterProps {
  position: number;
  value: string;
  accuracy: AccuracyEnum;
}

export const Letter = ({ position, value, accuracy }: ILetterProps) => {
  const [letterPosition, setLetterPosition] = useState(0);
  const [letterValue, setLetterValue] = useState('');
  const [letterAccuracy, setLetterAccuracy] = useState(AccuracyEnum.none);

  useEffect(() => {
    setLetterValue(value);
  }, [value]);

  useEffect(() => {
    setLetterPosition(position);
  }, [position]);

  useEffect(() => {
    setLetterAccuracy(accuracy);
  }, [accuracy]);

  return letterValue === '_' ? (
    <StyledBlankButton>'_'</StyledBlankButton>
  ) : (
    <StyledLetterButton accuracy={letterAccuracy}>
      {letterValue}
    </StyledLetterButton>
  );
};

export default Letter;
