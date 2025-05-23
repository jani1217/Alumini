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
       <div className="charts-and-departments">
  <div className="charts-section">
    <div className="card"><PieChart /></div>
    <div className="card"><BarChart /></div>
  </div>
  <div className="card departments-section">
    <Departments />
  </div>
</div>
<div className="volunteer-section card">
  <h1>VOLUNTEERS / CHAPTER HEADS</h1>
</div>

      </div>
    </div>
  );
};

export default Dashboard;

