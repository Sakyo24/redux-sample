import React from 'react';
import './App.css';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Redux Toolkit with TypeScript</h1>
      <Counter />
    </div>
  );
}

export default App;
