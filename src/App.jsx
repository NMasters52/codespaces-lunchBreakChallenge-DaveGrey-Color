import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState('')

  const handleUserInput = (e) => setUserInput(e.target.value) 

  const colorDisplayStyles = {
    backgroundColor: userInput,
  }

  return (
    <main>
      <div className="colorDisplay" style={colorDisplayStyles}>
        <p>{userInput.length ? userInput : 'Empty Value'}</p>
      </div>
      <input placeholder="Type Color Name" onChange={handleUserInput} />
    </main>
  );
}

export default App;
