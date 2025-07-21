let tasks = [];
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
    <span>${task.text}</span>
    <div>
        <button class="delete bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" data-id="${task.id}">Delete</button>
    </div>`;
    taskList.appendChild(li);
  });
}

taskList.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("delete")) {
    tasks = tasks.filter((task) => task.id != id);
  }
  renderTask();
});
