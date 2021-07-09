import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display'
import react, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(42)
  return (
    <div className="App">
      <header className="App-header">

        <Button counter={counter} setCounter = {setCounter}></Button>
        <Display message={counter}></Display>

      </header>
    </div>
  );
}

export default App;
