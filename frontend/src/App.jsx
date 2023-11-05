import './App.css'
import Sidebar from './common/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Services from './components/services';
import Bills from './components/bills';
import CartItem from './pages/CartItem';
import Payments from './pages/Payments';
import PaymentConfirmation from './pages/PaymentConfirmation';

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
      <Route path = "/services" element={<Services/>} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/cartitems" element={<CartItem />} />
      <Route path="/payment" element={<Payments />} />
      <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
     </Routes>
  </Router>  
)

export default App
