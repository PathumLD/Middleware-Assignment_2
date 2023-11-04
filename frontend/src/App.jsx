import { useState } from 'react'
import './App.css'
import Sidebar from './common/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import login from './components/login'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Sidebar />
//     </>
//   )
// }

const App =() => (
  <Router>
    <Routes>
      <Route path="/login" element={<login/>} />
      <Route path ="/" element={<Sidebar/>} />
    </Routes>
  </Router>  
)

export default App
