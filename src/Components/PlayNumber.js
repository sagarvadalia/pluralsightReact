import react from 'react';
import colors from './Utils/Colors'

const PlayNumber = props => {
  return (

    <button
      style = {{backgroundColor: colors[props.status]}}
      className="number" onClick={() => console.log('Num', props.number)}>{props.number}</button>
  )

}
export default PlayNumber
