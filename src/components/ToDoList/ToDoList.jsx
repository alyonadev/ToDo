import React, { useState, useEffect } from "react";

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {
            text: "Buy milk",
            priority: 1,
            completed: false,
        },
        {
            text: "Do laundry",
            priority: 2,
            completed: false,
        },
    ]);

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, text, priority) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.text = text;
                todo.priority = priority;
            }
            return todo;
        }));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                        <button onClick={() => editTodo(todo.id, "New text", 1)}>Edit</button>
                        <input type="checkbox" checked={todo.completed} onChange={() => editTodo(todo.id, todo.text, todo.priority)} />
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default ToDoList;