import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (role) => {
    const credentials = { name, email, password, role };
    localStorage.setItem('name', name);

    try {
      // Send credentials to the backend
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      // Check if login is successful
      if (response.ok) {
        if (role === 'job_seeker') {
          navigate('/user');  // Redirect to user dashboard
        } else if (role === 'employer') {
          navigate('/employer');  // Redirect to employer dashboard
        }
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
          <img
            src="https://rebirthempowermenteducation.org/wp-content/uploads/2017/09/Screenshot-2023-06-24-at-11.17.24-AM.png"
            alt="Rebirth Empowerment Logo"
            className="logo-image"
          />
        </div>
        <h2>Login in!</h2>
        <p>To get started</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Can handle form submission here
          }}
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="button-group">
            <button
              type="button"
              className="btn btn-job"
              onClick={() => handleLogin('job_seeker')}
            >
              I'm job searching
            </button>
            <button
              type="button"
              className="btn btn-employer"
              onClick={() => handleLogin('employer')}
            >
              I'm an employer
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
