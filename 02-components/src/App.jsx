// humne component based architecture ka use kiya hai jisme humne alag alag components banaye hai or unhe ek sath use kiya hai , jaise ki navbar, card etc. isse hum easily manage kar sakte hai or reusability bhi hoti hai

import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  const name = 'sejal'
  const age = 20

  // so kuch iss tarah multiple lines of codes nhi likhna pdta or hum multipal cards bana sakte hai , or ese har component ka apna alag file hoga jisse hum easily manage, update kar sakte hai
  
  return (                  
    <div>
      <Navbar />                      
      <br />
      <h1>hello my  name is {name} and age is {age}</h1>
      <Card />
    </div>
  )
}

export default App
