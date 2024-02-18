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
          proName: 'COINBASE:BTCUSD',
        },
      ],
      interval: 'D',
      width: '100%',
      height: '600', 
      locale: 'en',
      theme: 'dark',
    });

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '600px' }} />;
};

export default TradingViewChart;
