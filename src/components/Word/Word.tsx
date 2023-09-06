import React from 'react';

export interface IWordProps {
  isWordEvaluated: boolean;
  guessWordValue: string;
}

export default function Word({ isWordEvaluated, guessWordValue }: IWordProps) {
  const [guessValue, setGuessValue] = React.useState<string>('');

  React.useEffect(() => {
    setGuessValue(guessWordValue);
  }, [guessWordValue]);

  return (
    <>
      <></>
    </>
  );
}
