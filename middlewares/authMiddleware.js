const { verify } = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Extract the token from the request headers
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify and decode the token
    const decoded = verify(token, '7c6b17678d2f6b500268108fa96c37f437458964799edd1f589982764b60cb272e70239bcf422557dd9a4f78497a6fef2098885e12f9066720caea1f03598237');

    // Attach the decoded user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authMiddleware;
