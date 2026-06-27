// it consist of leftcontent and rightcontent pages of ui-project

import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6  flex  items-center justify-between h-[90vh] px-18 gap-10'>
      
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
