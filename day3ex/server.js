
const express = require('express');
const app = express();
const port = 3000; 


app.use(express.json());


const data = [
  {
    id: 1,
    title: 'Sample Post 1',
    content: 'This is the content of sample post 1.',
  },
  {
    id: 2,
    title: 'Sample Post 2',
    content: 'This is the content of sample post 2.',
  },
];


app.get('/posts', (req, res) => {
  res.json(data);
});


app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find((p) => p.id === postId);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    res.json(post);
  }
});


app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: data.length + 1,
    title,
    content,
  };
  data.push(newPost);
  res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = data.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    const { title, content } = req.body;
    data[postIndex] = { ...data[postIndex], title, content };
    res.json(data[postIndex]);
  }
});


app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = data.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    data.splice(postIndex, 1);
    res.json({ message: 'Post deleted' });
  }
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
