import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const BillInfo = () => {
  return (
    <div className="w-[86%] mx-auto mt-12">
      {/* Logo and Navigation Container */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <Link to="/home" className="text-indigo-600">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </div>

      <div className="text-3xl font-bold text-center mb-8">Bills Info</div>

      <div className="mt-8">
        <div className="text-xl font-semibold mb-2">Current Bills</div>
        <div className="relative overflow-x-auto shadow-md rounded-b-lg">
          <table className="w-full text-left text-gray-500 border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">Bill ID</th>
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">006</td>
                <td className="px-6 py-4">1006</td>
                <td className="px-6 py-4">12000</td>
                <td className="px-6 py-4">10.25.2023</td>
                <td className="px-6 py-4">
                  <Link to="/cartitem" className="text-blue-600 hover:underline">
                    Pay Now
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">007</td>
                <td className="px-6 py-4">1007</td>
                <td className="px-6 py-4">7000</td>
                <td className="px-6 py-4">11.2.2023</td>
                <td className="px-6 py-4">
                  <Link to="/cartitem" className="text-blue-600 hover:underline">
                    Pay Now
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">008</td>
                <td className="px-6 py-4">1008</td>
                <td className="px-6 py-4">22000</td>
                <td className="px-6 py-4">11.1.2023</td>
                <td className="px-6 py-4">
                  <Link to="/cartitem" className="text-blue-600 hover:underline">
                    Pay Now
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">009</td>
                <td className="px-6 py-4">1009</td>
                <td className="px-6 py-4">11000</td>
                <td className="px-6 py-4">11.5.2023</td>
                <td className="px-6 py-4">
                  <Link to="/cartitem" className="text-blue-600 hover:underline">
                    Pay Now
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-xl font-semibold mb-2">Past Bills</div>
        <div className="relative overflow-x-auto shadow-md rounded-b-lg">
          <table className="w-full text-left text-gray-500 border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">Bill ID</th>
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">001</td>
                <td className="px-6 py-4">1001</td>
                <td className="px-6 py-4">10000</td>
                <td className="px-6 py-4">10.25.2023</td>
                <td className="px-6 py-4 font-bold text-green-500">Paid</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">002</td>
                <td className="px-6 py-4">1002</td>
                <td className="px-6 py-4">5000</td>
                <td className="px-6 py-4">10.15.2023</td>
                <td className="px-6 py-4 font-bold text-green-500">Paid</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap">003</td>
                <td className="px-6 py-4">1003</td>
                <td className="px-6 py-4">14000</td>
                <td className="px-6 py-4">9.05.2023</td>
                <td className="px-6 py-4 font-bold text-green-500">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;
