import React from 'react';
import './Recruiters.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
const Recruiters = () => {
  return (
     <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
    <div className="recruiters-container">
      <h2 className="recruiters-title">RECRUITERS</h2>
      <div className="recruiters-actions">
        <button className="recruiter-btn">Add Recruiter</button>
        <button className="recruiter-btn">Import Recruiters</button>
      </div>
      {/* Table or content goes here */}
    </div>
</div>
</div>

  );
};

export default Recruiters;
