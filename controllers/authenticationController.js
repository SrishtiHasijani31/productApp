// authenticationController.js
const jwt = require('jsonwebtoken');

function login(req, res) {
  // Perform user authentication (e.g., check username and password)

  // If authentication is successful, generate and return a JWT token
  const token = jwt.sign({ username: 'example_user' }, 'your_secret_key');

  res.json({ token });
}

module.exports = { login };
  