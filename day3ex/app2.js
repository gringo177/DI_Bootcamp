const express = require('express');
const app = express();
const port = 5000;

const dataService = require('./data/dataService'); 


app.get('/api/posts', async (req, res) => {
  try {
    const posts = await dataService.fetchPosts();
    res.json(posts);
    console.log('Data fetched and sent successfully.');
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
