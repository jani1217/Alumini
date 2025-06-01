import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './AddAlumini.css';

const AddAlumini = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="add-alumni-container">
          <div className="form-card">
            <h2 className="form-title">Add Alumni</h2>
            <form className="alumni-form">
              <label>Name <input type="text" /></label>
              <label>Admission Number <input type="text" /></label>
              <label>Batch <input type="text" placeholder="2022-26" /></label>
              <label>Course
                <select>
                  <option>Select course</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>MCA</option>
                </select>
              </label>
              <label>Status
  <select>
    <option value="">Select Status</option>
    <option value="job">Job</option>
    <option value="internship">Internship</option>
    <option value="higher-studies">Higher Studies</option>
    <option value="course-training">Course/Training</option>
    <option value="competitive-exam">Competitive Exam</option>
    <option value="other">Other</option>
  </select>
</label>
              <label>Company <input type="text" /></label>
              <label>Designation <input type="text" /></label>
              <label>Location <input type="text" /></label>
              <label>Contact Info <input type="text" /></label>
              <label>Social Links <input type="text" /></label>
              <label>Higher Studies Details <input type="text" /></label>
              <label>Remarks <input type="text" /></label>
              <button type="submit">Add Alumni</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAlumini;
