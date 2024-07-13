import React from "react";
import { CgAdd } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { MdOutlineArrowForward, MdSearch } from "react-icons/md";
export const List = () => {
  return (
    <div className="bg-[#F6F6F8] max-h-[89vh] overflow-y-scroll py-2 px-3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h1 className="text-[#1B0039] text-3xl font-bold">
            My Clients <span className="text-[#283BBE]">210</span>
          </h1>
          <div className="flex-grow"></div>
          <button className="bg-[#FF307A] py-2 px-6 text-sm rounded text-white flex gap-1 items-center">
            <CgAdd />
            Add Client
          </button>
        </div>
        <div className="bg-white grid max-md:grid-cols-4 max-xl:grid-cols-7 grid-cols-8 px-8 py-4 gap-5 rounded-md shadow-md">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-[#999AA2] max-md:text-[10px] max-2xl:text-[13px]"
            >
              Sort by
            </label>
            <div className="relative">
              <select className="border border-[#999AA2] rounded-md px-4 py-2 w-full text-[13px] outline-none text-[#6e6e70] font-semibold appearance-none bg-transparent">
                <option value="Joined date">Joined date</option>
                <option value="Joined date">Joined date</option>
                <option value="Joined date">Joined date</option>
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
          <div className="flex col-span-2 max-md:col-span-2 items-end mb-3 max-xl:col-span-6 h-full">
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
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="bg-white shadow-md grid  max-md:grid-cols-1 max-2xl:grid-cols-7   p-4 gap-3 rounded-md">
              <div className="  max-md:col-span-1 max-2xl:col-span-7 flex flex-col gap-4">
                <div className="items-center flex">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold">Delinda Lucchesi</h4>
                    <span className="text-[#283BBE] font-semibold">CI123456</span>
                  </div>
                  <div className="flex-grow"></div>
                  <span className="text-[#283BBE] flex items-center text-xs gap-2">
                    <GrNotification />5 new messages
                  </span>
                </div>
                <div className="grid grid-cols-7 text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Email ID</span>
                    <span className="font-semibold">email@xmail.com</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Phone Number</span>
                    <span className="font-semibold">+91 9618259660</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">City</span>
                    <span className="font-semibold">Borgo Giardinetto</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Region</span>
                    <span className="font-semibold">Rovigo</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Country</span>
                    <span className="font-semibold">Italy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Client last login</span>
                    <span className="font-semibold">MM/DD/YYYY</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Client joined date</span>
                    <span className="font-semibold">MM/DD/YYYY</span>
                  </div>
                </div>
                <div className="flex items-center justify-between max-sm:items-end">
                  <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                    <span className="bg-[#FF639A] text-white border-[#FF307A] border rounded-full px-3 py-1 max-md:text-[10px] max-2xl:text-[13px]">
                      5 Property tours completed
                    </span>
                    <span className="border-[#283BBE] border rounded-full px-3 py-1 font-semibold max-md:text-[10px] max-2xl:text-[13px]">
                      <span className="text-[#283BBE]">5</span> properties
                      shortlisted
                    </span>
                  </div>
                  <button className="bg-[#283BBE] text-white px-5 py-1 rounded max-md:text-[10px] max-2xl:text-[13px]" onClick={()=>window.location.href = `/account/client-detail/${index}`}>
                    Client Details
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
