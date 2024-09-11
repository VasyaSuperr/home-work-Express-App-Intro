const { task } = require('./../model');

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createdTask = task.createTask(body);
  res.status(201).send(createdTask);
};

module.exports.getTasks = (req, res) => {
  const { page, results } = req.query;

  const findTasks = task.getTasks(page, results);
  res.status(201).send(findTasks);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const fountTask = task.getTaskById(id);

  if (!fountTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(fountTask);
};

module.exports.updateTaskById = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const updatedTask = task.updateTask(id, body);

  if (!updatedTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(updatedTask);
};

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;

  const deletedTask = task.deleteTask(id);

  if (!deletedTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(204).send();
};
