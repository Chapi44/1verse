import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";

export const Navigation = ({
  minimize,
  setMinimize,
  drawerOpen,
  setDrawerOpen,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1000);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="bg-[#330F3E] h-[11vh] text-white flex items-center px-5 relative">
      {isMobile && (
        <GiHamburgerMenu
          className="text-white mr-5 cursor-pointer"
          size={20}
          onClick={() => setDrawerOpen(!drawerOpen)}
        />
      )}
      <h1 className={`text-2xl font-light ${minimize ? "pl-10" : ""}`}>
        Welcome back
      </h1>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-1 text-[#907C96]">
        <PiUserCircleFill size={24} />
        <span className="font-thin">Marcus</span>
        <MdOutlineKeyboardArrowDown size={20} />
      </div>
      {!isMobile && (
        <div
          className={`absolute top-[20px] left-[-14px] ${
            minimize ? "left-[14px]" : "left-[-14px]"
          } bg-white cursor-pointer w-7 h-7 rounded-full border border-[#D4C0FF] flex items-center justify-center`}
          onClick={() => setMinimize(!minimize)}
        >
          {!minimize ? (
            <MdOutlineKeyboardArrowLeft className="text-black" />
          ) : (
            <MdOutlineKeyboardArrowRight className="text-black" />
          )}
        </div>
      )}
    </div>
  );
};
