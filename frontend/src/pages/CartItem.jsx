import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import axios from 'axios'; // Import Axios

const CartItem = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
  // Fetch cart items from the API using Axios
  axios.get('http://localhost:8081/cartitem') // Update the URL
    .then(response => setCartItems(response.data))
    .catch(error => console.error('Error fetching cart items:', error));
}, []);

  


  return (
    <div className="w-[86%] mx-auto mt-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <Link to="/home" className="text-indigo-600">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </div>
      <h1 className="mb-8 text-3xl font-semibold text-center">Cart Items</h1>
      <div className="flex flex-col justify-center max-w-screen-xl mx-auto md:flex-row md:space-x-6">
        <div className="md:w-2/3">
          {cartItems.map(item => (
            <CartItemCard
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        {/* <div className="md:w-1/3">
          <SubtotalCard cartItems={cartItems} /> 
        </div> */}
      </div>
    </div>
  );
};

const CartItemCard = ({ title, description, price }) => {
  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-xl font-semibold">{price}</p>
          <button className="text-red-500 hover-text-red-600 focus-outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// const SubtotalCard = ({ cartItems }) => {
  
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const vat = (subtotal * 0.2).toFixed(2); 
//   const total = (subtotal + parseFloat(vat)).toFixed(2);

//   return (
//     <div className="p-4 mb-6 bg-white rounded-lg shadow-lg">
//       <div className="mb-4">
//         <div className="flex justify-between mb-2">
//           <p className="text-gray-600">Subtotal</p>
//           <p className="text-gray-800">${subtotal}</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-600">VAT</p>
//           <p className="text-gray-800">${vat}</p>
//         </div>
//       </div>
//       <hr className="my-4" />
//       <div className="flex items-center justify-between">
//         <p className="text-xl font-semibold text-gray-800">Total</p>
//         <div>
//           <p className="text-2xl font-semibold text-blue-600">${total} USD</p>
//         </div>
//       </div>
//       <Link to="/payment" className="block w-full py-2 mt-6 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600">
//         Check Out
//       </Link>
//     </div>
//   );
// };

export default CartItem;
