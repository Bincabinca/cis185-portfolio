import { useState, useEffect } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

const profiles = [
    {
      name: "Zak Hussain",
      role: "Professor and Robotics Engineer",
      bio: "Passionate about teaching and building innovative robotic systems [probably], and giving me a good grade [definitely].",
      isOnline: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "Robotics", "AI", "Generous Grading"],
    },
    {
      name: "Bianca Powers",
      role: "Student and Aspiring Software Developer",
      bio: "Passionate about creating interactive user experiences and getting good grades.",
      isOnline: false,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    }
]

function App() {
  const [count, setCount] = useState(0)
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
  <>
  <div className="logo-container">
    <img
      src="./taskList.png"
      alt="Task List logo"
      style={{ height: "300px"}}/>
    </div>
    
    {/* Choose a profile to view */}
    {selectedProfile === null && (
      <>
      <h1>Choose a profile to continue...</h1>
      <button onClick={() => setSelectedProfile(0)}>Zak</button> <span> </span> or <span> </span> <button onClick={() => setSelectedProfile(1)}>Bianca</button>
      </>
    )}
    
    {/* Show profile card when selected */}
    {selectedProfile !== null && (
      <>
      <ProfileCard 
        name={profiles[selectedProfile].name}
        role={profiles[selectedProfile].role}
        bio={profiles[selectedProfile].bio}
        isOnline={profiles[selectedProfile].isOnline}
        skills={profiles[selectedProfile].skills}
      />

      <button onClick={() => setSelectedProfile(null)}>Logout</button>
      </>
    )}
    
    {/* Show todo list only when profile is selected */}
    {selectedProfile !== null && (
      <>
      <h1>To-Do List:</h1>
      <TodoApp count={count} setCount={setCount} />
      
      <div className="card">
        Number of tasks: {count}
      </div>
      </>
    )}
    
    <p className="read-the-docs">
      &copy;2025 Bianca Powers. All rights reserved.
    </p>
    </>
    )
  }

function TodoApp({ count, setCount }) {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    {/* Change count when tasks are added or removed */}
    useEffect(() => {
        document.title = `${todos.length} todos`;
        setCount(todos.length);
    }, [todos, setCount]);

    {/* Add task to array */}
    const addTodo = () => {
      if (input.trim()) {
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput("");
      }
    };

    {/* Remove task from array */}
    const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    {/* Toggle task completion status */}
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <br /> <br />
      <button onClick={addTodo}>Add</button>
      <br /> <br />
      <button onClick={() => setTodos([])}>Clear All</button>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}> {todos.map(t => (
        <li key={t.id}>
          <input 
            type="checkbox" 
            checked={t.completed} 
            onChange={() => toggleTodo(t.id)}
          />
          <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
          </span>
          <button onClick={() => removeTodo(t.id)}>Remove</button>
        </li>
      ))}
      </ul>
    </div>
    );
}

export default App
