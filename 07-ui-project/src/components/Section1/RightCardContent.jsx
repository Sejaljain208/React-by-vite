import React from 'react'

const RightCardContent = (props) => {
  return (
       <div className='w-full h-full flex flex-col mb-4 justify-center items-center gap-30'> 
            <p className='text-white text-md font-medium'>{props.intro}</p>
            <div className='w-full h-full flex align-bottom justify-center items-center'>
                <button className={`px-4 py-2 rounded-full font-bold hover:bg-gray-200 ${props.color}`}>{props.tag}</button>
                <button  style={{ backgroundColor: props.color.split(' ')[0].replace('bg-', '') }} className='  text-red-400 px-4 py-2 rounded-full font-bold hover:bg-gray-200 '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    
  )
}

export default RightCardContent
