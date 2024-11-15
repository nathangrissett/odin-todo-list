import "./styles.css";
import { TaskManager, Task } from "./data.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    TaskManager.loadFromLocalStorage();
    UI.displayTasks();

    document.querySelector("#list-submit").addEventListener("click", () => {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const date = document.querySelector("#date").value;
        const priority = document.querySelector("#priority").value;
        const complete = document.querySelector("#complete").value;
        const category = document.querySelector("#category").value;

        const newTask = new Task(title, description, date, priority, complete, category);
        TaskManager.addTask(newTask);
        UI.displayTasks();
    });
});