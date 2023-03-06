import React from 'react';
import './App.css';
import Application from './components/application/Application';
import { CounterTwo } from './components/counter-two/counter.two';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Application />
      <Home />
      <CounterTwo />
    </div>
  );
}

export default App;
