import { useState } from "react";
import './App.css'

function App() {
  const [userInput, setUserInput] = useState('')

  const handleUserInput = (e) => setUserInput(e.target.value) 

  const colorDisplayStyles = {
    backgroundColor: userInput,
  }

  return (
    <main className="container">
      <div className="colorDisplay" style={colorDisplayStyles}>
        <p>{userInput.length ? userInput : 'Empty Value'}</p>
      </div>
      <input autoFocus tabIndex={0} placeholder="Type Color Name" onChange={handleUserInput} className="userInput" />
    </main>
  );
}

export default App;
