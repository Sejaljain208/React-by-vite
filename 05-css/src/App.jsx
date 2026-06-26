//chote project ki puri css ek index.css file mai likhna was okay , but bade project mai alag alag components ki css alag alag files mai likhna better hota hai, taki code clean and readable rahe.
//iske liye humne Header.jsx aur button.jsx components ke liye alag alag css files banayi hai - button.css , Header.css ...., jise humne respective components  (app.jsx) mai import kiya hai.
// but problem abhi bhi hoti hai kyuki dono file ki css ko ek hi file mai import karne par dono ki css ek dusre ke sath conflict kar ti hai . for that we use module struture . 

import React from 'react'
import Header from './components/header/Header'
import Button from './components/button/button'


const App = () => {
  return (
    <div>
        
        <Header />
        <Button />
   </div>
  )
}

export default App
