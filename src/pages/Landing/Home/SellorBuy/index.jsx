import React from "react";

export const SellorBuy = () => {
  return (
    <div className="bg-[#000630] flex flex-col items-center justify-center pt-[5%] px-[7%] text-white gap-14">
      <div className="w-2/4">
        <h1 className="text-center pb-7 text-3xl font-bold">
          Want to Buy or Sell Your Property?
        </h1>
        <p className="text-center font-light text-sm pb-10">
          Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata
          sanctus est is the lorem ipsum dolor sit amet. sed diam nonumy ut
          labore et dolore s the magna aliquyam.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#283BBE] py-2 px-5 rounded-lg">
            Buying Property
          </button>
          <hr className="w-16 h-[1px] bg-[#283BBE] border-none" />
          <button className="bg-[#283BBE] py-2 px-5 rounded-lg">
            Selling Property
          </button>
        </div>
      </div>
      <hr className="w-3/4 h-[1px] bg-[#283BBE] border-none" />
    </div>
  );
};
