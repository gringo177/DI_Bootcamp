
app.post("/register", async (req, res) => {
    try {
      
  
      
      const token = generateJWT(newUser);
  
      
      res.cookie("jwt", token, {
        httpOnly: true, 
        expires: new Date(Date.now() + 3600000), 
      });
  
      
      res.json({ message: "User registered successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during registration." });
    }
  });
  
  
  app.post("/login", async (req, res) => {
    try {
      
      const token = generateJWT(user);
  
      
      res.cookie("jwt", token, {
        httpOnly: true, 
        expires: new Date(Date.now() + 3600000), 
      });
  
      
      res.json({ message: "User logged in successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during login." });
    }
  });
  