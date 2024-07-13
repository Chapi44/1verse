import React from "react";
import house1 from "../../../../assets/house1.jpeg";
import house2 from "../../../../assets/house2.jpg";
import { GoCommentDiscussion } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { BsArrows } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const data = [
  {
    img: house1,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
  {
    img: house2,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
  {
    img: house2,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
  {
    img: house1,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
  {
    img: house1,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
  {
    img: house2,
    name: "New Red Hut House Apartments",
    commission: "5% Commission",
    room: "2 Rooms",
    sq: "1200 Sq.Mtr",
    milan: "Milan",
    price: "$3,000",
  },
];
export const Properties = () => {
  return (
    <div className="px-[10%] py-10">
      <h1 className=" pb-10 text-3xl text-[#FF307A] font-bold">Network Properties (500)</h1>
      <div className="grid grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <div>
              <img src={item.img} alt="house" className="rounded-xl"/>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-[#1B191B] font-bold text-sm">{item.name}</h5>
              <div className="text-xs flex items-center justify-between">
                <span className="flex items-center gap-1"><GoCommentDiscussion className="text-[#001CDD]"/>{item.commission}</span>
                <span className="flex items-center gap-1"><FaBed className="text-[#001CDD]" />{item.room}</span>
                <span className="flex items-center gap-1"><BsArrows className="text-[#001CDD]" />{item.sq}</span>
              </div>
              <span className="flex items-center gap-1"><FaLocationDot className="text-[#001CDD]" />{item.milan}</span>
              <div className="flex items-center">
                <span className="text-[#001CDD] font-bold text-xl">{item.price}</span>
                <div className="flex-grow"></div>
                <button className="bg-[#FF307A] text-white px-4 text-xs rounded-md py-2">Sell on Metaverse</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-14">
        <button className="border-[2px] border-[#283BBE] text-[#283BBE] bg-transparent px-6 py-2 rounded-lg font-bold">View All Network Properties</button>
      </div>
    </div>
  );
};
