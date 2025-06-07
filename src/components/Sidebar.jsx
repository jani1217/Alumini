import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">ALUMNI</div>
      <Link to="/dashboard" className='sidebar-link'>
      <button>Dashboard</button>
      </Link>
      <button>All Alumni's</button>

      <Link to="/add-alumni" className="sidebar-link">
        <button>Add Alumni</button>
      </Link>
       <Link to="/recruiters" className="sidebar-link">
      <button>Recruiters</button>
      </Link>
      
      <button>Reports</button>
       <Link to="/settings" className="sidebar-link">
      <button>Settings</button>
      </Link>
    </div>
  );
};

export default Sidebar;
