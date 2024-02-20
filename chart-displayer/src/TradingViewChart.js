// TradingViewChart.js
import React, { useRef, useEffect } from 'react';

const TradingViewChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: 'BTC/USD',
          proName: 'BINANCE:BTCUSDT', // Use the correct trading pair for Bitcoin on Binance
        },
      ],
      interval: 'D',
      width: '100%', // Adjust the width as needed
      height: '500', // Adjust the height as needed
      locale: 'en',
      theme: 'dark',
    });

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '80%', // Adjust the width as needed
        height: '500px', // Adjust the height as needed
        margin: 'auto', // Center horizontally
      }}
    />
  );
};

export default TradingViewChart;
