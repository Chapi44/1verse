import React from "react";
import { FaChartLine, FaGlobeAsia, FaUserTie } from "react-icons/fa";
import { GiProtectionGlasses } from "react-icons/gi";
import { RiNumber1 } from "react-icons/ri";
import { TiInfinityOutline } from "react-icons/ti";
const data = [
  {
    icon: <FaGlobeAsia className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
  {
    icon: <FaChartLine className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
  {
    icon: <TiInfinityOutline className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
  {
    icon: <GiProtectionGlasses className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
  {
    icon: <RiNumber1 className="text-2xl text-[#283BBE]" />,
    name: "Access to Global markets",
    title:
      "Access to Global markets through our global Buy side agent network.",
  },
];
export const Sell = () => {
  return (
    <div className="grid grid-cols-3 px-[7%] py-10 bg-[#F6F6F8] gap-7">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow p-3 flex flex-col items-center gap-2">
          <div className="mr-4 bg-[#E3E7FF] w-fit p-2 rounded-md">{item.icon}</div>
          <div className="flex flex-col items-center gap-2 text-xs">
            <h4 className="text-sm font-semibold">{item.name}</h4>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
