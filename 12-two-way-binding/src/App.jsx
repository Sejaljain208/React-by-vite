//two way binding is a process in which data flows in both directions. In react, we can achieve two-way binding using the useState hook. The useState hook allows us to create state variables and update them when the user interacts with the input field. When the user types something in the input field, the onChange event is triggered, and we update the state variable with the new value. This way, the input field always reflects the current state of the variable, and any changes made to the variable are reflected in the input field as well.


import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const submitHandler =(e) =>{
   e.preventDefault()
   console.log('Form Submitted by ' , title);
   settitle('')
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e);
      }}>
        <input type="text"  placeholder='Enter your name'
        value={title}
        onChange={(e) =>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
