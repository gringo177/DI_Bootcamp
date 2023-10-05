
function generateJWT(user) {
    
    const payload = {
      id: user.id, 
      username: user.username, 
      
    };
  
    
    const secretKey = "your-secret-key"; 
  
    
    const options = {
      expiresIn: "1h", 
    };
  
    
    const token = jwt.sign(payload, secretKey, options);
  
    return token;
  }
  
 
app.post("/register", async (req, res) => {
    try {
      
  
      
      const token = generateJWT(newUser);
  
      
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during registration." });
    }
  });
  