import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='w-3/4 h-full overflow-auto p-4 flex gap-5 justify-between rounded-3xl'>
      
      {props.users.map(function(elem){
        return <RightCard  id={elem.id} img={elem.img} color={elem.color} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
