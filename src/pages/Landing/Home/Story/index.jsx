import React from "react";
import img1 from "../../../../assets/img/Story/Properties.svg";
import img2 from "../../../../assets/img/Story/Agents.svg";
import img3 from "../../../../assets/img/Story/Cities.svg";
import img4 from "../../../../assets/img/Story/Euros.svg";
const data = [
  {
    img: img1,
    header: "200+ Properties",
    body: "listed in metaverse",
  },
  {
    img: img2,
    header: "30+ Agents",
    body: "across globe",
  },
  {
    img: img3,
    header: "10+ Cities",
    body: "Presence across Italy",
  },
  {
    img: img4,
    header: "15M+ Euros",
    body: "inventory for sales",
  },
];
export const Story = () => {
  return (
    <div className="bg-[#FFE0EB] px-[7%] py-8">
      <h1 className="text-center pb-10 text-3xl text-[#FF307A] font-bold ">Numbers tell our story</h1>
      <div className="grid grid-cols-4 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <div className="flex justify-center">
              <img src={item.img} alt="story" className="w-[70%]"/>
            </div> 
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-[#283BBE] font-bold text-xl">{item.header}</h4>
              <p className="text-[#283BBE] font-normal text-base">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
