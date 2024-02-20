// App.js
import React from 'react';
import './App.css';
import TradingViewChart from './TradingViewChart';

function App() {
  return (
    <div className="App">
      <div className="headline">
        <h1>Crypto Chart Viewer</h1>
      </div>
      <div className="chart-container">
        <TradingViewChart />
      </div>
      <div className="instructions-window">
        <p>Instructions</p>
      </div>
    </div>
  );
}

export default App;
