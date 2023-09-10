
export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markTaskComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].complete = true;
        }
    }

    listTasks() {
        return this.tasks;
    }
}
