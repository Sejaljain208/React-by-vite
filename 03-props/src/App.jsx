//hum multiple cards banaye , par code shirf ek baar likhege ...card.jsx mai and their css in index.css file 
// then abb mai bana rahi hu , ek component folder inside src folder and uske andar ek card.jsx file banayenge

// phir card ka div wala code copy karenge aur card.jsx me paste karenge and then app.jsx me import karenge and then use karenge

// phir hum props ka use karenge to pass data from parent component to child component in react js . hum <Card /> ke andar name and description pass karenge and then card.jsx me props ke through access karenge and then display karenge.

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card name="Sejal Jain"  age={21} description="i am a coder and designer "  
      src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YSUyMGdpcmx8ZW58MHx8MHx8fDA%3D" />

      <Card name="John Doe" age={20} description="i am a developer "  
      src="https://images.unsplash.com/photo-1626913580941-d00853cc2527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" />

      <Card name="Jane Smith" age={23} description="i am a UI/UX designer " 
      src="https://images.unsplash.com/photo-1667066454794-b7b0987b478a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" />
    </div>
  )
}

export default App
