import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  

  return (
    <>
      <div className="logo-container">
          <img
            src="./taskList.png"
            alt="Task List logo"
            style={{ height: "300px"}}/>
      </div>
      <h1>Choose a profile to continue...</h1>
    
      {/* Choose a profile to view */}

      <a href="#">Zak</a> <span> </span> or <span> </span> <a href="#">Bianca</a>
      
      <h1>Todo List:</h1>
      <TodoApp />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        &copy;2025 Bianca Powers. All rights reserved.
      </p>
    </>
  )
}

function validateForm() {
  let x = document.forms["myForm"]["username"].value;
  let y = document.forms["myForm"]["password"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  if (y == "") {
    alert("Password must be filled out");
    return false;
  }
} 

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = `${todos.length} todos`;
    }, [todos]);

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input }]);
            setInput("");
        }
    };

    const removeTodo = (id) => {
        // Remove from array - filter out
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <br /> <br />
            <button onClick={addTodo}>Add</button>
            <br /> <br />
            <button onClick ={removeTodo}>Remove</button>
            <br /> <br />
            <button onClick={() => setTodos([])}>Clear All</button>

            <ul>{todos.map(t => <li key={t.id}>{t.text}</li>)}</ul>
        </div>
    );
}

export default App
