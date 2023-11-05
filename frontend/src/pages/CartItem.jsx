import React from 'react';
import { Link } from 'react-router-dom';


const CartItem = () => {
  return (
    <div className="h-screen bg-gray-100 ">
      <h1 className="py-10 text-2xl font-bold text-center ">Cart Items</h1>
      <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
        <div className="md:w-2/3">
          <CartItemCard
            title="Home Broadband"
            description="36EU - 4US"
            price="$10"
          />
          <CartItemCard
            title="Nonstop-Lokka"
            description="36EU - 4US"
            price="$5"
          />
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
      
        
    <div className="rounded-lg md:w-2/3">
      <div className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-700">{description}</p>
          </div>
          <div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              {/* <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span> */}
              {/* <input className="w-8 h-8 text-xs text-center bg-white border outline-none" type="number" value={quantity} min="1" /> */}
              {/* <span className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50"> + </span> */}
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubtotalCard = ({ subtotal, vat, total }) => {
    return (
      
       
        <div className="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-96">
            
      <div className="flex justify-between mb-2">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{subtotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">VAT</p>
        <p className="text-gray-700">{vat}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{total}</p>
          {/* <p className="text-sm text-gray-700">including VAT</p> */}
        </div>
      </div>
      <Link to="/payment" className="flex justify-center w-full p-2 mt-10 font-medium text-center text-white bg-blue-500 rounded-md hover:bg-blue-600">Check out</Link>
            </div>
           
  );
};

export default CartItem;
