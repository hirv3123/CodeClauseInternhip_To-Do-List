document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    // Create task element
    const taskItem = document.createElement('li');
    taskItem.classList.add('task', 'task-appear');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Append to task list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = '';

    // Add delete functionality
    taskItem.querySelector('.delete-btn').addEventListener('click', function () {
      deleteTask(taskItem);
    });
  }
}

function deleteTask(taskItem) {
  taskItem.classList.add('task-delete');
  setTimeout(() => {
    taskItem.remove();
  }, 300);
}
