import { TaskManager } from "./data.js";

export const UI = {
    displayTasks() {
        const masterListContent = document.querySelector("#master-list-content");
        
        masterListContent.textContent = "";

        const createdListContent = document.querySelector("#created-list-content");
        
        createdListContent.textContent = "";

        TaskManager.tasks.forEach(task => {
            const div = document.createElement("div");
            const titlePara = document.createElement("p");
            titlePara.textContent = task.title;
            const datePara = document.createElement("p");
            datePara.textContent = task.dueDate;
            div.appendChild(titlePara);
            div.appendChild(datePara);
            const expandDiv = document.createElement("div");
            expandDiv.style.display = "none";
            const descriptionPara = document.createElement("p");
            const priorityPara = document.createElement("p");
            const completePara = document.createElement("p");
            descriptionPara.textContent = task.description;
            priorityPara.textContent = task.priority;
            completePara.textContent = task.complete;
            div.appendChild(expandDiv);
            expandDiv.appendChild(descriptionPara);
            expandDiv.appendChild(priorityPara);
            expandDiv.appendChild(completePara);
            const expButton = document.createElement("button");
            expButton.className = "exp-button";
            expButton.setAttribute("data-id", task.id);
            expButton.textContent = "Expand";
            div.appendChild(expButton);
            const delButton = document.createElement("button");
            delButton.className = "del-button";
            delButton.setAttribute("data-id", task.id);
            delButton.textContent = "Delete";
            div.appendChild(delButton);
            const comButton = document.createElement("button");
            comButton.className = "com-button";
            comButton.setAttribute("data-id", task.id);
            comButton.textContent = "Complete?";
            div.appendChild(comButton);
            const priButton = document.createElement("button");
            priButton.className = "pri-button";
            priButton.setAttribute("data-id", task.id);
            priButton.textContent = "Change priority";
            div.appendChild(priButton);
            const datButton = document.createElement("button");
            datButton.className = "dat-button";
            datButton.setAttribute("data-id", task.id);
            datButton.textContent = "Change date";
            const date = document.createElement("input");
            date.setAttribute("type", "date");
            date.setAttribute("data-id", task.id);
            div.appendChild(date);
            const editTitle = document.createElement("button");
            editTitle.className = "title-button";
            editTitle.setAttribute("data-id", task.id);
            editTitle.textContent = "Edit title";
            div.appendChild(datButton);
            const title = document.createElement("input");
            title.setAttribute("type", "text");
            title.setAttribute("data-id", task.id);
            div.appendChild(title);
            div.appendChild(editTitle);
            const editDescription = document.createElement("button");
            editDescription.className = "description-button";
            editDescription.setAttribute("data-id", task.id);
            editDescription.textContent = "Edit description";
            div.appendChild(editDescription);
            const description = document.createElement("input");
            description.setAttribute("type", "text");
            description.setAttribute("data-id", task.id);
            div.appendChild(description);
            div.appendChild(editDescription);
            masterListContent.appendChild(div);

            if (!document.querySelector(`.${task.list.replace(/\s/g, "")}`)) {
                const div = document.createElement("div");
                div.className = task.list.replace(/\s/g, "");
                createdListContent.appendChild(div);
                const heading = document.createElement("h1");
                heading.textContent = task.list;
                heading.className = task.list.replace(/\s/g, "");
                div.appendChild(heading);

                const titlePara = document.createElement("p");
                titlePara.textContent = task.title;
                const datePara = document.createElement("p");
                datePara.textContent = task.dueDate;
                div.appendChild(titlePara);
                div.appendChild(datePara);
                const expandDiv = document.createElement("div");
                expandDiv.style.display = "none";
                const descriptionPara = document.createElement("p");
                const priorityPara = document.createElement("p");
                const completePara = document.createElement("p");
                descriptionPara.textContent = task.description;
                priorityPara.textContent = task.priority;
                completePara.textContent = task.complete;
                div.appendChild(expandDiv);
                expandDiv.appendChild(descriptionPara);
                expandDiv.appendChild(priorityPara);
                expandDiv.appendChild(completePara);
                const expButton = document.createElement("button");
                expButton.className = "exp-button";
                expButton.setAttribute("data-id", task.id);
                expButton.textContent = "Expand";
                div.appendChild(expButton);
                const delButton = document.createElement("button");
                delButton.className = "del-button";
                delButton.setAttribute("data-id", task.id);
                delButton.textContent = "Delete";
                div.appendChild(delButton);
                const comButton = document.createElement("button");
                comButton.className = "com-button";
                comButton.setAttribute("data-id", task.id);
                comButton.textContent = "Complete?";
                div.appendChild(comButton);
                const priButton = document.createElement("button");
                priButton.className = "pri-button";
                priButton.setAttribute("data-id", task.id);
                priButton.textContent = "Change priority";
                div.appendChild(priButton);
                const datButton = document.createElement("button");
                datButton.className = "dat-button";
                datButton.setAttribute("data-id", task.id);
                datButton.textContent = "Change date";
                const date = document.createElement("input");
                date.setAttribute("type", "date");
                date.setAttribute("data-id", task.id);
                div.appendChild(date);
                div.appendChild(datButton);
                const editTitle = document.createElement("button");
                editTitle.className = "title-button";
                editTitle.setAttribute("data-id", task.id);
                editTitle.textContent = "Edit title";
                const title = document.createElement("input");
                title.setAttribute("type", "text");
                title.setAttribute("data-id", task.id);
                div.appendChild(title);
                div.appendChild(editTitle);
                const editDescription = document.createElement("button");
                editDescription.className = "description-button";
                editDescription.setAttribute("data-id", task.id);
                editDescription.textContent = "Edit description";
                div.appendChild(editDescription);
                const description = document.createElement("input");
                description.setAttribute("type", "text");
                description.setAttribute("data-id", task.id);
                div.appendChild(description);
                div.appendChild(editDescription);
            } else {
                const div = document.querySelector(`.${task.list.replace(/\s/g, "")}`);

                const titlePara = document.createElement("p");
                titlePara.textContent = task.title;
                const datePara = document.createElement("p");
                datePara.textContent = task.dueDate;
                div.appendChild(titlePara);
                div.appendChild(datePara);
                const expandDiv = document.createElement("div");
                expandDiv.style.display = "none";
                const descriptionPara = document.createElement("p");
                const priorityPara = document.createElement("p");
                const completePara = document.createElement("p");
                descriptionPara.textContent = task.description;
                priorityPara.textContent = task.priority;
                completePara.textContent = task.complete;
                div.appendChild(expandDiv);
                expandDiv.appendChild(descriptionPara);
                expandDiv.appendChild(priorityPara);
                expandDiv.appendChild(completePara);
                const expButton = document.createElement("button");
                expButton.className = "exp-button";
                expButton.setAttribute("data-id", task.id);
                expButton.textContent = "Expand";
                div.appendChild(expButton);
                const delButton = document.createElement("button");
                delButton.className = "del-button";
                delButton.setAttribute("data-id", task.id);
                delButton.textContent = "Delete";
                div.appendChild(delButton);
                const comButton = document.createElement("button");
                comButton.className = "com-button";
                comButton.setAttribute("data-id", task.id);
                comButton.textContent = "Complete?";
                div.appendChild(comButton);
                const priButton = document.createElement("button)");
                priButton.className = "pri-button";
                priButton.setAttribute("data-id", task.id);
                priButton.textContent = "Change priority";
                div.appendChild(priButton);
                const datButton = document.createElement("button");
                datButton.className = "dat-button";
                datButton.setAttribute("data-id", task.id);
                datButton.textContent = "Change date";
                const date = document.createElement("input");
                date.setAttribute("type", "date");
                date.setAttribute("data-id", task.id);
                div.appendChild(date);
                div.appendChild(datButton);
                const editTitle = document.createElement("button");
                editTitle.className = "title-button";
                editTitle.setAttribute("data-id", task.id);
                editTitle.textContent = "Edit title";
                const title = document.createElement("input");
                title.setAttribute("type", "text");
                title.setAttribute("data-id", task.id);
                div.appendChild(title);
                div.appendChild(editTitle);
                const editDescription = document.createElement("button");
                editDescription.className = "description-button";
                editDescription.setAttribute("data-id", task.id);
                editDescription.textContent = "Edit description";
                div.appendChild(editDescription);
                const description = document.createElement("input");
                description.setAttribute("type", "text");
                description.setAttribute("data-id", task.id);
                div.appendChild(description);
                div.appendChild(editDescription);
            }
        });

        this.setEventListeners();
    },

    setEventListeners() {
        document.querySelectorAll(".exp-button").forEach(button => {
            button.addEventListener("click", this.toggleDetails);
        });
        document.querySelectorAll(".del-button").forEach(button => {
            button.addEventListener("click", this.handleDelete);
        });
        document.querySelectorAll(".com-button").forEach(button => {
            button.addEventListener("click", this.handleComplete);
        });
        document.querySelectorAll(".pri-button").forEach(button => {
            button.addEventListener("click", this.handlePriority);
        });
        document.querySelectorAll(".dat-button").forEach(button => {
            button.addEventListener("click", this.handleDate);
        });
        document.querySelectorAll(".title-button").forEach(button => {
            button.addEventListener("click", this.handleTitle);
        });
        document.querySelectorAll(".description-button").forEach(button => {
            button.addEventListener("click", this.handleDescription);
        })
    },

    toggleDetails(event) {
        const detailsContainer = event.target.previousElementSibling;
        detailsContainer.style.display = detailsContainer.style.display === "none" ? "block" : "none";
        event.target.textContent = event.target.textContent === "Expand" ? "Collapse" : "Expand";
    },

    handleDelete(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        TaskManager.deleteTask(id);
        UI.displayTasks();
    },

    handleComplete(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        TaskManager.updateTaskStatus(id);
        UI.displayTasks();
    },

    handlePriority(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        TaskManager.updatePriority(id);
        UI.displayTasks();
    },

    handleDate(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        const dateValue = event.target.previousElementSibling.value;
        const task = TaskManager.tasks.find(task => task.id === id);
        task.dueDate = dateValue;
        TaskManager.updateDate(id);
        UI.displayTasks();
    },
    //handleDate might could be improved, I think some of that function
    //actually belongs in data.js. Same for the below functions

    handleTitle(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        const titleValue = event.target.previousElementSibling.value;
        const task = TaskManager.tasks.find(task => task.id === id);
        task.title = titleValue;
        TaskManager.updateTitle(id);
        UI.displayTasks();
    },

    handleDescription(event) {
        const id = parseInt(event.target.getAttribute("data-id"));
        const descriptionValue = event.target.previousElementSibling.value;
        const task = TaskManager.tasks.find(task => task.id === id);
        task.description = descriptionValue;
        TaskManager.updateDescription(id);
        UI.displayTasks();
    }
};