import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { text: newTodo, completed: false }]);
          setNewTodo('');
        }
      };

      const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      };

      const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      };

      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <div className="flex mb-4">
              <input
                type="text"
                className="flex-1 p-2 border rounded mr-2"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 border-b last:border-b-0"
                >
                  <span
                    className={`flex-1 ${
                      todo.completed ? 'line-through text-gray-500' : ''
                    }`}
                    onClick={() => toggleTodo(index)}
                  >
                    {todo.text}
                  </span>
                  <div>
                    <button
                      className="text-red-500 hover:text-red-700 ml-2"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
