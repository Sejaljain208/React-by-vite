import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function Increase(){
    setnum(num+1)
  }

  function Decrease(){
    setnum(num-1)
  }

  function MultiplyY2(){
    setnum(num*2)
  }

  function DividedY2(){
    setnum(num/2)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={MultiplyY2}>MultiplyY2</button>
      <button onClick={DividedY2}>DividedY2</button>
    </div>
  )
}

export default App
