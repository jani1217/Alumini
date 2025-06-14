import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the path if needed
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter valid credentials.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem('authToken', token);

      console.log(token)
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login failed. Please check your credentials.');
    }
  };
  

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="button" className="login-button" onClick={handleLogin}>
          LOGIN
        </button>
        <p className="login-forgot">Forgot Password?</p>
        <p className="register-link" onClick={goToRegister}>
          Don't have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
