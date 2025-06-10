import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState('Empty Value')

  const handleUserInput = (e) => setUserInput(e.target.value) 

  return (
    <main>
      <div className="colorDisplay">
        <p>{userInput}</p>
      </div>
      <input placeholder="Type Color Name" onChange={handleUserInput} />
    </main>
  );
}

export default App;
