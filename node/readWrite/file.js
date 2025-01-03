const fs = require("fs");
const filePath = "todo.json";

// Load tasks from the file
const loadTask = () => {
  try {
    const databuffer = fs.readFileSync(filePath);
    console.log(databuffer, "buffer"); // Debugging statement
    const dataJson = databuffer.toString();
    console.log(dataJson, "datajson"); // Debugging statement
    const Objdata = JSON.parse(dataJson);
    return Objdata;
  } catch (error) {
    console.log("Error loading tasks:", error); // Debugging statement
    return [];
  }
};

// Save tasks to the file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

// Add a new task
const addTask = (task) => {
  const tasks = loadTask();
  console.log(tasks, "tasks before push"); // Debugging statement
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added:", tasks);
};

// List all tasks
const listTask = () => {
  const tasks = loadTask();
  console.log("Tasks:", tasks);
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
};

// Remove a task
const removeTask = (task) => {
  let tasks = loadTask();
  const tasksToKeep = tasks.filter((t) => t.task !== task);
  if (tasks.length > tasksToKeep.length) {
    saveTasks(tasksToKeep);
    console.log("Task removed:", task);
  } else {
    console.log("Task not found:", task);
  }
};

// Command line arguments
const command = process.argv[2];
const argument = process.argv[3];

console.log("Command:", command); // Debugging statement
console.log("Argument:", argument); // Debugging statement

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("Command not found");
}
