import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">ALUMNI</div>

      <button>All Alumni's</button>

      <Link to="/add-alumni" className="sidebar-link">
        <button>Add Alumni</button>
      </Link>

      <button>Recruiters</button>
      <button>Reports</button>
      <button>Settings</button>
    </div>
  );
};

export default Sidebar;
