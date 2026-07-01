// setNum function asynchronous hai , matlab agar hum change karke console par check kare to turant nhi dikhege changes , jab process ho jaye ki , ya function uss time mai khatam ho jayega , tab dikhega output . lein screen par turant dikhegaa.
// or ek baat or , react koshish karta hai identify karne ki , ki aap vahi cheeeez vapis to nhi daal re . matlab agar setnum ki value bapis num hi doge to vo render nhi karege..

import React, { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  // batch method 
  const [val, setval] = useState(10)
  const clicked = () => {
    setval(prev => (prev + 1))
    setval(prev => (prev + 1))
    setval(prev => (prev + 1))
  }

  // object banaya useState mai ...
  const [num, setnum] = useState({ user: 'Sejal', age: 21 })
  const btnclick = () => {
    const newNum = { ...num };
    newNum.age = 29;
    newNum.user = 'shivi';
    setnum(newNum);
  }

  // array banaya useState mai ...
  const [arr, setarr] = useState([10, 20, 30])
  const arraybtn = () => {
    setarr(prev => ([...prev, 40]))
  }

  return (
    <div>
      <h1>{count}</h1>
       <button onClick={() => setcount(count+1)}> Increment
      </button>
      
      <h1>{val}</h1>
      <button onClick={clicked}> Incre by 3
      </button>

      <br />      
      <h1>{num.user} ,{num.age}</h1>
      <button onClick={btnclick}> click here </button>

      <h1>{arr}</h1>
      <button onClick={arraybtn}> Add in Array </button>

    </div>
  )
}

export default App
