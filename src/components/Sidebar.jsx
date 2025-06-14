import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">ALUMNI</div>
      <Link to="/dashboard" className='sidebar-link'>
      <button>Dashboard</button>
      </Link>
      <Link to="/allalumini" className="sidebar-link">
      <button>All Alumni's</button>
      </Link>

      <Link to="/add-alumni" className="sidebar-link">
        <button>Add Alumni</button>
      </Link>
       <Link to="/recruiters" className="sidebar-link">
      <button>Recruiters</button>
      </Link>
      <Link to="/report" className="sidebar-link">
      <button>Reports</button>
      </Link>
       <Link to="/settings" className="sidebar-link">
      <button>Settings</button>
      </Link>


    </div>
  );
};

export default Sidebar;
