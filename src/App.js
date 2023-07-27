import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';

function App() {
  return (
    <div className="App">
      <ToDoList/>
      <ToDoForm/>
    </div>
  );
}

export default App;