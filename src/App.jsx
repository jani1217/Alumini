import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddAlumni from './pages/AddAlumini';
import Recruiters from './pages/Recruiters';
import Settings from './pages/Settings';
import Report from './pages/Report';
import AddAlumini from './pages/AddAlumini';
import AllAlumini from './pages/AllAlumini';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-alumni" element={<AddAlumni />} /> 
      <Route path="/recruiters" element={<Recruiters />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/report" element={<Report />} />

      <Route path='/allalumini' element={<AllAlumini/>}/>

    </Routes>
  );
}

export default App;
