import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js'
import CounterContext from './CounterContext.js';

function App() {

  let countState = useState(1); //[count, setCount]
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
