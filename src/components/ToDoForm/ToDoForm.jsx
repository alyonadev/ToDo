import React, { useState, useEffect } from "react";

const ToDoForm = () => {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text, priority);
    };

    const addTodo = (text) => {
        setTodos([...todos, { text, priority: 1, completed: false }]);
    };

    return (
        <form onSubmit={handleSubmit}>            
            <input type="text" placeholder="Add new todo" value={text} onChange={(e) => setText(e.target.value)}/>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </select>
            <button type="submit" onClick={(e) => addTodo(e.target.value)}>Add</button>
        </form>
    );
};

export default ToDoForm;