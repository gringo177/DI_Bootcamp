
app.post("/login", async (req, res) => {
  try {

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

   
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000), 
    });

    
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 604800000), 
    });

    
    res.json({ message: "User logged in successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login." });
  }
});


app.post("/refresh", (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
      return res.status(401).json({ error: "Unauthorized: No refresh token provided." });
    }

    
    if (!verifyRefreshToken(refreshToken)) {
      return res.status(403).json({ error: "Forbidden: Invalid refresh token." });
    }

    
    const newAccessToken = generateAccessToken(user);

    
    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000), 
    });

    
    res.json({ message: "Access token refreshed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during token refresh." });
  }
});
