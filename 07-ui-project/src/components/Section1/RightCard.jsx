import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='w-80 h-full bg-red-400 shrink-0 flex rounded-3xl justify-center items-center relative overflow-hidden'>

      <img className='w-full h-full object-cover' src={props.img} alt="working professional" />

      <div className='absolute top-0 left-0 w-full h-full flex text-black-400 text-1xl font-bold p-5 flex-col justify-center gap-30 bg-opacity-50'>
        <h1 className='text-2xl font-bold bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id}</h1>
        <RightCardContent intro={props.intro} tag={props.tag}  color={props.color}/>
      </div>

    </div>
  )
}

export default RightCard
