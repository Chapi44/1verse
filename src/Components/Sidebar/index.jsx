import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaListUl, FaRegUserCircle } from "react-icons/fa";
import { PiNetworkDuotone } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";
import { GiProtectionGlasses } from "react-icons/gi";
import { Drawer } from "@mui/material";
import { useMatch } from "react-router-dom";

export const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
  const Agency = useMatch("/account/agency");
  const Network = useMatch("/account/network");
  const Clients = useMatch("/account/client");
  const Earnings = useMatch("/account/earnings");
  const Virtual = useMatch("/account/virtual");
  const Profile = useMatch("/account/profile");
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1000);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <>
      {!isMobile && (
        <div className="h-screen relative">
          <div className="h-[11vh] flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <nav className="py-3">
            <ul className="flex flex-col gap-2">
              <li
                className={`flex items-center ${
                  Agency ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]" : ""
                }`}
              >
                <a
                  href="/account/agency"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <FaListUl /> My Agency Listings
                </a>
              </li>
              <li
                className={`flex items-center ${
                  Network ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]" : ""
                }`}
              >
                <a
                  href="/account/network"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <PiNetworkDuotone /> Network Listings
                </a>
              </li>
              <li
                className={`flex items-center ${
                  Clients ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]" : ""
                }`}
              >
                <a
                  href="/account/client"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <TbUsers /> My Clients
                </a>
              </li>
              <li
                className={`flex items-center ${
                  Earnings
                    ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]"
                    : ""
                }`}
              >
                <a
                  href="/account/earnings"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <TfiWallet /> My Earnings
                </a>
              </li>
              <li
                className={`flex items-center ${
                  Virtual ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]" : ""
                }`}
              >
                <a
                  href="/account/virtual"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <GiProtectionGlasses /> My Virtual Tours
                </a>
              </li>
              <li
                className={`flex items-center ${
                  Profile ? "border-l-[4px] border-[#283BBE]  bg-[#E3E7FF]" : ""
                }`}
              >
                <a
                  href="/account/profile"
                  className="flex items-center gap-2 py-2 pl-9 w-full"
                >
                  <FaRegUserCircle /> My Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <>
          <div className="h-[11vh] flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <nav className="py-3">
            <ul className="flex flex-col gap-2">
              <li className="border-l-[4px] border-[#283BBE] flex items-center bg-[#E3E7FF]">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <FaListUl /> My Agency Listings
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <PiNetworkDuotone /> Network Listings
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <TbUsers /> My Clients
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <TfiWallet /> My Earnings
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <GiProtectionGlasses /> My Virtual Tours
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-5 pr-3 w-full"
                >
                  <FaRegUserCircle /> My Profile
                </a>
              </li>
            </ul>
          </nav>
        </>
      </Drawer>
    </>
  );
};
