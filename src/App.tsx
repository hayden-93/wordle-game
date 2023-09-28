import React, { useEffect, useState } from 'react';

import { WordBoard } from './components/WordBoard/WordBoard';
import { WordEntry } from './components/WordEntry/WordEntry';
import { VirtualKeyboard } from './components/VirtualKeyboard/VirtualKeyboard';
import { StyledGameOverDisplay } from './components/WordEntry/WordEntry.styles';

import { IGuess } from './utils/guess.model';
import { retrieveAnswer } from './utils/answerRetriever';
import './index.css';

function App() {
  const [wordGuess, setWordGuess] = useState('');
  const [wordGuesses, setWordGuesses] = useState<IGuess[]>([]);
  const [nextGuessPosition, setNextGuessPosition] = useState(0);
  const [winning, setWinning] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverText, setGameOverText] = useState('');

  const handleGuessCompletion = (guess: string): void => {
    if (wordGuess === retrieveAnswer().toUpperCase()) {
      setWinning(true);
      return;
    }

    setNextGuessPosition(nextGuessPosition + 1);
  };

  const handleWordGuesses = (guesses: IGuess[]) => {
    setWordGuesses(guesses);
  };

  const handleOnClickedKey = (key: string): void => {
    if (key.toLowerCase() === 'backspace') {
      if (wordGuess.length !== 0) {
        setWordGuess(wordGuess.substring(0, wordGuess.length - 1));
      }
    } else if (key.toLowerCase() === 'enter' && wordGuess.length === 5) {
      handleGuessCompletion(wordGuess);
    } else {
      if (wordGuess.length < 5) {
        setWordGuess(wordGuess + key);
      }
    }
  };

  useEffect(() => {
    if (winning != null) {
      setNextGuessPosition(0);
      setGameOver(true);
    }

    if (winning) {
      setGameOverText('You Won!!');
    } else if (winning === false) {
      setGameOverText(`Word: ${retrieveAnswer().toUpperCase()}`);
    }
  }, [winning]);

  useEffect(() => {
    if (nextGuessPosition === 6) {
      setWinning(false);
      return;
    }

    if (gameOver === true) return;

    setWordGuess('');
  }, [nextGuessPosition, gameOver]);

  return (
    <div className='App-board'>
      {gameOver ? (
        <StyledGameOverDisplay>{gameOverText}</StyledGameOverDisplay>
      ) : (
        <WordEntry
          onGuessEntered={(guess) => setWordGuess(guess)}
          onGuessComplete={() => handleGuessCompletion(wordGuess)}
        />
      )}
      <WordBoard
        guess={wordGuess}
        currentPosition={nextGuessPosition}
        wordGuessesCallback={handleWordGuesses}
      />
      <VirtualKeyboard
        onClickedKey={handleOnClickedKey}
        wordGuesses={wordGuesses}
      />
    </div>
  );
}

export default App;
