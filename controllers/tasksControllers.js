const { v4: uuidv4 } = require('uuid');

const tasks = [
  {
    id: uuidv4(),
    description: 'Complete the task',
    deadline: '2024-09-06',
    isDone: false,
  },
  {
    id: '6545',
    description: 'Finish reading the book',
    deadline: '2024-09-20',
    isDone: true,
  },
  {
    id: uuidv4(),
    description: 'Read the documentation',
    deadline: '2024-09-12',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Go fishing',
    deadline: '2024-09-21',
    isDone: false,
  },
];

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  tasks.push({ ...body, id: uuidv4(), isDone: false });

  res.status(201).send(tasks[tasks.length - 1]);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const fountTask = tasks.find(t => t.id === id);

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

  const foundTaskIndex = tasks.findIndex(t => t.id === id);

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }

  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;

  const foundTaskIndex = tasks.findIndex(t => t.id === id);

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }

  tasks.splice(foundTaskIndex, 1);
  res.status(204).end();
};
