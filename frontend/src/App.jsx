import './App.css'
import Sidebar from './common/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

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
      <Route path="/register" element = {<Register/>} />
      <Route path="/forgot-password" element = {<ForgotPassword/>} />
      <Route path ="/" element={<Sidebar/>} />
    </Routes>
  </Router>  
)

export default App
