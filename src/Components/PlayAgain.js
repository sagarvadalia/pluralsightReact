import react from 'react';
import colors from './Utils/Colors'

const PlayAgain = props => (
  <div className="game-done">
    <div style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}} className="message">
      {props.gameStatus === 'lost' ? 'Game Over' : 'Game Won'}

    </div>
	  <button onClick={props.onClick}>Play Again</button>
	</div>
);
export default PlayAgain
