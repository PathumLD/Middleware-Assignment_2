import './App.css'
import Sidebar from './common/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './components/Login';

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
      <Route path="/login" element={<Login/>} />
      <Route path ="/" element={<Sidebar/>} />
    </Routes>
  </Router>  
)

export default App
