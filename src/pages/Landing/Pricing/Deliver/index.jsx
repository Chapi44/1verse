import React from "react";
import { BiCheckCircle } from "react-icons/bi";

export const Deliver = () => {
  return (
    <div className="flex items-center justify-center px-[7%] py-10 bg-[#F6F6F8]">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-center pb-7 text-3xl font-bold">Pricing to deliver value for each agent</h1>
        <div className="grid grid-cols-2 w-3/4 gap-5">
          <div className="shadow-md bg-white px-5 pb-5 rounded-md pt-2 flex flex-col gap-4">
            <div className="text-center">
              <span className="bg-[#283BBE] text-white py-2 px-9 rounded">Full Service Agents</span>
            </div>
            <h1 className="text-center text-[#E400A8] text-4xl font-semibold">$100/month</h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={15} className="text-green-500"/> Monthly platform fee with unlimited property
                listings.
              </li>
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={35} className="text-green-500"/> Monthly hardware fee to provide cutting edge
                hardware (Oculus quest 3 or equivalent and 43 to 55” Smart TV
                for impactful presentations)
              </li>
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={15} className="text-green-500"/> Monthly support services fee
              </li>
            </ul>
          </div>
          <div className="shadow-md bg-white px-5 pb-5 rounded-md pt-2 flex flex-col gap-4">
            <div className="text-center">
              <span className="bg-[#20B038] text-white py-2 px-9 rounded">Buy Side Agents</span>
            </div>
            <h1 className="text-center text-[#E400A8] text-4xl font-semibold">$150/month</h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={15} className="text-green-500"/> Monthly platform fee with unlimited property
                listings.
              </li>
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={35} className="text-green-500"/> Monthly hardware fee to provide cutting edge
                hardware (Oculus quest 3 or equivalent and 43 to 55” Smart TV
                for impactful presentations)
              </li>
              <li className="flex items-start gap-1 text-sm">
                <BiCheckCircle size={15} className="text-green-500"/> Monthly support services fee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
