// it consist of text and arrow pages of ui-project

import React from 'react'
import Text from './Text'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='mb-8 w-1/4 h-full gap-5 justify-between flex flex-col px-8 py-8 p-4'>
       <Text />
      <Arrow />
    </div>
  )
}

export default LeftContent
