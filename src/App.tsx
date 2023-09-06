import React from 'react';
import Word from './components/Word/Word';

function App() {
  return (
    <div>
      <Word isWordEvaluated={false} guessWordValue='TESTS' />
    </div>
  );
}
export default App;
