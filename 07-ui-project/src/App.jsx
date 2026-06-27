// ek ui-project jisme hum sare components banaye :section1 and section2
// data hamseha app.jsx mai hoga. phir isse aap ko child mai bhejna hai.

import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {

  const users = [
    {
      id : 1,
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' ,
      color : 'bg-red-400',
      intro :'This platform helped me find my dream job within two weeks. The application process was smooth and the opportunities were excellent.',
      tag: 'Satisfied'
    },
    {
      id : 2,
      img : 'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' ,
      color : 'bg-blue-400',
      intro :'A fantastic experience! The interface is clean, easy to use, and I received interview calls from top companies very quickly.',
      tag: 'Underserved'
    },
    {
      id : 3,
      img : 'https://images.unsplash.com/photo-1539070061595-47300703661d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' ,
      color : 'bg-green-400',
      intro :'I highly recommend this platform to job seekers. It offers genuine job listings and made my job search much easier.',
      tag: 'Underbanked'
    },
    {
      id : 4,
      img : 'https://images.unsplash.com/photo-1733348137479-2e726d326d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' ,
      color : 'bg-yellow-400',
      intro :'The experience was below my expectations. The service needs improvement and response times were quite slow.',
      tag: 'Unsatisfied'
    },
    {
      id : 5,
      img : 'https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8' ,
      color : 'bg-purple-400',
      intro :'The overall experience was decent. There is room for improvement, but the support team was helpful.',
      tag: 'Average'
    },
  ]

  return (
    <div>
      <Section1  users={users}/>
    </div>
  )
}

export default App
