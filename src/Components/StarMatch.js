// STAR MATCH - Starting Template
import utils from './Utils/Math'
import colors from './Utils/Colors'
import react, { useState } from 'react'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'
const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState(utils.range(1,9))
  const [candidateNums, setCandidateNums] = useState([])
  const candidatesAreWrong = utils.sum(candidateNums) > stars
  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used'
    }
    if (!candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate'
    }
    return 'available'
  }
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">

          <StarsDisplay count={stars}/>
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} number={number} status = {numberStatus(number)}></PlayNumber>)}

        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
export default StarMatch
