import React from 'react';
import { StyledWordEntry } from './WordEntry.styles';

interface IWordEntryProps {
  onGuessEntered: (guess: string) => void;
}

export default function WordEntry({ onGuessEntered }: IWordEntryProps) {
  const [value, setValue] = React.useState('');

  const getValidWordleString = (rawString: string) => {
    const upperCaseString = rawString.toUpperCase();
    const validWordleString = rawString.replace(/[^a-z]/gi, '');

    return validWordleString?.toUpperCase();
  };

  const handleLetterEntry = (e: any) => {
    const validString: string = getValidWordleString(e.target.value);
    onGuessEntered(validString);
    setValue(validString);
  };

  return (
    <StyledWordEntry
      autoFocus
      placeholder='Enter your guess...'
      value={value}
      maxLength={5}
      onChange={(e) => handleLetterEntry(e)}
    />
  );
}
