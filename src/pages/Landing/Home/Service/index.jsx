import React from "react";
import img1 from "../../../../assets/img/service/Metaverse.png";
import img2 from "../../../../assets/img/service/Earnings.png";
import img3 from "../../../../assets/img/service/Globally.svg";
const data = [
  {
    img: img1,
    header: "Clients experience property in the Metaverse",
    body: "We provide you various environments, interactions, and activities that your clients can engage with in digital space. Clients can customise virtual properties and get a finer look of the property tailored for them",
  },
  {
    img: img2,
    header: "Clients with agents globally",
    body: "Our agents are spread across the globe to be able to market and sell virtual real estate or properties to a global audience. Through this global marketplace, sellers can reach a much larger audience than if they were limited to selling locally, potentially increasing their chances of finding buyers and getting a higher price for their virtual assets",
  },
  {
    img: img3,
    header: "Track your earnings",
    body: "By tracking their earnings, it would be possible to assess the performance and success of agents, determine commission payments, and provide insights into the overall economic activity within the metaverse.",
  },
];
export const Service = () => {
  return (
    <div className="p-[7%] flex flex-col gap-14">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-2 items-center gap-7">
          <div
            className={`w-full flex ${index%2===0?"justify-end":"justify-start"} ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <img
              src={item.img}
              alt="view"
              className="w-[90%]"
            />
          </div>
          <div className={`${index % 2 === 0 ? "order-2" : "order-1"} flex flex-col gap-3`}>
            <h1 className="text-[#FF307A] text-4xl font-semibold tracking-[0.55px]">{item.header}</h1>
            <p className="text-[#330F3E] tracking-[0.25px] leading-9">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
