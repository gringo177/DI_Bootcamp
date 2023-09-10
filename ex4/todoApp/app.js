// app.js
import { TodoList } from './todo';


const todoList = new TodoList();


todoList.addTask('Buy groceries');
todoList.addTask('Complete homework');
todoList.addTask('Walk the dog');

todoList.markTaskComplete(1);


const tasks = todoList.listTasks();
console.log('Tasks:');
tasks.forEach((task, index) => {
    const status = task.complete ? 'Complete' : 'Incomplete';
    console.log(`${index + 1}. ${task.task} - ${status}`);
});
