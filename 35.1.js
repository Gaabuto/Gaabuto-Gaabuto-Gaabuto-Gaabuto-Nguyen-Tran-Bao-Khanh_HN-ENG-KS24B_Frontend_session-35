let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
  let container = document.getElementById("tasks-container");
  container.innerHTML = "";
  tasks.forEach((item) => {
    container.innerHTML += `<div class="task-item">
                            <span>${item.task}</span>
                            <button onclick = "updateTask(${item.id})">Sửa</button>
                            <button onclick = "deleteTask(${item.id})">Xoá</button>
                            </div>`;
  });
}

function addTask(e) {
  e.preventDefault();
  let taskInput = document.getElementById("task-input");
  let taskValue = taskInput.value;
  let newTask = {
    id: tasks[tasks.length - 1].id + 1,
    task: taskValue,
  };
  tasks.push(newTask);
  renderTasks();
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
}

function updateTask(id) {
  let taskIndex = tasks.findIndex((item) => item.id === id);
  let newTask = prompt("Chỉnh sửa công việc:", tasks[taskIndex].task);
  tasks[taskIndex] = {
    id,
    task: newTask,
  };
  renderTasks();
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
}

function deleteTask(id) {
  let taskIndex = tasks.findIndex((item) => item.id === id);
  if (confirm("Xác nhận xoá phần tử")) {
    tasks.splice(taskIndex, 1);
  }
  renderTasks();
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
}
renderTasks();
