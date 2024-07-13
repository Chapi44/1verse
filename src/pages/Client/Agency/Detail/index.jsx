import React, { useState } from "react";
import { Layout } from "../../../../Components/Layout";
import { View } from "./View";
import { Footer } from "../../../../Components/Footer";
import { SellorBuy } from "../../../Landing/Home/SellorBuy";

export const AgencyDetail = () => {
    const [minimize ,setMinimize]= useState(true)
  return (
    <div>
      <Layout setMinimize={setMinimize} minimize={minimize}>
        <View />
      </Layout>
      <SellorBuy />
      <Footer />
    </div>
  );
};
