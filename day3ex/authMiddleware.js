

const jwt = require("jsonwebtoken");


function authenticateJWT(req, res, next) {
  
  const token = req.headers.authorization;

  if (!token) {
    
    return res.status(401).json({ error: "Unauthorized: No token provided." });
  }

  
  const secretKey = "your-secret-key"; 

  
  jwt.verify(token, secretKey, (error, user) => {
    if (error) {
      
      return res.status(403).json({ error: "Forbidden: Invalid token." });
    }

    
    req.user = user;
    next(); 
  });
}

module.exports = { authenticateJWT };
