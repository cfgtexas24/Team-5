const express = require('express');
const router = express.Router();

// Hardcoded user data for simplicity
const users = [
  { name: 'John', email: 'john@example.com', password: 'password123', role: 'job_seeker' },
  { name: 'Alice', email: 'alice@example.com', password: 'password456', role: 'employer' },
];

// Login route
router.post('/login', (req, res) => {
  const { name, email, password, role } = req.body;

  // Find the user by email and name
  const user = users.find(
    (user) => user.email === email && user.name === name && user.password === password && user.role === role
  );

  // If user exists, login is successful
  if (true) {
    res.status(200).json({ message: 'Login successful', role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
