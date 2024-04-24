import React, { useState } from 'react';
import './Todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="todo-container"> {/* Apply the todo-container class */}
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="todo-input" 
      />
      <button onClick={addTodo} className="add-button">Add Todo</button> {/* Apply the add-button class */}
      <ul className="todo-list"> {/* Apply the todo-list class */}
        {todos.map(todo => (
          <li key={todo.id} className="todo-item"> {/* Apply the todo-item class */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className={todo.completed ? "completed todo-text" : "todo-text"}> {/* Apply the todo-text class */}
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button> {/* Apply the delete-button class */}
         &nbsp;&nbsp;   <button onClick={() => editTodo(todo.id, prompt('Edit todo', todo.text))} className="edit-button">Edit</button> {/* Apply the edit-button class */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;




















