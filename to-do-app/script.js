const tasks = [];
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const value = taskInput.value.trim();
  if (value) {
    tasks.push({ id: Date.now(), text: value });
    taskInput.value = "";
  }
  console.log(tasks);
  renderTask();
});

function renderTask() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    console.log(task);
    const li = document.createElement("li");
    li.className = "bg-gray-200 mt-1";
    li.innerHTML = `
    <span>${task.text}</span>`;
    taskList.appendChild(li);
  });
}
