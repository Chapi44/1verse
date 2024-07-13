import React, { useState } from "react";
import { Layout } from "../../../Components/Layout";
import { Lists } from "./Lists";

export const Agency = () => {
  const [minimize ,setMinimize]= useState(false)
  return (
    <Layout setMinimize={setMinimize} minimize={minimize}>
      <Lists />
    </Layout>
  );
};
