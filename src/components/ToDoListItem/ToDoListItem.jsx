import React from "react";

const ToDoListItem = ({ todo }) => {
    return (
        <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => editTodo(todo.id, "New text", 1)}>Edit</button>
            <input type="checkbox" checked={todo.completed} onChange={() => editTodo(todo.id, todo.text, todo.priority)} />
        </li>
    );
};

export default ToDoListItem;