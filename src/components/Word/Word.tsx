import React from 'react';

export interface IWordProps {
  isWordEvaluated: boolean;
  guessWordValue: string;
}

export default function Word({ isWordEvaluated, guessWordValue }: IWordProps) {
  const [isEvaluated, setIsEvaluated] = React.useState(false);
  const [guessValue, setGuessValue] = React.useState('');

  React.useEffect(() => {
    setGuessValue(guessWordValue);
  }, [guessWordValue]);
  React.useEffect(() => {
    setIsEvaluated(isWordEvaluated);
  }, [isWordEvaluated]);

  return (
    <>
      <></>
    </>
  );
}
