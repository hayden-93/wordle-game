import React from 'react';
import Letter from '../Letter/Letter';
import { AccuracyEnum } from '../Letter/Letter.styles';
import { retrieveAnswer } from '../../utils/answer';
import { evaluateWordScore } from '../../utils/Evaluation';

export interface IWordProps {
  isWordEvaluated: boolean;
  guessWordValue: string;
}

export default function Word({ isWordEvaluated, guessWordValue }: IWordProps) {
  const initalAccuracyArray = [
    AccuracyEnum.None,
    AccuracyEnum.None,
    AccuracyEnum.None,
    AccuracyEnum.None,
    AccuracyEnum.None,
  ];

  const [evaluatedResults, setEvaluatedResults] =
    React.useState<AccuracyEnum[]>(initalAccuracyArray);

  const [isEvaluated, setIsEvaluated] = React.useState(isWordEvaluated);
  const [guessValue, setGuessValue] = React.useState(guessWordValue);

  React.useEffect(() => {
    const results = evaluateWordScore(
      guessValue,
      retrieveAnswer().toUpperCase()
    );
    setEvaluatedResults(results);
    setIsEvaluated(isWordEvaluated);
  }, [isWordEvaluated, guessValue]);

  React.useEffect(() => {
    setIsEvaluated(isWordEvaluated);
  }, [isWordEvaluated]);

  return (
    <div>
      {guessValue
        .toUpperCase()
        .split('')
        .map((nextLetter, letterIndex) => {
          return (
            <Letter
              key={'letter_' + letterIndex}
              position={letterIndex}
              value={nextLetter}
              accuracy={
                isEvaluated ? evaluatedResults[letterIndex] : AccuracyEnum.None
              }
            />
          );
        })}
    </div>
  );
}
