
const jwt = require('jsonwebtoken');

const authMiddleware = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Access denied. No token provided.' });

  const token = authHeader.split(' ')[1]; 
  if (!token) return res.status(401).json({ message: 'Access denied. Token missing.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    
    if (requiredRole && req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
