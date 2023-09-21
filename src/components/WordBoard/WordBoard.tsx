import React from 'react';
import Word from '../Word/Word';

interface IWordBoardProps {
  guess: string;
  currentPosition: number;
}

interface IGuess {
  guessedWord: string;
  evaluated: boolean;
}

export const WordBoard = ({ guess, currentPosition }: IWordBoardProps) => {
  const initialGuessState = [
    { guessedWord: '', evaluated: false },
    { guessedWord: '', evaluated: false },
    { guessedWord: '', evaluated: false },
    { guessedWord: '', evaluated: false },
    { guessedWord: '', evaluated: false },
    { guessedWord: '', evaluated: false },
  ];
  const [wordGuesses, setWordGuesses] =
    React.useState<IGuess[]>(initialGuessState);

  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentWordIndex > 5) return;
    const currentGuess: IGuess = { guessedWord: guess, evaluated: false };
    const updatedGuesses: IGuess[] = [
      ...wordGuesses.slice(0, currentWordIndex),
      currentGuess,
      ...wordGuesses.slice(currentWordIndex + 1),
    ];
    setWordGuesses(updatedGuesses);
  }, [guess]);

  React.useEffect(() => {
    if (currentWordIndex > 5) return;
    if (guess.length < 5) return;

    const currentGuess: IGuess = { guessedWord: guess, evaluated: true };
    const updatedGuesses: IGuess[] = [
      ...wordGuesses.slice(0, currentWordIndex),
      currentGuess,
      ...wordGuesses.slice(currentWordIndex + 1),
    ];
    console.log('updating guesses...');
    setWordGuesses(updatedGuesses);
    setCurrentWordIndex(currentPosition);
  }, [currentPosition]);

  return (
    <>
      {wordGuesses.map((wordGuess: IGuess, index: number) => {
        return (
          <Word
            key={`guesses_${index}`}
            isWordEvaluated={wordGuess.evaluated}
            guessWordValue={wordGuess.guessedWord}
          />
        );
      })}
    </>
  );
};
