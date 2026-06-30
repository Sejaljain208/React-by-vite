// bhut sare event hote hai jaise ki click , double click , mouse move , mouse enter , mouse leave , on change etc.
// inke kuch naam jaise - onclick , onDoubleClick , onMouseMove , onMouseEnter , onMouseLeave , onChange etc. hote hai
// isme hum button click karne par ,taxt field mai text enter karna , button par dobleclick, or ...bhut sare kaam karege ... jo screen par user dikh raha hai usko change karege with the help of function .

import React from 'react'

const App = () => {

  function btnclicked() {
    console.log("Button Clicked");
  }
  function inputchanging() {
    console.log("user is typing");
  }
  const pageScrolling = (elem) => {
    console.log("user is scrolling at speed ",elem);
  }

  return (
    <div>
      <h1>Hello , Sejal </h1>

      <button className="btn" onClick={btnclicked} >Change User </button>

      <button className="btn" onDoubleClick={btnclicked}>login</button>

      <input type="text" placeholder='Enter your name' onChange={inputchanging} />

      <div onMouseMove={(elem) => {
        console.log(elem.clientX, elem.clientY);
      }}
        className='box'
      >
      </div>

{/* teen page banaye ge , jinko scroll kar ke dekh paye  */}
      <div className='page-wrapper' onWheel={(elem) => {
        console.log("elem.deltaY");
      }}> 
        <div className='page page1'>
          <h2>Page 1</h2>
        </div>
        <div className='page page2'>
          <h2>Page 2</h2>
        </div>
        <div className='page page3'>
          <h2>Page 3</h2>
        </div>
      </div>
    </div>
  )
}

export default App
