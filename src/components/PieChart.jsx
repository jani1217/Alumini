// src/components/PieChart.jsx
import React from 'react';
import './PieChart.css';

const PieChart = () => {
  return (
    <div className="pie-chart-container">
      <h1>EMPLOYMENT STATUS</h1>
      <div className="pie-chart">
        <div className="legend">
          <ul>
            <li><span className="dot employed"></span> Employed</li>
            <li><span className="dot higher-studies"></span> Higher Studies</li>
            <li><span className="dot available"></span> Available</li>
          </ul>
        </div>
        <div className="chart-circle"></div>
      </div>
    </div>
  );
};

export default PieChart;
