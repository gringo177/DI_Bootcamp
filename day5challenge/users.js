

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const fs = require('fs').promises;

const usersFile = 'users.json';


router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  try {
    const usersData = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(usersData);

    
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.json({ message: 'Username already exists.', success: false });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
    };

    users.push(newUser);

    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
    res.json({ message: 'Registration successful.', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user.', success: false });
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const usersData = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(usersData);

   
    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.json({ message: 'User not found.', success: false });
    }

    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return res.json({ message: 'Login successful.', success: true });
    } else {
      return res.json({ message: 'Incorrect password.', success: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to login.', success: false });
  }
});


router.get('/users', async (req, res) => {
  try {
    const usersData = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(usersData);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
});



module.exports = router;
