import { updateIndexes } from './Add&Delete.js';

const removeTasks = (tasks) => {
  function completed(task) { return task.completed === false; }
  tasks = tasks.filter(completed);
  updateIndexes(tasks);
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const ChangeCheck = (task) => {
  if (task.completed) {
    task.completed = false;
  } else {
    task.completed = true;
  }
}

export { removeTasks, ChangeCheck};