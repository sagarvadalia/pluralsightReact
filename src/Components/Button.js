
import react, {useState} from 'react'

function Button(props) {


  return <button onClick = {() => props.setCounter(props.counter+1)}> +1</button>
}
export default Button
