import React, { useState } from "react";
import { BsArrows, BsWhatsapp } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { FaBed, FaCheckCircle, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdEmail,
  MdEmojiEmotions,
  MdLink,
  MdOutlineArrowForward,
  MdSearch,
} from "react-icons/md";
import house1 from "../../../../../assets/house1.jpeg";
import house2 from "../../../../../assets/house2.jpg";
import { Modal } from "../../../../../Components/Model";
import { CiLocationOn } from "react-icons/ci";
import { GrMore } from "react-icons/gr";
import { IoIosAdd, IoMdSend } from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";
export const View = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisplay, setIsDisplay] = useState(0);
  return (
    <div className="bg-[#F6F6F8] px-[7%] py-10 flex flex-col gap-6 min-h-[89vh]">
      <div className="bg-white p-3 flex flex-col gap-3 rounded-md">
        <div className="flex gap-5 items-end">
          <span className="text-[#1B0039] text-2xl font-bold">
            Delinda Lucchesi
          </span>
          <span className="text-[#283BBE] font-medium">CI123456</span>
        </div>
        <div className="grid grid-cols-5 gap-3 text-xs items-center">
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
          <span className="bg-[#FF639A] text-white text-center border-[#FF307A] border rounded-full px-3 py-1 max-md:text-[10px] max-2xl:text-[13px]">
            5 Property tours completed
          </span>
          <span className="border-[#283BBE] border text-center rounded-full px-3 py-1 font-semibold max-md:text-[10px] max-2xl:text-[13px]">
            <span className="text-[#283BBE]">5</span> properties shortlisted
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex gap-3">
          <span
            className={`cursor-pointer rounded-t-md py-1 px-3 ${
              isDisplay === 0
                ? "bg-[#283BBE] text-white "
                : "text-[#283BBE] bg-white"
            }`}
            onClick={() => setIsDisplay(0)}
          >
            Client Property shortlist (5)
          </span>
          <span
            className={`cursor-pointer rounded-t-md py-1 px-20 ${
              isDisplay === 1
                ? "bg-[#283BBE] text-white"
                : "text-[#283BBE]  bg-white"
            }`}
            onClick={() => setIsDisplay(1)}
          >
            Client Purchases
          </span>
          <span
            className={`cursor-pointer rounded-t-md py-1 px-20 ${
              isDisplay === 2
                ? "bg-[#283BBE] text-white"
                : "text-[#283BBE] bg-white"
            }`}
            onClick={() => setIsDisplay(2)}
          >
            Client Messages
          </span>
        </div>
        {isDisplay === 0 && (
          <div className="bg-white p-3 flex flex-col gap-3 rounded-md w-full">
            <div className="flex items-end justify-end">
              <button
                className="bg-[#FF307A] py-2 px-6 text-sm rounded text-white flex gap-1 items-center"
                onClick={() => setIsModalOpen(true)}
              >
                <CgAdd /> Add property to shortlist
              </button>
            </div>
            <div className="grid gap-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="bg-white shadow-md grid  max-md:grid-cols-1 max-2xl:grid-cols-7 p-4 gap-5 rounded-md">
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
                    <div className="w-full h-[25vh] max-h-52 overflow-hidden rounded-md">
                      <img
                        src={index % 2 === 0 ? house1 : house2}
                        alt="house"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="  max-md:col-span-1 max-2xl:col-span-5 flex flex-col gap-2">
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
                      Description text will appear here like this continuously
                      in one line...
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
                        <span className="text-[#283BBE] font-medium">
                          MM/DD/YY
                        </span>
                      </span>
                      <span className=""></span>
                    </div>
                    <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px]">
                      Price{" "}
                      <span className="text-[#283BBE] font-medium">
                        $30,000
                      </span>
                    </span>

                    <div className="flex items-center justify-between max-sm:items-end">
                      <div></div>
                      <div className="flex items-center gap-3">
                        <button className="border-[#EC0000] border-[1px] text-[#EC0000] px-5 py-1 rounded max-md:text-[10px] max-2xl:text-[13px]">
                          Remove from shortlist
                        </button>
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
        )}
        {isDisplay === 1 && (
          // <div className="bg-white p-3 flex flex-col gap-3 rounded-b-md w-full min-h-[60vh] items-center justify-center">
          //   <BsCart4 className="text-[#283BBE] text-[7rem]" />
          //   <h1 className="text-2xl text-[#283BBE] font-semibold">There are no purchases available, </h1>
          //   <span className="text-[#FF307A] text-xl font-semibold">Purchase your dream house now!</span>
          // </div>
          <div className="bg-white p-3 flex flex-col gap-3 rounded-md w-full">
            <div className="grid gap-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="bg-white shadow-md grid  max-md:grid-cols-1 max-2xl:grid-cols-7 p-4 gap-5 rounded-md">
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
                    <div className="w-full h-[25vh] max-h-52 overflow-hidden rounded-md">
                      <img
                        src={index % 2 === 0 ? house1 : house2}
                        alt="house"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="  max-md:col-span-1 max-2xl:col-span-5 flex flex-col gap-2">
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
                      Description text will appear here like this continuously
                      in one line...
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
                      <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 flex items-center gap-2">
                        Property viewed{" "}
                        <span className="text-[#283BBE] font-medium flex items-center gap-1">
                          <FaCheckCircle className="text-green-700" /> Yes
                        </span>
                      </span>
                      <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 -ml-1 flex items-center gap-2">
                        Metaverse demo{" "}
                        <span className="text-[#283BBE] font-medium flex items-center gap-1">
                          <FaCheckCircle className="text-green-700" /> Yes, 2
                          times
                        </span>
                      </span>
                      <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px] col-span-2 -ml-5 max-sm:-ml-0">
                        Purchased On{" "}
                        <span className="text-[#283BBE] font-medium">
                          MM/DD/YY
                        </span>
                      </span>
                      <span className=""></span>
                    </div>
                    <span className="text-gray-400 max-md:text-[10px] max-2xl:text-[13px]">
                      Price{" "}
                      <span className="text-[#283BBE] font-medium">
                        $30,000
                      </span>
                    </span>

                    <div className="flex items-center justify-between max-sm:items-end">
                      <div>
                        <p>
                          Purchase Price{" "}
                          <strong className="text-[#283BBE]">$27,500</strong>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
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
        )}
        {isDisplay === 2 && (
          <div className="bg-white p-3 flex flex-col gap-3 rounded-b-md w-full">
            <div className="grid grid-cols-12 w-full min-h-[80vh] shadow-md">
              <div className="col-span-3 h-full bg-[#F0F0FB] p-2 flex flex-col gap-4">
                <div className="flex items-center bg-[#ededfa] relative p-2 rounded gap-1">
                  <MdSearch className="text-gray-400" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Find people and conversations"
                    className="outline-none bg-transparent"
                  />
                  <div className="bg-[#283BBE] p-1 rounded-full text-white absolute -bottom-1 right-0">
                    <IoIosAdd className="text-white" />
                  </div>
                </div>
                <div className="text-xs flex items-center gap-2 ">
                  <span>Recent</span>
                  <span>Unread</span>
                </div>
                <div className="flex items-center">
                  <hr className="border-b-[1px] border-[#283BBE] w-10" />
                  <hr className="w-full" />
                </div>
                <div className="flex flex-col gap-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      className={`flex items-start gap-1 w-full p-1 ${
                        index === 0 ? "bg-[#ededfa]" : ""
                      }`}
                    >
                      <div className="w-[40px] h-[40px] rounded-full bg-slate-300 relative">
                        <RiRadioButtonLine
                          className="text-green-700 absolute right-0 bottom-0"
                          size={12}
                        />
                      </div>
                      <div className="flex items-center justify-between w-full text-xs">
                        <div className="flex flex-col gap-1">
                          <h5 className="font-semibold">Michael Wong</h5>
                          <span className="text-[#9095A4]">
                            Yeah, we all loved it!
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                          <GrMore />
                          <span className="text-[#9095A4] text-[10px]">
                            7:47 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-9 flex flex-col gap-3 relative">
                <div className="px-3 py-2 text-xs text-gray-400">
                  <h5 className="flex items-center gap-5">
                    Michael Wong{" "}
                    <RiRadioButtonLine className="text-green-700 " size={12} />
                  </h5>
                </div>
                <hr />
                <div className="max-h-[61vh] overflow-y-scroll">
                  <div className="text-xs flex flex-col gap-2 w-fit text-[#9095A4] p-2">
                    <p>Yesterday, 8:19 PM</p>
                    <h5 className="bg-[#F0F0FB] p-2 rounded-md">
                      I thought this would be an awesome way to interact with
                      the interface.
                    </h5>
                  </div>
                  <div className="text-xs flex flex-col gap-2 items-end text-[#9095A4] p-2">
                    <div className="flex items-center gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-slate-300 relative">
                        <RiRadioButtonLine
                          className="text-green-700 absolute right-0 bottom-0"
                          size={12}
                        />
                      </div>
                      <div className="w-fit flex flex-col gap-2">
                        <p>Michael Wong, Yesterday 8:20 PM</p>
                        <h5 className="bg-[#283BBE] text-white p-2 rounded-md">
                          I agree! It definitely produces a better user
                          experience.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9095A4]">
                    <hr className="w-full" />
                    <span>Today</span>
                    <hr className="w-full" />
                  </div>

                  <div className="text-xs flex flex-col gap-2 w-fit text-[#9095A4] p-2">
                    <p>7:40 PM</p>
                    <h5 className="bg-[#F0F0FB] p-2 rounded-md">
                      Did you get that awesomesauce I sent?
                    </h5>
                  </div>
                  <div className="text-xs flex flex-col gap-2 items-end text-[#9095A4] p-2">
                    <div className="flex items-start gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-slate-300 relative">
                        <RiRadioButtonLine
                          className="text-green-700 absolute right-0 bottom-0"
                          size={12}
                        />
                      </div>
                      <div className="w-fit flex flex-col gap-2">
                        <p>Michael Wong, 7:46 PM</p>
                        <div className="flex items-end flex-col gap-2">
                          <h5 className="bg-[#283BBE] text-white p-2 rounded-md">
                            I did, our whole team rubbed it allll over their
                            bread.
                          </h5>
                          <h5 className="bg-[#283BBE] text-white p-2 rounded-md">
                            It was delicious!
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs flex flex-col gap-2 w-fit text-[#9095A4] p-2">
                    <p>7:47 PM</p>
                    <h5 className="bg-[#F0F0FB] p-2 rounded-md">Awesome!</h5>
                  </div>
                  <div className="text-xs flex flex-col gap-2 items-end text-[#9095A4] p-2">
                    <div className="flex items-start gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-slate-300 relative">
                        <RiRadioButtonLine
                          className="text-green-700 absolute right-0 bottom-0"
                          size={12}
                        />
                      </div>
                      <div className="w-fit flex flex-col gap-2">
                        <p>Michael Wong, 7:48 PM</p>
                        <h5 className="bg-[#283BBE] text-white p-2 rounded-md">
                          Yeah, we all loved it!
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 w-full text-xs flex items-center flex-col gap-3 p-2 ">
                  <span>Michael Wong is typing ...</span>
                  <hr className="w-full" />
                  <div className="flex items-center bg-[#F0F0FB] w-full gap-2 rounded-md px-2">
                    <input
                      type="text"
                      placeholder="Message Michael"
                      className="bg-transparent w-full p-3 outline-none"
                    />
                    <IoMdSend size={25} />
                    <MdEmojiEmotions size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[#FF307A] font-semibold">
              Client Property shortlist
            </h1>
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
                    className="w-full p-1 outline-none"
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
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#283BBE] flex gap-2 text-white items-center text-sm py-2 px-7 rounded-md">
              <MdEmail size={23} />
              Save & Send via Email
            </button>
            <button className="bg-[#60D66A] flex gap-2 text-white items-center text-sm py-2 px-7 rounded-md">
              <BsWhatsapp size={23} />
              Save & Send via Whatsapp
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
