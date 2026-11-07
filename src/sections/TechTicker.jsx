import React from 'react';
import { techTicker } from '../data/portfolioData';

export default function TechTicker() {
  // Duplicate for seamless infinite loop
  const items = [...techTicker, ...techTicker, ...techTicker];

  return (
    <div className="ticker-container" aria-label="Core Technology Ticker">
      <div className="ticker-track">
        {items.map((tech, idx) => (
          <div key={idx} className="ticker-item">
            <span>{tech}</span>
            <span className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
