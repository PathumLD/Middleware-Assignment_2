import { useState } from 'react'
import './App.css'
import Sidebar from './common/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
    </>
  )
}

export default App
