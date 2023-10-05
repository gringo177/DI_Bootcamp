const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("./authMiddleware"); // Import the middleware

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

   
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      id: users.length + 1, 
      username,
      email,
      passwordHash: hashedPassword,
    };

    
    users.push(newUser);

    
    const token = jwt.sign({ id: newUser.id }, "your-secret-key", {
      expiresIn: "1h", 
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration." });
  }
});

router.get("/protected", authenticateJWT, (req, res) => {
    
    res.json({ message: "Authenticated user!", user: req.user });
  });
  
  
  
  module.exports = router;