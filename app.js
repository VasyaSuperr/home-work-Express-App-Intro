const express = require('express');
const { tasksControllers } = require('./controllers');

const app = express();
app.use(express.json());

app.post('/tasks', tasksControllers.createTask);
app.get('/tasks', tasksControllers.getTasks);
app.get('/tasks/:id', tasksControllers.getTaskById);
app.patch('/tasks/:id', tasksControllers.updateTaskById);
app.delete('/tasks/:id', tasksControllers.deleteTaskById);

module.exports = app;
