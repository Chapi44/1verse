import React from "react";
import logo from "../../assets/img/logo/logo.png";
import social1 from "../../assets/img/SocialMidea/facebook.svg";
import social2 from "../../assets/img/SocialMidea/x.svg";
import social3 from "../../assets/img/SocialMidea/google.svg";
import social4 from "../../assets/img/SocialMidea/Instagram.svg";
export const Footer = () => {
  return (
    <div className="bg-[#000630] text-white px-[7%] py-10 flex flex-col items-center gap-10">
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col gap-3 items-start w-full">
          <img src={logo} alt="logo" className="w-[50px]" />
          <h3 className="text-3xl font-bold">1Verse</h3>
          <div className="flex items-center gap-2 w-full">
            <img src={social1} alt="Social Media" className="w-[40px]" />
            <img src={social2} alt="Social Media" className="w-[40px]" />
            <img src={social3} alt="Social Media" className="w-[40px]" />
            <img src={social4} alt="Social Media" className="w-[40px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold ">Quick Links</h1>
          <hr className="w-8 h-[3px] rounded-full bg-[#283BBE] border-none" />
          <ul className="text-xs flex flex-col gap-2 text-[#F0E3D0]">
            <li>- Home</li>
            <li>- About Us </li>
            <li>- Services</li>
            <li>- Testimonials</li>
            <li>- Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold ">Sitemap</h1>
          <hr className="w-8 h-[3px] rounded-full bg-[#283BBE] border-none" />
          <ul className="text-xs flex flex-col gap-2 text-[#F0E3D0]">
            <li>- Our Process</li>
            <li>- What We Do</li>
            <li>- Location</li>
            <li>- Sell</li>
            <li>- Purchase</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold ">Discover</h1>
          <hr className="w-8 h-[3px] rounded-full bg-[#283BBE] border-none" />
          <ul className="text-xs flex flex-col gap-2 text-[#F0E3D0]">
            <li>- Privacy Policy</li>
            <li>- Terms & Conditions</li>
            <li>- Owners</li>
            <li>- Houses</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold ">Subscribe</h1>
          <hr className="w-8 h-[3px] rounded-full bg-[#283BBE] border-none" />
          <form
            action=""
            className="flex border-[1px] border-[#283BBE] w-full rounded-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Email Address"
              className="text-sm py-2 px-2 w-3/4 outline-none bg-transparent"
            />
            <button className="bg-[#283BBE] text-[#F0E3D0] text-xs w-1/4 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="w-3/4 h-[1px] bg-[#283BBE] border-none" />
      <p className="text-[#F0E3D0] text-xs">
        Copyright © 2024 1Verse. All rights reserved.
      </p>
    </div>
  );
};
