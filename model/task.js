const { v4: uuidv4 } = require('uuid');

const tasksDB = [
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

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: uuidv4(), isDone: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = { ...this.tasks[foundTaskIndex], ...values };
    }
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstance = new TasksDB(tasksDB);

module.exports = tasksDbInstance;
