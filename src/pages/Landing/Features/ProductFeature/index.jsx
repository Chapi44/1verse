import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCalculator, FaChartLine, FaGlobeAsia } from "react-icons/fa";
import { GiProtectionGlasses } from "react-icons/gi";
import { TiInfinityOutline } from "react-icons/ti";
import logo from "../../../../assets/img/logo/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSupportAgent } from "react-icons/md";

const data = [
  {
    icon: <GiProtectionGlasses className="text-xl text-[#283BBE]"/>,
    name: "Virtual Reality presentations",
    title:
      "A portal focused primarily on providing solutions enabling Virtual Reality presentations.",
  },
  {
    icon: <BsBuildingsFill className="text-xl text-[#283BBE]"/>,
    name: "Without a physical visit",
    title: "Show property options to clients without doing a physical visit.",
  },
  {
    icon: <TiInfinityOutline className="text-xl text-[#283BBE]"/>,
    name: "No limit",
    title: "No limit on digital twins and properties hosted per agent account.",
  },
  {
    icon: <FaChartLine className="text-xl text-[#283BBE]"/>,
    name: "Know how your peers doing",
    title: "Know how your peers are doing in your city, region and country.",
  },
  {
    icon: <FaGlobeAsia className="text-xl text-[#283BBE]"/>,
    name: "Buy around the globe",
    title:
      "Increased access to global marketplace: Buy side agents around the globe",
  },
  {
    icon: <img src={logo} alt="logo" className="w-[20px]"/>,
    name: "Support from 1verse Italia",
    title:
      "A portal focused primarily on providing solutions enabling Virtual Reality presentations.",
  },
  {
    icon: <FaCalculator className="text-xl text-[#283BBE]"/>,
    name: "Competitive pricing",
    title: "Show property options to clients without doing a physical visit.",
  },
  {
    icon: <RxDashboard className="text-xl text-[#283BBE]"/>,
    name: "Various Solutions",
    title: "No limit on digital twins and properties hosted per agent account.",
  },
  {
    icon: <MdOutlineSupportAgent className="text-xl text-[#283BBE]"/>,
    name: "Online support",
    title: "Know how your peers are doing in your city, region and country.",
  },
];

export const ProductFeature = () => {
  return (
    <div className="grid grid-cols-2 px-[7%] py-10 gap-7 bg-[#F6F6F8]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md p-4 text-xs flex flex-col gap-3"
        >
          <div className="mr-4 bg-[#E3E7FF] w-fit p-2 rounded-md">{item.icon}</div>
          <div>
            <h5 className="text-sm font-semibold">{item.name}</h5>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
