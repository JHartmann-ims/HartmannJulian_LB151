import { useState } from 'react'
import reactLogo from './assets/react.svg'
import shoes from './assets/shoes.jpg'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}

export default App
