import React from "react";
import { BsArrows } from "react-icons/bs";
import { FaBed, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLink, MdOutlineArrowForward, MdSearch } from "react-icons/md";
import house1 from "../../../../assets/house1.jpeg";
import house2 from "../../../../assets/house2.jpg";
export const Lists = () => {
  return (
    <div className="bg-[#F6F6F8] max-h-[89vh] overflow-y-scroll py-2 px-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-[#1B0039] text-3xl font-bold">
          My Agency Listings <span className="text-[#283BBE]">20</span>
        </h1>
        <p className=" font-semibold text-lg max-sm:text-md">
          These are the properties listed by your agency - AgencyName
        </p>
        <div className="bg-white grid max-md:grid-cols-4 max-xl:grid-cols-7 grid-cols-8 px-8 py-4 gap-5 rounded-md shadow-md">
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
          <div className="flex col-span-2 max-md:col-span-2 items-end mb-3 max-xl:col-span-6 ">
            <div className="border border-[#999AA2] flex px-4 py-1 items-center rounded-md w-full">
              <MdSearch size={25} className="text-[#999AA2]" />
              <input
                type="text"
                name=""
                id=""
                className="w-full p-1 outline-none"
                placeholder="Search..."
              />
              <MdOutlineArrowForward size={20} className="text-[#999AA2]" />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="bg-white shadow-md grid  max-md:grid-cols-1 max-2xl:grid-cols-7   p-4 gap-3 rounded-md">
              <div className="  max-md:col-span-1  max-2xl:col-span-2 flex flex-col gap-2">
                <div className="grid grid-cols-3 border-[2px] border-[#283BBE] items-center rounded-md p-[1px]">
                  <span className=" text-center cursor-pointer max-md:text-[13px] text-xs">
                    Digital Twin
                  </span>
                  <span className=" text-center bg-[#283BBE] text-xs text-white rounded-md py-1 cursor-pointer max-md:text-[13px]">
                    Images
                  </span>
                  <span className=" text-center cursor-pointer max-md:text-[13px] text-xs">
                    Video(s)
                  </span>
                </div>
                <div className="w-full h-full max-h-52 overflow-hidden rounded-md">
                  <img
                    src={index % 2 === 0 ? house1 : house2}
                    alt="house"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="  max-md:col-span-1 max-2xl:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="max-md:text-sm max-lg:text-md text-lg font-bold max-sm:flex max-sm:flex-col max-sm:items-start">
                    New Red Hut House Apartments{" "}
                    <span
                      className={`max-md:text-[8px] text-[10px] p-1 px-2 rounded border ${
                        index % 2 === 0
                          ? "border-[#CA8D16] bg-[#FFC757]"
                          : "border-[#FE508E] bg-[#FE508E]"
                      } `}
                    >
                      {index % 2 === 0 ? "EXCLUSIVE" : "NETWORK"}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 text-[#283BBE] font-medium max-md:text-[9px] max-lg:text-[12px] max-sm:flex-col max-sm:items-end">
                    PI123456{" "}
                    <a
                      href=""
                      className="flex items-center gap-2 text-[#FF307A] decoration-dashed"
                    >
                      Property Link <MdLink size={20} />
                    </a>
                  </span>
                </div>
                <p className="max-md:text-[13px]">
                  Description text will appear here like this continuously in
                  one line...
                </p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
                    <FaLocationDot className="text-gray-400" /> Milan
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
                    <FaHome className="text-gray-400" /> Sell
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
                    <FaBed className="text-gray-400" /> 2 Badrooms
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
                    <BsArrows className="text-gray-400" /> 1200 Sq.Mtr
                  </span>
                </div>
                <div className="grid grid-cols-7 max-sm:flex max-sm:justify-between">
                  <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 ">
                    Type{" "}
                    <span className="text-[#283BBE] font-medium">
                      Lorem ipsum
                    </span>
                  </span>
                  <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 -ml-1 ">
                    Life Style{" "}
                    <span className="text-[#283BBE] font-medium">
                      Metropolitan
                    </span>
                  </span>
                  <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 -ml-5 max-sm:-ml-0">
                    Listed On{" "}
                    <span className="text-[#283BBE] font-medium">MM/DD/YY</span>
                  </span>
                  <span className=""></span>
                </div>
                <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px]">
                  Price{" "}
                  <span className="text-[#283BBE] font-medium">$30,000</span>
                </span>

                <div className="flex items-center justify-between max-sm:items-end">
                  <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                    <span className="bg-[#FF639A] text-white border-[#FF307A] border rounded-full px-3 py-1 max-md:text-[10px] max-2xl:text-[13px]">
                      Commission Amount{" "}
                      <span className=" font-semibold">$30,000</span>
                    </span>
                    <span className="border-[#283BBE] border rounded-full px-3 py-1 font-semibold max-md:text-[10px] max-2xl:text-[13px]">
                      <span className="text-[#283BBE]">20</span> tours completed
                      by <span className="text-[#283BBE]">16</span> Clients
                    </span>
                  </div>
                  <button
                    className="bg-[#283BBE] text-white px-5 py-1 rounded max-md:text-[10px] max-2xl:text-[13px]"
                    onClick={() =>
                      (window.location.href = `/account/agency-detail/${index}`)
                    }
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
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
  );
};
