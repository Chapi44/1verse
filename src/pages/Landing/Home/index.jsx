import React from "react";
import { Hero } from "./Hero";
import { LandingNav } from "../../../Components/LandingNav";
import { Service } from "./Service";
import { Story } from "./Story";
import { Properties } from "./Properties";
import { Footer } from "../../../Components/Footer";
import { SellorBuy } from "./SellorBuy";

export const Home = () => {
  return (
    <div>
      <LandingNav />
      <Hero />
      <Service />
      <Story />
      <Properties />
      <SellorBuy />
      <Footer />
    </div>
  );
};
