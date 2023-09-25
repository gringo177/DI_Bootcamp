

const express = require('express');
const router = express.Router();


const todos = [];


router.get('/', (req, res) => {
  res.json(todos);
});


router.post('/', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


router.put('/:id', (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos[index] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});


router.delete('/:id', (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1)[0];
    res.json(deletedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

module.exports = router;
