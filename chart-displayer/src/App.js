// App.js
import React from 'react';
import './App.css';
import TradingViewChart from './TradingViewChart';

function App() {
  return (
    <div className="App">
      <div className="headline">
        <h1>Stocks & Crypto Chart Viewer</h1>
      </div>
      <div className="chart-container">
        <TradingViewChart />
      </div>
    </div>
  );
}

export default App;
