import React from 'react';
import Word from './components/Word/Word';
import WordEntry from './components/WordEntry/WordEntry';

function App() {
  const [wordGuess, setWordGuess] = React.useState('');
  return (
    <div>
      <WordEntry
        onGuessComplete={() => setWordGuess('')}
        onGuessEntered={(guess) => setWordGuess(guess)}
      />
      <Word isWordEvaluated={false} guessWordValue={wordGuess} />
    </div>
  );
}
export default App;
