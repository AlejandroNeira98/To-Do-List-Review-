const updateLocalStorageFromHTML = (tasks) => {
  const newTasks = [];
  let i = 1;
  document.querySelectorAll('.task').forEach((HTMLtask) => {
    const object = {};
    object.index = i;
    object.description = HTMLtask.querySelector('[type="text"]').value;
    object.completed = HTMLtask.querySelector('[type="checkbox"]').checked;
    newTasks.push(object);
    i += 1;
  });
  tasks = newTasks;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const updateIndexes = (tasks) => {
  tasks.forEach((task) => {
    task.index = tasks.indexOf(task) + 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = (tasks) => {
  const inputTask = document.getElementById('addTask');
  if (inputTask.value !== '') {
    const inputTaskObj = {
      index: tasks.length + 1,
      description: inputTask.value,
      completed: false,
    };
    tasks.push(inputTaskObj);
    if (tasks[0].description !== '') { window.localStorage.setItem('tasks', JSON.stringify(tasks)); }
  }

  inputTask.value = null;
}

const removeTask = (tasks) => {
  updateLocalStorageFromHTML(tasks);
}

const editTaskDescription = (htmlTask, taskObj, tasks) => {
  taskObj.description = htmlTask.value;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export {updateIndexes, updateLocalStorageFromHTML, addTask, removeTask, editTaskDescription };