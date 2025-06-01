import React from 'react';
import './StatCard.css'; // Optional: if using separate styles

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default StatCard;
