import { ka } from "date-fns/locale";

export class Task {
    constructor(title, description, dueDate, priority, complete, list) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
        this.list = list;
    }
}

export const TaskManager = {
    tasks: [],
    lists: [],

    addTask(task) {
        this.tasks.push(task);
        this.saveToLocalStorage();
    },

    updateTaskStatus(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.complete = task.complete === "yes" ? "no" : "yes";
            this.saveToLocalStorage();
        }
    },

    updatePriority(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            if (task.priority == "!") {
                task.priority = "!!";
            } else if (task.priority == "!!") {
                task.priority = "!!!";
            } else {
                task.priority = "!";
            }
            this.saveToLocalStorage();
        }
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToLocalStorage();
    },

    updateDate(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            this.saveToLocalStorage();
        }
    },

    updateTitle(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            this.saveToLocalStorage();
        }
    },

    updateDescription(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            this.saveToLocalStorage();
        }
    },

    saveToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        localStorage.setItem("lists", JSON.stringify(this.lists));
    },

    loadFromLocalStorage() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
        this.tasks = savedTasks.map(taskData => new Task(
            taskData.title,
            taskData.description,
            taskData.dueDate,
            taskData.priority,
            taskData.complete,
            taskData.list
        ));
        this.lists = savedLists;
        console.log(this.tasks);
    }
};