import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddAlumni from './pages/AddAlumini';
import Recruiters from './pages/Recruiters';
import Settings from './pages/Settings';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-alumni" element={<AddAlumni />} /> {/* NEW ROUTE */}
      <Route path="/recruiters" element={<Recruiters />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;
