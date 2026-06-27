//it consist of navbar and page1content pages of ui-project


import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full p-10'> 
     <Navbar />
     <Page1Content users={props.users} />
    </div>
  )
}

export default Section1
