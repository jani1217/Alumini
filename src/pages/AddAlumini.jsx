import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './AddAlumini.css';
import axios from 'axios';

const AddAlumini = () => {
  const [formData, setFormData] = useState({
    name: '',
    admissionNumber: '',
    batch: '',
    course: '',
    status: '',
    company: '',
    designation: '',
    location: '',
    phone: '',
    personalEmail: '',
    linkedinURL: '',
    githubURL: '',
    portfolioURL: '',
    otherSocialLinks: '',
    currentAddress: '',
    higherStudies: {
      course: '',
      university: '',
      country: '',
      yearOfEnrollment: '',
    },
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('higherStudies.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        higherStudies: {
          ...prev.higherStudies,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addAlumini = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must be logged in to submit.');
      return;
    }

    try {
      const payload = {
        ...formData,
        otherSocialLinks: formData.otherSocialLinks
          ? [formData.otherSocialLinks]
          : [],
      };
      console.log('Sending Payload:', payload);

      const res = await axios.post(
        'https://addalumni-hu55rosxta-el.a.run.app/addAlumni',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      alert(res.data.message || 'Alumni added successfully!');
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add alumni. Please check if the server is configured for CORS.');
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="add-alumni-container">
          <div className="form-card">
            <h2 className="form-title">Add Alumni</h2>
            <form className="alumni-form" onSubmit={addAlumini}>
              <label>Name <input type="text" name="name" onChange={handleChange} /></label>
              <label>Admission Number <input type="text" name="admissionNumber" onChange={handleChange} /></label>
              <label>Batch <input type="text" name="batch" onChange={handleChange} placeholder="2022-26" /></label>
              <label>Course
                <select name="course" onChange={handleChange}>
                  <option>Select course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MCA">MCA</option>
                </select>
              </label>
              <label>Status
                <select name="status" onChange={handleChange}>
                  <option value="">Select Status</option>
                  <option value="Employed">Job</option>
                  <option value="Internship">Internship</option>
                  <option value="Higher Studies">Higher Studies</option>
                  <option value="Course/Training">Course/Training</option>
                  <option value="Competitive Exam">Competitive Exam</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>Company <input type="text" name="company" onChange={handleChange} /></label>
              <label>Designation <input type="text" name="designation" onChange={handleChange} /></label>
              <label>Location <input type="text" name="location" onChange={handleChange} /></label>
              <label>Contact Info <input type="text" name="phone" onChange={handleChange} /></label>
              <label>Personal Email <input type="text" name="personalEmail" onChange={handleChange} /></label>
              <label>LinkedIn URL <input type="text" name="linkedinURL" onChange={handleChange} /></label>
              <label>GitHub URL <input type="text" name="githubURL" onChange={handleChange} /></label>
              <label>Portfolio URL <input type="text" name="portfolioURL" onChange={handleChange} /></label>
              <label>Other Social Links <input type="text" name="otherSocialLinks" onChange={handleChange} /></label>
              <label>Current Address <input type="text" name="currentAddress" onChange={handleChange} /></label>
              <label>Higher Studies Course <input type="text" name="higherStudies.course" onChange={handleChange} /></label>
              <label>University <input type="text" name="higherStudies.university" onChange={handleChange} /></label>
              <label>Country <input type="text" name="higherStudies.country" onChange={handleChange} /></label>
              <label>Year of Enrollment <input type="text" name="higherStudies.yearOfEnrollment" onChange={handleChange} /></label>
              <label>Remarks <input type="text" name="remarks" onChange={handleChange} /></label>
              <button type="submit">Add Alumni</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAlumini;
