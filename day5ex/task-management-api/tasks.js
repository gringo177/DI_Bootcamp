

const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

const tasksFile = 'tasks.json';


router.get('/', async (req, res) => {
  try {
    const tasksData = await fs.readFile(tasksFile, 'utf-8');
    const tasks = JSON.parse(tasksData);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks.' });
  }
});


router.get('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const tasksData = await fs.readFile(tasksFile, 'utf-8');
    const tasks = JSON.parse(tasksData);
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve task.' });
  }
});


router.post('/', async (req, res) => {
  const newTask = req.body;
  if (!newTask.title) {
    return res.status(400).json({ error: 'Title is required.' });
  }
  try {
    const tasksData = await fs.readFile(tasksFile, 'utf-8');
    const tasks = JSON.parse(tasksData);
    newTask.id = Date.now().toString(); // Generate a unique ID
    tasks.push(newTask);
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task.' });
  }
});


router.put('/:id', async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  if (!updatedTask.title) {
    return res.status(400).json({ error: 'Title is required.' });
  }
  try {
    const tasksData = await fs.readFile(tasksFile, 'utf-8');
    const tasks = JSON.parse(tasksData);
    const index = tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      tasks[index] = updatedTask;
      await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task.' });
  }
});


router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const tasksData = await fs.readFile(tasksFile, 'utf-8');
    let tasks = JSON.parse(tasksData);
    const index = tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      const deletedTask = tasks.splice(index, 1)[0];
      await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
      res.json(deletedTask);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task.' });
  }
});

module.exports = router;
