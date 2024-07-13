import React from "react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#000525] via-[#000B56] to-[#000F76] text-white h-[89vh] relative">
      <div className="bg-[#FF307A] w-fit max-w-[40%] min-w-[40%] py-10 px-16 rounded-r-[30px] flex flex-col gap-5 absolute top-12 left-0">
        <h1 className="text-4xl font-semibold text-[#330F3E]">
          Sell local <br /> properties globally
        </h1>
        <h1 className="text-6xl font-semibold">in metaverse</h1>
      </div>
      <div className="flex items-end justify-end">
        <div className="h-[84vh] w-2/3 bg-[#CDCDCD] rounded-l-[30px]"></div>
      </div>
    </div>
  );
};
