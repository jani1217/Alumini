import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatCard from '../components/StatCard';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import Departments from '../components/Departments';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        {/* Stat Cards Section */}
        <div className="stats-grid">
          <StatCard title="TOTAL ALUMNI" value="723" />
          <StatCard title="EMPLOYED" value="465" />
          <StatCard title="HIGHER STUDIES" value="142" />
          <StatCard title="AVAILABLE" value="24" />
        </div>

        {/* Charts and Departments Section */}
        <div className="charts-and-departments">
          <div className="charts-section">
            <div className="card"><PieChart /></div>
            <div className="card"><BarChart /></div>
          </div>
          <div className="card departments-section">
            <Departments />
          </div>
        </div>

        {/* Volunteers Section */}
        <div className="volunteer-section card">
          <h1>VOLUNTEERS / CHAPTER HEADS</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
