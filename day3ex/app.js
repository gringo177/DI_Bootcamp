
app.post("/login", async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;
  
      
      const user = users.find(
        (u) => u.username === usernameOrEmail || u.email === usernameOrEmail
      );
  
      
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials." });
      }
  
      
      const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  
      
      if (passwordMatch) {
        const token = jwt.sign({ id: user.id }, "your-secret-key", {
          expiresIn: "1h",
        });
  
        res.json({ token });
      } else {
        res.status(401).json({ error: "Invalid credentials." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during login." });
    }
  });
  app.post("/login", (req, res) => {
    
  
   
    const token = generateJWT(user); 
  
   
    res.json({ token });
  });
  
 
  app.get("/profile", authenticateJWT, (req, res) => {
    
    res.json({ message: "Protected profile route", user: req.user });
  });
  
  
  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      
      res.status(401).json({ error: "Unauthorized: Invalid token." });
    }
  });