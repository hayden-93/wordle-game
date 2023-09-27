import { useEffect, useState } from 'react';
import { AccuracyEnum } from '../../utils/accuracy';
import { StyledVirtualKeyButton } from './VirtualKey.styles';

export interface IVirtualKeyProps {
  value: string;
  accuracy: AccuracyEnum;
  onClickedKey(key: string): void;
}

export const VirtualKey = ({
  value,
  accuracy,
  onClickedKey,
}: IVirtualKeyProps) => {
  const [letterValue, setLetterValue] = useState('');
  const [letterAccuracy, setLetterAccuracy] = useState(AccuracyEnum.none);

  useEffect(() => {
    setLetterValue(value);
  }, [value]);

  useEffect(() => {
    setLetterAccuracy(accuracy);
  }, [accuracy]);

  return (
    <StyledVirtualKeyButton
      accuracy={letterAccuracy}
      onClick={() => onClickedKey(letterValue)}
    >
      {letterValue}
    </StyledVirtualKeyButton>
  );
};

export default VirtualKey;
