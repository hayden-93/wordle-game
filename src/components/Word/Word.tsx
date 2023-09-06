import React from 'react';
import Letter from '../Letter/Letter';
import { AccuracyEnum } from '../Letter/Letter.styles';

export interface IWordProps {
  isWordEvaluated: boolean;
  guessWordValue: string;
}

export default function Word({ isWordEvaluated, guessWordValue }: IWordProps) {
  const [isEvaluated, setIsEvaluated] = React.useState(isWordEvaluated);
  const [guessValue, setGuessValue] = React.useState(guessWordValue);

  React.useEffect(() => {
    setGuessValue(guessWordValue);
  }, [guessWordValue]);
  React.useEffect(() => {
    setIsEvaluated(isWordEvaluated);
  }, [isWordEvaluated]);

  return (
    <>
      {guessValue
        .toUpperCase()
        .split('')
        .map((nextLetter, letterIndex) => {
          return (
            <Letter
              key={'letter_' + letterIndex}
              position={letterIndex}
              value={nextLetter}
              accuracy={AccuracyEnum.None}
            />
          );
        })}
    </>
  );
}
