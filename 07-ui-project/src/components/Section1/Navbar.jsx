import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white-300 px-4 py-2 '>
    
       <button className='bg-black hover:bg-gray-800 text-white py-2 px-4 uppercase  rounded-full'>Target Audience</button>  

       <button className='bg-gray-500 hover:bg-black-700 text-black font-bold py-2 px-4 rounded-full uppercase justify-self-end tracking-wider'> Digital Banking Platform </button>        
    </div>
  )
}

export default Navbar
