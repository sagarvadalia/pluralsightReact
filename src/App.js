import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display'
import RenderTime from './Components/RenderTime'
import react, { useState, useEffect } from 'react';
import GithubCardComponent from './Components/GithubCardComponent'
import StarMatch from './Components/StarMatch'
function App() {
  const[display, setDisplay] = useState(2)
  const [counter, setCounter] = useState(0)
  const incrementBy1 = () => setCounter(counter + 1)
  const incrementBy5 = () => setCounter(counter + 5)
  const incrementBy10 = () => setCounter(counter + 10)
  const incrementBy20 = () => setCounter(counter + 20)
   useEffect(() => {
    // Update the document title using the browser API
     if (display === 3) { setInterval(RenderTime, 1000) }
   });
  const onClick = (num) => {
    setDisplay(num)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div class="flex">
          <div class = "flex">
            <nav>
              {display !== 0 && <button onClick={() => onClick(0)}>Display Github Cards</button>}
          {display !== 1 && <button onClick={() => onClick(1)}>Display Buttons</button>}
          {display !== 2 && <button onClick={() => onClick(2)}>Display Star Game</button>}
          {display !== 3 && <button onClick={() => onClick(3)}>Display Renders</button>}
            </nav>
          </div>


          {display === 0 && (<GithubCardComponent title="The Github Cards App"></GithubCardComponent>)}

          {display === 1 && (<div>
            <Button onClickHandler={incrementBy1} increment={1}></Button>
            <Button onClickHandler={incrementBy5} increment={5}></Button>
            <Button onClickHandler={incrementBy10} increment={10}></Button>
            <Button onClickHandler={incrementBy20} increment={20}></Button>
          </div>)}
          {display === 2 && (<div><StarMatch></StarMatch></div>)}



        {display === 1 && (<div>
          <Display message={counter}></Display></div>
        )}
          {display === 3 && (
            <div>
               <div id="root2"></div>
          <div id="root3"></div>
            </div>

          )}
          </div>
      </header>
    </div>
  );
}

export default App;
