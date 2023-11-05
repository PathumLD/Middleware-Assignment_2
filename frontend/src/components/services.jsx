import React from "react";

export default function services() {
  return (
    <div
      className="w-[86%]"
      style={{
        marginRight: "20px",
        marginLeft: "7%",
        marginTop: "130px",
        textAlign: "center",
      }}
    >
      <div className="">
        <div className="text-4xl mr-[70%] ">
          <h4>Telco Services Details</h4>
        </div>

        <div className="pt-6 pb-6 ml-[77%] w-[20%] mt-[3%]">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-[-24%]">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-[130%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search by name,reason"
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-black absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-8 mt-2">
          <table className="w-full text-sm text-left text-gray-500  ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-10 py-3">
                  ServiceS
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Usage
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b">
                <th className="px-6 py-4 text-gray-900  whitespace-nowrap dark:text-white ml-[10%]">
                 dr
                </th>
                <td className="px-6 py-4 "> dY</td>
                <td className="px-6 py-4 ">
                fg
                </td>
               
                <td className="px-4 py-4">
                  <div className="">
                    <button
                      type="button"
                      className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                    rounded-md px-2 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                      style={{
                        height: 30,

                        marginTop: "0%",
                        backgroundColor: "#363062",
                      }}
                      //   onClick={() =>
                      //     handleApprove(leaves.leave_request_id)
                      //   }
                    >
                      <div
                        className=""
                        style={{
                          // marginLeft: "9%",
                          fontSize: 12,
                        }}
                      >
                        Activate
                      </div>
                    </button>
                    <br />
                    <br />

                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                      style={{
                        height: 30,
                        marginTop: "-3%",
                        paddingRight: 20,
                      }}
                      //   onClick={() =>
                      //     handleDecline(leaves.leave_request_id)
                      //   }
                    >
                      <div
                        style={{
                          marginLeft: "15%",
                          fontSize: "12px",
                        }}
                      >
                        Deactivate
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
