const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());


const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2021 },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2022 },
  { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2023 },
];


app.get('/api/books', (req, res) => {
  res.json(books);
});


app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
