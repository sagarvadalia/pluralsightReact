import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display'
import react, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(42)
  const incrementCounter = () => setCounter(counter+1)
  return (
    <div className="App">
      <header className="App-header">

        <Button onClickHandler = {incrementCounter}></Button>
        <Display message={counter}></Display>

      </header>
    </div>
  );
}

export default App;
