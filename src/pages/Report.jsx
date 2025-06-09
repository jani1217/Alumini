import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import './Report.css';

const Report = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        <div className="stats-grid">
          <StatCard title="TOTAL ALUMNI" value="723" />
          <StatCard title="EMPLOYED" value="465" />
          <StatCard title="HIGHER STUDIES" value="142" />
          <StatCard title="AVAILABLE" value="24" />
        </div>

        <div className="reports-section">
          <div className="report-box scrollable">
            <h3>Top Recruiters</h3>
            <div className="data-container">
              <ul>
                {Array.from({ length: 30 }, (_, i) => (
                  <li key={i}>Recruiter {i + 1}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="report-box scrollable">
            <h3>Universities Alumni Attend</h3>
            <div className="data-container">
              <ul>
                {Array.from({ length: 30 }, (_, i) => (
                  <li key={i}>University {i + 1}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="report-box export-box">
            <h3>Export</h3>
            <div className="data-container export-links">
              <a href="#">Full List</a>
              <a href="#">Contact List</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
