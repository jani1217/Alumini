import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path if needed
import './Login.css'; // Reusing same styles as Login

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter valid registration details.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      // Store token in localStorage
      localStorage.setItem('authToken', token);

      alert('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed. ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>REGISTER</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="button" className="login-button" onClick={handleRegister}>
          REGISTER
        </button>
        <p className="login-forgot" onClick={() => navigate('/login')}>Already have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
