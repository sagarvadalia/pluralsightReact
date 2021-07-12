// STAR MATCH - Starting Template
import utils from './Utils/Math'
import colors from './Utils/Colors'
import react, { useState, useEffect } from 'react'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'
import PlayAgain from './PlayAgain'
import Game from './Game'
const StarMatch = (props) => {

  return (
    <Game key = {props.key}  startNewGame={() => props.startNewGame} ></Game>

  )

};
export default StarMatch
