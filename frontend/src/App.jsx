import { useState } from 'react';
import Navbar from './components/navbar';
import './components/navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
