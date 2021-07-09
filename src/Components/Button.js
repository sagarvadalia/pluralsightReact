
import react, {useState} from 'react'

function Button(props) {


  return <button onClick={() => props.onClickHandler()}> + {props.increment}</button>
}
export default Button
