import React from "react";
import img1 from "../../../../../assets/house1.jpeg";
import img2 from "../../../../../assets/house2.jpg";
import plan from "../../../../../assets/plan.png";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationDot,
} from "react-icons/fa6";
import { FaBed, FaHome, FaUsers } from "react-icons/fa";
import { BsArrows, BsShare } from "react-icons/bs";
import { HiSaveAs } from "react-icons/hi";
import { MdBathroom } from "react-icons/md";
import { GiProtectionGlasses } from "react-icons/gi";
import { RxLoop } from "react-icons/rx";
import { FiLoader } from "react-icons/fi";
export const View = () => {
  return (
    <div className="px-[6%] py-10 bg-[#F6F6F8] flex flex-col gap-4">
      <div className="grid grid-cols-10 gap-6 items-start">
        <div className="col-span-7 flex flex-col gap-4 ">
          <div className="h-[70vh] w-full">
            <img
              src={img1}
              alt="house"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="bg-white p-2 px-4 rounded">
              <div className="grid grid-cols-3 border-[2px] border-[#283BBE] items-center rounded-md p-[1px] w-[250px] ">
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
            </div>
            <div className="flex items-center gap-[1px]">
              <span className="p-3 bg-white cursor-pointer">
                <FaArrowLeftLong />
              </span>
              <span className="p-3 bg-white cursor-pointer">
                <FaArrowRightLong />
              </span>
              <span className="p-3 bg-white cursor-pointer">
                <HiSaveAs />
              </span>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <h1 className="text-[#FF307A] font-semibold text-xl">
              Description
            </h1>
            <p className="text-sm">
              Gorgeous traditional home located in Beverlywood neighborhood.
              This exquisite home features 6 bedrooms, 5.5 bathrooms and has a
              welcoming open floor plan, perfect for family and entertaining.
              The gourmet kitchen is complete with top of the line appliances
              with double ovens, custom cabinets, butler's pantry, designer
              light fixtures and an oversized marble Waterfall Center Island.
              Adjacent family room opens to a large yard with a sparkling
              swimming pool and Jacuzzi, built-in BBQ, perfect...
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3 py-3">
            <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
              <FaHome className="text-gray-400" /> Sell
            </span>
            <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
              <FaBed className="text-gray-400" /> 2 Badrooms
            </span>
            <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
              <MdBathroom className="text-gray-400" /> 2 Bathrooms
            </span>
            <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[10px] max-2xl:text-[13px]">
              <BsArrows className="text-gray-400" /> 1200 Sq.Mtr
            </span>
            <span className="text-gray-400 max-2xl:text-[13px]">
              Type{" "}
              <span className="text-[#283BBE] font-medium">Lorem ipsum</span>
            </span>
            <span className="text-gray-400 max-2xl:text-[13px]">
              Life Style{" "}
              <span className="text-[#283BBE] font-medium">Metropolitan</span>
            </span>
            <span className="text-gray-400 max-2xl:text-[13px] col-span-2">
              Listed On{" "}
              <span className="text-[#283BBE] font-medium">MM/DD/YY</span>
            </span>
            <span className="text-gray-400 max-2xl:text-[13px]">
              Country <span className="text-[#283BBE] font-medium">Italy</span>
            </span>
            <span className="text-gray-400 max-2xl:text-[13px]">
              City <span className="text-[#283BBE] font-medium">Chianche</span>
            </span>
            <span className="text-gray-400 max-2xl:text-[13px] col-span-2">
              Region <span className="text-[#283BBE] font-medium">West</span>
            </span>
          </div>
          <div className="bg-white pt-3 flex flex-col gap-4 rounded mb-6">
            <h1 className="text-[#FF307A] font-semibold text-xl px-5">
              Location
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15762.411164781402!2d38.74740455!3d9.00864745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1720697346820!5m2!1sen!2set"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-white flex flex-col gap-4">
            <div className="flex items-center px-5 py-3">
              <h1 className="text-[#FF307A] font-semibold text-xl ">
                Floor plan
              </h1>
              <div className="flex-grow"></div>
              <button className="border-[1px] border-[#7E41FF] text-[#7E41FF] text-xs px-4 py-1 rounded">
                Matterport PDF
              </button>
            </div>
            <hr className="w-1/3 h-[1px] border-none bg-gray-400 " />
            <div className="w-full h-[80vh] p-3">
              <img
                src={plan}
                alt="plan"
                className="px-5 w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4 py-3">
            <h1 className="text-[#FF307A] font-semibold text-xl px-5">
              Other Features
            </h1>
            <hr className="w-1/3 h-[1px] border-none bg-gray-400 " />
            <div className="grid grid-cols-3 px-5 text-sm gap-3">
              <span>
                Year Built: <strong>1981</strong>
              </span>
              <span>
                Floor: <strong>3 out 6 floor</strong>
              </span>
              <span>
                Parking Spaces: <strong>2</strong>
              </span>
              <span>
                Lift: <strong>Available</strong>
              </span>
              <span>
                HOA/Maintenance Fee: <strong>$345</strong>
              </span>
              <span>
                Energy efficiency: <strong>5 Star</strong>
              </span>
              <span>
                Heating: <strong>Available</strong>
              </span>
              <span>
                Fee Frequency: <strong>Monthly</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white p-4 flex flex-col gap-3 relative text-xs">
          <h1 className="text-base font-bold pt-3">New Red Hut House Apartments</h1>
          <p className="text-[#001CDD] font-semibold">PI123456</p>
          <div className="flex items-center text-[#FF307A] font-semibold text-lg">
            <span className="flex items-center gap-2">
              <GiProtectionGlasses /> Open in VR
            </span>
            <div className="flex-grow"></div>
            <span className="flex items-center gap-2">
              <BsShare /> Property Link
            </span>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
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
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-xs">Total price</span>
              <span className="text-[#001CDD] text-base font-bold">€1,749,000</span>
            </div>
            <div className="flex-grow"></div>
            <p className="bg-[#FF639A] p-1 px-3 text-white rounded-full">
              Commission<strong> $30,000</strong>
            </p>
          </div>
          <hr />
          <h1 className="text-center text-sm font-semibold">Go Tour This Home</h1>
          <div className="flex flex-col gap-2">
            <h1>Select date</h1>
            <form action="" className="grid grid-cols-3 gap-3">
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Select time</h1>
            <form action="" className="grid grid-cols-3 gap-3">
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
              <input type="date" name="" id="" className="border-[1px] p-1 border-[#001CDD] rounded"/>
            </form>
          </div>
          <button className="bg-[#001CDD] text-white py-3 rounded">Schedule tour</button>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1">
              <GiProtectionGlasses className="text-gray-400"/> <strong>20 </strong>Tours
            </span>
            <span className="flex items-center gap-1">
              <FaUsers className="text-gray-400"/>
              <strong>16 </strong>Clients
            </span>
          </div>
          <hr />
          <div className="flex items-center">
            <p className="flex items-center gap-1">
              <RxLoop className="text-gray-400"/>
              Updated 2 days ago
            </p>
            <div className="flex-grow"></div>
            <button className="border-[1px] px-4 py-1 rounded-md  bg-transparent border-[#001CDD] text-[#001CDD]">Add to shortlist</button>
          </div>
          <div className="border-[#CA8D16] bg-[#FFC757] max-md:text-[8px] text-[10px] p-1 px-2 rounded border absolute top-0 right-0 ">
            EXCLUSIVE
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-4">
        <h1 className="text-[#FF307A] text-3xl font-bold">
          Nearby Similar Homes
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((item, index) => (
            <div>
              <div className="w-full h-[30vh] overflow-hidden ">
                <img
                  src={index % 2 === 0 ? img2 : img1}
                  alt="house"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-3 py-2">
                <h1 className="text-sm font-bold">
                  New Red Hut House Apartments
                </h1>
                <div className="grid grid-cols-3 text-xs gap-1">
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[8px] max-2xl:text-[10px]">
                    <FaHome className="text-gray-400" /> 5% Commission
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[8px] max-2xl:text-[10px]">
                    <FaBed className="text-gray-400" /> 2 Badrooms
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[8px] max-2xl:text-[10px]">
                    <BsArrows className="text-gray-400" /> 1200 Sq.Mtr
                  </span>
                  <span className="flex items-center gap-2 text-[#283BBE] font-medium max-md:text-[8px] max-2xl:text-[10px]">
                    <FaLocationDot className="text-gray-400" /> Milan
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#001CDD]">
                    $3,000
                  </span>
                  <button className="bg-[#FF307A] py-2 px-4 text-xs rounded text-white ">
                    Sell on Metaverse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-7">
          <button className="flex items-center gap-1 border-[1px] px-6 py-2 rounded-md  bg-transparent border-[#001CDD] text-[#001CDD]">
            <FiLoader /> Load more
          </button>
        </div>
      </div>
    </div>
  );
};
