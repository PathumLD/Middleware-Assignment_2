import React from "react";

export default function bills() {
  return (
    <div
      className="w-[86%]"
      style={{
        marginRight: "20px",
        marginLeft: "5%",
        marginTop: "220px",
        textAlign: "center",
      }}
    >
      <div className="">
        {/* Table for 'approve' status */}
        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", paddingLeft: "100px" }}>
            Current Bills
          </div>
        </div>

        {/* Table for 'approve' status */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Bill ID
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                >
                  006
                </th>
                <td className="px-6 py-4">1006</td>
                <td className="px-6 py-4 "> 12000</td>
                <td className="px-6 py-4 ">10.25.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                >
                  007
                </th>
                <td className="px-6 py-4">1007</td>
                <td className="px-6 py-4 "> 7000</td>
                <td className="px-6 py-4 ">11.2.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                >
                  008
                </th>
                <td className="px-6 py-4">1008</td>
                <td className="px-6 py-4 "> 22000</td>
                <td className="px-6 py-4 ">11.1.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                >
                  009
                </th>
                <td className="px-6 py-4">1009</td>
                <td className="px-6 py-4 "> 11000</td>
                <td className="px-6 py-4 ">11.5.2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-20">
        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", paddingLeft: "100px" }}>
            Past Bills
          </div>
          <div className="pt-6 pb-6 ml-[60%] w-[20%]"></div>
        </div>

        {/* Table for 'decline' status */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-[%]">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Bill ID
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                 Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]">
                  001
                </th>
                <td className="px-6 py-4">1001</td>
                <td className="px-6 py-4 "> 10000</td>
                <td className="px-6 py-4 ">10.25.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]">
                  001
                </th>
                <td className="px-6 py-4">1001</td>
                <td className="px-6 py-4 "> 10000</td>
                <td className="px-6 py-4 ">10.25.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]">
                  002
                </th>
                <td className="px-6 py-4">1002</td>
                <td className="px-6 py-4 "> 5000</td>
                <td className="px-6 py-4 ">10.15.2023</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]">
                  001
                </th>
                <td className="px-6 py-4">1003</td>
                <td className="px-6 py-4 "> 14000</td>
                <td className="px-6 py-4 ">9.05.2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
