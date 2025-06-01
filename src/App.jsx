import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddAlumni from './pages/AddAlumini'; // <-- NEW IMPORT

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-alumni" element={<AddAlumni />} /> {/* NEW ROUTE */}
    </Routes>
  );
}

export default App;
