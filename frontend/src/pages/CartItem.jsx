import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const CartItem = () => {
  return (
    <div className="w-[86%] mx-auto mt-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <Link to="/home" className="text-indigo-600">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Cart Items</h1>
      <div className="flex flex-col md:flex-row md:space-x-6 justify-center max-w-screen-xl mx-auto">
        <div className="md:w-2/3">
          <CartItemCard title="Home Broadband" description="36EU - 4US" price="$10" />
          <CartItemCard title="Nonstop-Lokka" description="36EU - 4US" price="$5" />
        </div>
        <div className="md:w-1/3">
          <SubtotalCard subtotal="$15" vat="$2.99" total="$17.99 USD" />
        </div>
      </div>
    </div>
  );
};

const CartItemCard = ({ title, description, price }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-xl font-semibold">{price}</p>
          <button className="text-red-500 hover:text-red-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const SubtotalCard = ({ subtotal, vat, total }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white p-4 mb-6">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-800">{subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">VAT</p>
          <p className="text-gray-800">{vat}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-gray-800">Total</p>
        <div>
          <p className="text-2xl font-semibold text-blue-600">{total}</p>
        </div>
      </div>
      <Link to="/payment" className="block w-full mt-6 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Check Out
      </Link>
    </div>
  );
};

export default CartItem;
