import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

export default function Services() {
  // Sample telecommunication service packages data
  const packages = [
    { id: 1, name: "International Roaming", description: "Stay connected worldwide", usage: "Roaming", price: 499.00 },
    { id: 2, name: "Data Unlimited", description: "Unlimited data for streaming and browsing", usage: "Data", price: 999.00 },
    { id: 3, name: "Voice Plus", description: "Enhanced voice calling experience", usage: "Voice", price: 100.00 },
    // Add more packages as needed
  ];

  return (
    <div className="w-[86%]" style={{ marginRight: "20px", marginLeft: "7%" }}>
      {/* Logo and Navigation Container */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <Link to="/home" className="text-indigo-600">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </div>

      <div className="text-center">
        <div className="text-4xl">
          <h4>Telco Services Details</h4>
        </div>

        <div className="pt-12 pb-6">
          <form>
            <div className="relative">
              <input
                type="text"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by name or reason"
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 top-2.5 w-18 bg-gray-200 hover-bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
              <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Service
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Usage
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id} className="bg-white border-b">
                  <th className="px-6 py-4 text-gray-900 whitespace-nowrap">{pkg.id}</th>
                  <td className="px-6 py-4">{pkg.name}</td>
                  <td className="px-6 py-4">{pkg.description}</td>
                  <td className="px-6 py-4">{pkg.usage}</td>
                  <td className="px-6 py-4">Rs.{pkg.price.toFixed(2)}</td>

                  <td className="px-4 py-4">
                    <div className="space-x-4">
                      <button
                        type="button"
                        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-3 py-2.5 bg-blue-600 hover-bg-blue-700"
                      >
                        Activate
                      </button>
                      <button
                        type="button"
                        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-3 py-2.5 bg-red-700 hover-bg-red-800"
                      >
                        Deactivate
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
