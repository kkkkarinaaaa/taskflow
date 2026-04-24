const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  taskList.appendChild(taskItem);
  taskInput.value = "";
});