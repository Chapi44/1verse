import React from "react";
import logo from "../../assets/Image 11.png";
import flag from "../../assets/flag.svg";
import { useMatch } from "react-router-dom";
export const LandingNav = () => {
  const product = useMatch("/product-features");
  const pricing = useMatch("/pricing");
  const sell = useMatch("/sell-with-us");
  const about = useMatch("/about-us");
  return (
    <div className="h-[11vh] flex items-center gap-3 justify-center min-w-full bg-[#000525] text-white">
      <div className="flex items-center gap-10">
        <div
          className=" w-[135px] cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img src={logo} alt="logo" className="" />
        </div>
        <ul className="flex items-center gap-6 text-gray-300">
          <li>
            <a
              href="/product-features"
              className={`${product ? "text-[#FF307A]" : ""}`}
            >
              Product Features{" "}
            </a>
          </li>
          <li>
            <a href="/pricing" className={`${pricing ? "text-[#FF307A]" : ""}`}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/sell-with-us" className={`${sell ? "text-[#FF307A]" : ""}`}>
              Sell with us
            </a>
          </li>
          <li>
            <a href="/about-us" className={`${about ? "text-[#FF307A]" : ""}`}>
              {" "}
              About us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 border-[1px] border-white p-[6px] rounded-md text-xs">
            <img src={flag} alt="flag" className="w-[10px] h-[10px]" />
            <hr className="w-[1px] h-5 bg-white" />
            <select
              name=""
              id=""
              className="bg-transparent text-gray-300 outline-none"
            >
              <option value="En">English</option>
              <option value="In">Indian</option>
            </select>
          </div>
          <button
            className="bg-[#FF307A] py-[6px] px-6 text-white rounded-md hover:bg-[#FF307A70] hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => (window.location.href = "/account/login")}
          >
            Agent Login
          </button>
        </div>
      </div>
    </div>
  );
};
