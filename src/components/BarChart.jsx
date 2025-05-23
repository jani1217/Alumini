// src/components/BarChart.jsx
import React from 'react';
import './BarChart.css';

const BarChart = () => {
  return (
    <div className="bar-chart-container">
      <h4>DEPARTMENT WISE PLACEMENT</h4>
      <div className="bar-chart">
        <div className="bar-group">
          <div className="bar red" style={{ height: '80%' }}></div>
          <div className="bar-label red">CSE</div>
        </div>
        <div className="bar-group">
          <div className="bar red" style={{ height: '60%' }}></div>
          <div className="bar-label blue">ECE</div>
        </div>
        <div className="bar-group">
          <div className="bar red" style={{ height: '90%' }}></div>
          <div className="bar-label red">EEE</div>
        </div>
        <div className="bar-group">
          <div className="bar red" style={{ height: '70%' }}></div>
          <div className="bar-label blue">MECH</div>
        </div>
        <div className="bar-group">
          <div className="bar red" style={{ height: '85%' }}></div>
          <div className="bar-label red">CIVIL</div>
        </div>
        <div className="bar-group">
          <div className="bar red" style={{ height: '55%' }}></div>
          <div className="bar-label blue">IT</div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
