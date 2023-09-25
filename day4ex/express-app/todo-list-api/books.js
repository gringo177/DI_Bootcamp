

const express = require('express');
const router = express.Router();


const books = [];


router.get('/', (req, res) => {
  res.json(books);
});


router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});


router.put('/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const index = books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    books[index] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});


router.delete('/:id', (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

module.exports = router;
