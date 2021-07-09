import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display'
import RenderTime from './Components/RenderTime'
import react, { useState, useEffect } from 'react';
function App() {
  const [counter, setCounter] = useState(0)
  const incrementBy1 = () => setCounter(counter + 1)
  const incrementBy5 = () => setCounter(counter + 5)
  const incrementBy10 = () => setCounter(counter + 10)
  const incrementBy20 = () => setCounter(counter + 20)
   useEffect(() => {
    // Update the document title using the browser API
    setInterval(RenderTime, 1000)
  });
  return (
    <div className="App">
      <header className="App-header">
        <div class = "flex">
        <Button onClickHandler={incrementBy1} increment = {1}></Button>
        <Button onClickHandler={incrementBy5} increment = {5}></Button>
        <Button onClickHandler={incrementBy10} increment = {10}></Button>
          <Button onClickHandler={incrementBy20} increment={20}></Button>

        </div>

        <Display message={counter}></Display>

      </header>
    </div>
  );
}

export default App;
