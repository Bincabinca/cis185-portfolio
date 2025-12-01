import { useState } from 'react'
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
      <h1>Login to continue...</h1>
    
      {/* Login form */}
      <form name="myForm" onSubmit={validateForm}>

        <label>Username:<span> </span>
          <input type="text" name="username" />
        </label>

        <br />
        <br />

        <label>Password:<span> </span> 
          <input type="password" name="password" />
        </label>

        <br />
        <br />

        <button type="submit">Login</button>

        {/* Go to profile page on click */}

        {/* Validate input on submit */}

      </form>
      
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

export default App
