import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowForward, MdSearch } from "react-icons/md";

export const List = () => {
  return (
    <div className="bg-[#F6F6F8] max-h-[89vh] overflow-y-scroll py-2 px-3 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#1B0039]">My Earnings</h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 grid grid-cols-3 gap-3 ">
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
            <div className="bg-[#AB00CC0D] border-[1px] rounded-md border-[#AB00CC] flex flex-col gap-2 items-center justify-center py-3">
              <h1>Month to date</h1>
              <h1 className="text-[#283BBE] text-2xl font-semibold">€123456</h1>
            </div>
          </div>
          <div className="col-span-6">
            <div></div>
            <div className="border-[1px] border-[#283BBE] bg-[#E3E7FF] p-2 text-center rounded-md">
              Custom earnings <strong>€123456</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-[#1B0039]">
          Sold/rent Property list
        </h1>
        <div className="flex flex-col gap-3 bg-white p-3 rounded-md">
          <div>
            <div className=" grid max-md:grid-cols-4 max-xl:grid-cols-7 grid-cols-8 py-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
                >
                  Region
                </label>
                <div className="relative">
                  <select className="border border-[#999AA2] rounded-md px-4 py-2 w-full text-[13px] outline-none text-[#6e6e70] font-semibold appearance-none bg-transparent">
                    <option value="All">All</option>
                    <option value="All">All</option>
                    <option value="All">All</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none max-sm:hidden">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
                >
                  Type
                </label>
                <div className="relative">
                  <select className="border border-[#999AA2] rounded-md px-4 py-2 w-full text-[13px] outline-none text-[#6e6e70] font-semibold appearance-none bg-transparent">
                    <option value="All">All</option>
                    <option value="All">All</option>
                    <option value="All">All</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none max-sm:hidden ">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
                >
                  Life Style
                </label>
                <div className="relative">
                  <select className="border border-[#999AA2] rounded-md px-4 py-2 w-full text-[13px] outline-none text-[#6e6e70] font-semibold appearance-none bg-transparent">
                    <option value="All">All</option>
                    <option value="All">All</option>
                    <option value="All">All</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none max-sm:hidden">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
                >
                  Sell / Rent
                </label>
                <div className="relative">
                  <select className="border border-[#999AA2] rounded-md px-4 py-2 w-full text-[13px] outline-none text-[#6e6e70] font-semibold appearance-none bg-transparent">
                    <option value="All">All</option>
                    <option value="All">All</option>
                    <option value="All">All</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none max-sm:hidden">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 max-lg:gap-3 col-span-2 max-lg:col-span-3 max-md:col-span-2">
                <label
                  htmlFor=""
                  className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
                >
                  Price of Property
                </label>
                <div className="flex items-center gap-2 font-semibold">
                  <input type="range" name="" id="" />
                  <span className="max-sm:hidden text-[12px] text-gray-800">
                    $ 1000
                  </span>
                </div>
              </div>
              <div className="flex col-span-2 max-md:col-span-2 items-end mb-3 max-xl:col-span-6 h-full">
                <div className="border border-[#999AA2] flex px-4 py-1 items-center rounded-md w-full">
                  <MdSearch size={25} className="text-[#999AA2]" />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-1 outline-none bg-transparent"
                    placeholder="Search..."
                  />
                  <MdOutlineArrowForward size={20} className="text-[#999AA2]" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded border border-gray-300 ">
            <table className="min-w-full divide-y divide-gray-300  border-collapse ">
              <thead className="bg-[#283BBE]">
                <tr className="text-white text-sm  border-b border-gray-300">
                  <th className="text-center font-normal py-3 px-2">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="text-left font-normal py-3 px-2">
                    Property ID
                  </th>
                  <th className="text-left font-normal py-3 px-2">Title</th>
                  <th className="text-left font-normal py-3 px-2">
                    Visibility
                  </th>
                  <th className="text-left font-normal py-3 px-2">Location</th>
                  <th className="text-left font-normal py-3 px-2">
                    Area in Sq. mtrs
                  </th>
                  <th className="text-left font-normal py-3 px-2">Rooms</th>
                  <th className="text-left font-normal py-3 px-2">Price</th>
                  <th className="text-left font-normal py-3 px-2">
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((item, index) => (
                  <tr className="text-left border-y-[1px] border-gray-300 w-fit cursor-pointer hover:bg-gray-200 font-medium text-sm ">
                    <td className="text-center py-4 px-2 text-xs">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="py-4 px-2 text-xs">PI 123456</td>
                    <td className="py-4 px-2 text-xs">Property Title 1</td>
                    <td className="py-4 px-2 text-xs">
                      <span className="border-[#CA8D16] bg-[#FFC757] max-md:text-[8px] text-[10px] p-1 px-2 rounded border">
                        EXCLUSIVE
                      </span>
                    </td>
                    <td className="py-4 px-2 text-xs flex items-center gap-1">
                      <CiLocationOn /> London, UK
                    </td>
                    <td className="py-4 px-2 text-xs">1250</td>
                    <td className="py-4 px-2 text-xs">2</td>
                    <td className="py-4 px-2 text-xs">€ 12345</td>
                    <td className="py-4 px-2 text-xs">€ 123</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex xitems-center justify-center">
            <div className="flex items-center gap-1 text-xs">
              <button
                className={`px-3 py-1 border-[1px] border-[#283BBE] bg-transparent text-[#283BBE]`}
              >
                Previous
              </button>
              <button
                className={`px-3 py-1 border-[1px] border-[#283BBE] bg-[#283BBE] text-white`}
              >
                1
              </button>
              <button
                className={`px-3 py-1 border-[1px] border-[#283BBE] bg-transparent text-[#283BBE]`}
              >
                2
              </button>
              <button
                className={`px-3 py-1 border-[1px] border-[#283BBE] bg-transparent text-[#283BBE]`}
              >
                3
              </button>
              <button
                className={`px-3 py-1 border-[1px] border-[#283BBE] bg-transparent text-[#283BBE]`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
