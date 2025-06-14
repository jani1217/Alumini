import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import axios from 'axios';
import './AllAlumini.css'

function AllAlumini() {
  const [alumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAlumni = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('Authorization token not found. Please login.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        'https://getalumni-hu55rosxta-el.a.run.app/getAlumni',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setAlumniList(response.data.data);
      } else {
        setError('Failed to fetch alumni data.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while fetching alumni.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  return (
     <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
    <div className="all-alumini-container">
      <h2>All Alumni</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && alumniList.length === 0 && <p>No alumni found.</p>}

      {!loading && !error && alumniList.length > 0 && (
        <table className="alumni-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Admission No</th>
              <th>Batch</th>
              <th>Course</th>
              <th>Status</th>
              <th>Company</th>
              <th>Location</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {alumniList.map((alum) => (
              <tr key={alum.id}>
                <td>{alum.name}</td>
                <td>{alum.admissionNumber}</td>
                <td>{alum.batch}</td>
                <td>{alum.course}</td>
                <td>{alum.status}</td>
                <td>{alum.company}</td>
                <td>{alum.location}</td>
                <td>{alum.personalEmail}</td>
                <td>{alum.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
    </div>
  );
}

export default AllAlumini;
