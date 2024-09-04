const express = require('express');
const {
  getTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require('./controllers/tasksControllers');

const app = express();
app.use(express.json());

app.get('/tasks', getTasks);
app.post('/tasks', createTask);
app.get('/tasks/:id', getTaskById);
app.patch('/tasks/:id', updateTaskById);
app.delete('/tasks/:id', deleteTaskById);

module.exports = app;
