import react from 'react'
import Cards from './Cards'



const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => <Cards {...profile}></Cards>)}

    </div>

  )
}
export default CardList
