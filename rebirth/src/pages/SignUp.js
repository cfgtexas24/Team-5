import React from 'react';
import '../styles/Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
        	
          <img src="https://rebirthempowermenteducation.org/wp-content/uploads/2017/09/Screenshot-2023-06-24-at-11.17.24-AM.png" alt="Rebirth Empowerment Logo" className="logo-image" />
          
        </div>
        <h2>Sign Up</h2>
        <p>To get started</p>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />
          </div>
          <div className="button-group">
            <button type="button" className="btn btn-job">I'm job searching</button>
            <button type="button" className="btn btn-employer">I'm an employer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
