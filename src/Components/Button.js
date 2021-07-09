
import react, {useState} from 'react'

function Button(props) {


  return <button onClick = {() => props.onClickHandler()}> +1</button>
}
export default Button
