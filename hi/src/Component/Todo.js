// import React, { useState } from 'react';
// import './Todo.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const toggleComplete = id => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const editTodo = (id, newText) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   };

//   return (
//     <div className="todo-container"> {/* Apply the todo-container class */}
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Enter a new todo"
//         value={inputValue}
//         onChange={e => setInputValue(e.target.value)}
//         className="todo-input" 
//       />
//       <button onClick={addTodo} className="add-button">Add Todo</button> {/* Apply the add-button class */}
//       <ul className="todo-list"> {/* Apply the todo-list class */}
//         {todos.map(todo => (
//           <li key={todo.id} className="todo-item"> {/* Apply the todo-item class */}
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleComplete(todo.id)}
//               className="todo-checkbox"
//             />
//             <span className={todo.completed ? "completed todo-text" : "todo-text"}> {/* Apply the todo-text class */}
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button> {/* Apply the delete-button class */}
//          &nbsp;&nbsp;   <button onClick={() => editTodo(todo.id, prompt('Edit todo', todo.text))} className="edit-button">Edit</button> 
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }






// import React, { useState, useMemo } from 'react';
// import './Todo.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [activeFilter, setActiveFilter] = useState(true); // State to track active filter
//   const [showAll, setShowAll] = useState(false); // State to track whether to show all todos

//   const addTodo = useMemo(() => () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   }, [inputValue, todos]);

//   const toggleComplete = useMemo(() => id => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }, [todos]);

//   const deleteTodo = useMemo(() => id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   }, [todos]);

//   const editTodo = useMemo(() => (id, newText) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   }, [todos]);

//   const filteredTodos = useMemo(() => {
//     let filtered = showAll ? todos : (activeFilter ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed));
//     return filtered;
//   }, [todos, activeFilter, showAll]);

//   const createButton = useMemo(() => (
//     <button onClick={addTodo} className="add-button">Add Todo</button>
//   ), [addTodo]);

//   const activateButton = useMemo(() => (
//     <button onClick={() => setActiveFilter(true)} className="activate-button">Activate Todo</button>
//   ), []);

//   const completedButton = useMemo(() => (
//     <button onClick={() => setActiveFilter(false)} className="completed-button">Mark Completed</button>
//   ), []);

//   const showAllButton = useMemo(() => (
//     <button onClick={() => setShowAll(true)} className="show-all-button">Show All</button>
//   ), []);

//   const deleteButton = useMemo(() => (
//     <button onClick={() => {/* Handle deletion logic */}} className="delete-button">Delete</button>
//   ), []);

//   const editButton = useMemo(() => (
//     <button onClick={() => {/* Handle edit logic */}} className="edit-button">Edit</button>
//   ), []);

  

//   return (
//     <div className="todo-container"> {/* Apply the todo-container class */}
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Enter a new todo"
//         value={inputValue}
//         onChange={e => setInputValue(e.target.value)}
//         className="todo-input" 
//       />
//       {createButton}
//       {activateButton}
//       {completedButton}
//       {showAllButton}
//       <ul className="todo-list"> {/* Apply the todo-list class */}
//         {filteredTodos.map(todo => (
//           <li key={todo.id} className="todo-item"> {/* Apply the todo-item class */}
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleComplete(todo.id)}
//               className="todo-checkbox"
//             />
//             <span className={todo.completed ? "completed todo-text" : "todo-text"}> {/* Apply the todo-text class */}
//               {todo.text}
//             </span>
//             {deleteButton}
//             {editButton}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;







import React, { useState, useMemo } from 'react';
import './Todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // State to track active filter
  const [showAll, setShowAll] = useState(false); // State to track whether to show all todos

  const addTodo = useMemo(() => () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  }, [inputValue, todos]);

  const toggleComplete = useMemo(() => id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [todos]);

  const deleteTodo = useMemo(() => id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const editTodo = useMemo(() => (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }, [todos]);

  const filteredTodos = useMemo(() => {
    let filtered;
    if (showAll) {
      filtered = todos;
    } else {
      switch (activeFilter) {
        case 'active':
          filtered = todos.filter(todo => !todo.completed);
          break;
        case 'completed':
          filtered = todos.filter(todo => todo.completed);
          break;
        default:
          filtered = todos;
      }
    }
    return filtered;
  }, [todos, activeFilter, showAll]);

  const createButton = useMemo(() => (
    <button onClick={addTodo} className="add-button">Add Todo</button>
  ), [addTodo]);

  const activateButton = useMemo(() => (
    <button onClick={() => setActiveFilter('active')} className="activate-button">Activate Todo</button>
  ), []);

  const completedButton = useMemo(() => (
    <button onClick={() => setActiveFilter('completed')} className="completed-button">Mark Completed</button>
  ), []);

  const showAllButton = useMemo(() => (
    <button onClick={() => setShowAll(true)} className="show-all-button">Show All</button>
  ), []);

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
      {createButton}
      {activateButton}
      {completedButton}
      {showAllButton}
      <ul className="todo-list"> {/* Apply the todo-list class */}
        {filteredTodos.map(todo => (
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
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
            <button onClick={() => {
              const newText = prompt('Edit todo', todo.text);
              if (newText !== null && newText.trim() !== '') {
                editTodo(todo.id, newText);
              }
            }} className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;





























