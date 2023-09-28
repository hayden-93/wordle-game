import { useEffect, useState } from 'react';
import { AccuracyEnum } from '../../utils/accuracy';
import { calculateLetterAccuracyMap } from '../../utils/Evaluation';
import VirtualKey from '../VirtualKey/VirtualKey';
import {
  StyledKeyboardRow,
  StyleKeyboardContainer,
} from './VirtualKeyboard.styles';
import { IGuess } from '../../utils/guess.model';

export interface IVirtualKeyboardProps {
  onClickedKey(key: string): void;
  wordGuesses: IGuess[];
}

export const VirtualKeyboard = ({
  onClickedKey,
  wordGuesses,
}: IVirtualKeyboardProps) => {
  const [letterScoreMap, setLetterScoreMap] = useState<
    Map<string, AccuracyEnum>
  >(new Map());

  useEffect(() => {
    const tempLetterScoreMap = calculateLetterAccuracyMap(
      wordGuesses
        .filter((g) => g.evaluated)
        .map((guess) => {
          return guess.guessedWord;
        })
    );
    setLetterScoreMap(tempLetterScoreMap);
  }, [wordGuesses]);

  const lookupLetterAccuracy = (letter: string): AccuracyEnum => {
    if (letterScoreMap.has(letter)) {
      return letterScoreMap.get(letter) ?? AccuracyEnum.none;
    } else {
      return AccuracyEnum.none;
    }
  };

  const InitialFirstRow: string[] = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
  ];

  const InitialSecondRow: string[] = [
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
  ];

  const InitialThirdRow: string[] = [
    'BackSpace',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'Enter',
  ];

  const [firstRow, setFirstRow] = useState<string[]>(InitialFirstRow);
  const [secondRow, setSecondRow] = useState<string[]>(InitialSecondRow);
  const [thirdRow, setThirdRow] = useState<string[]>(InitialThirdRow);

  return (
    <StyleKeyboardContainer>
      <StyledKeyboardRow>
        {firstRow.map((virtualkey) => {
          return (
            <VirtualKey
              value={virtualkey}
              accuracy={lookupLetterAccuracy(virtualkey)}
              onClickedKey={onClickedKey}
            ></VirtualKey>
          );
        })}
      </StyledKeyboardRow>
      <StyledKeyboardRow>
        {secondRow.map((virtualkey) => {
          return (
            <VirtualKey
              value={virtualkey}
              accuracy={lookupLetterAccuracy(virtualkey)}
              onClickedKey={onClickedKey}
            ></VirtualKey>
          );
        })}
      </StyledKeyboardRow>
      <StyledKeyboardRow>
        {thirdRow.map((virtualkey) => {
          return (
            <VirtualKey
              value={virtualkey}
              accuracy={lookupLetterAccuracy(virtualkey)}
              onClickedKey={onClickedKey}
            ></VirtualKey>
          );
        })}
      </StyledKeyboardRow>
    </StyleKeyboardContainer>
  );
};
