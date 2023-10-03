
import React, { useReducer, useState, useRef } from "react";


function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "REMOVE_TODO":
      
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "TOGGLE_TODO":
      
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "FILTER_TASKS":
      
      return state;
    default:
      return state;
  }
}

function TaskList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all"); 
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTask = (id) => {
    
    const taskToEdit = todos.find((todo) => todo.id === id);
    if (taskToEdit) {
      setEditedTask(taskToEdit.text);
      setEditingId(id);
      inputRef.current.focus(); 
    }
  };

  const handleSaveTask = () => {
    if (editedTask.trim() === "") return;
    dispatch({ type: "EDIT_TODO", id: editingId, text: editedTask });
    setEditedTask(""); 
    setEditingId(null); 
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

 
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <div>
        <button onClick={() => setFilter("all")}>Show All</button>
        <button onClick={() => setFilter("completed")}>Show Completed</button>
        <button onClick={() => setFilter("active")}>Show Active</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <div>
                <input
                  type="text"
                  ref={inputRef}
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleSaveTask}>Save</button>
              </div>
            ) : (
              <div>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleToggleTodo(todo.id)}>
                  {todo.completed ? "Uncomplete" : "Complete"}
                </button>
                <button onClick={() => handleEditTask(todo.id)}>Edit</button>
              </div>
            )}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
