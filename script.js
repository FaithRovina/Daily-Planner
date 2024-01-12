function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskStatus = document.getElementById('taskStatus');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      updateTaskStatus(taskDiv, taskStatus.value, checkbox.checked);
    });

    const taskText = document.createElement('span');
    taskText.innerText = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
      taskDiv.remove();
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    // Set initial task status
    updateTaskStatus(taskDiv, taskStatus.value, false);

    taskInput.value = ''; // Clear the input field
  }
}

function updateTaskStatus(taskDiv, status, isChecked) {
  const taskText = taskDiv.querySelector('span');

  switch (status) {
    case 'inProgress':
      taskDiv.style.backgroundColor = '#ffd700'; // Set background color for in progress
      break;
    case 'notStarted':
      taskDiv.style.backgroundColor = '#ffffff'; // Set background color for not started
      break;
    case 'completed':
      taskDiv.style.backgroundColor = '#90ee90'; // Set background color for completed
      break;
    default:
      break;
  }

  if (isChecked) {
    taskText.style.textDecoration = 'line-through';
  } else {
    taskText.style.textDecoration = 'none';
  }
}
