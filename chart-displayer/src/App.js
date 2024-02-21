// App.js
import React, { useState } from 'react';
import './App.css';
import TradingViewChart from './TradingViewChart';
import LocalImage from './images/ins.PNG';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="App">
      <div className="headline">
        <h1>Stocks & Crypto Chart Viewer</h1>
      </div>
      <div className="chart-container">
        <TradingViewChart />
      </div>
      {showInstructions && (
        <div className="instructions-container">
          <div className="close-button" onClick={toggleInstructions}>
            X
          </div>
          <p>
          This website shows a chart for a Stock or Crypto.
            The live chart is derived from TradingView.com.

            You can navigate to different asset from the top left corner:
            <br />
            <br />
             <img src={LocalImage} alt="Description" width="250" height="400"/>
            <br />
            You can also import Indicators, change time candles and compare price to other asset's charts.
          </p>
        </div>
      )}
      {!showInstructions && (
        <div className="instructions-button" onClick={toggleInstructions}>
          Instructions
        </div>
      )}
    </div>
  );
}

export default App;
