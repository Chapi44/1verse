import React, { useState } from "react";
import { Layout } from "../../../Components/Layout";
import { List } from "./List";

export const Earnings = () => {
    const [minimize ,setMinimize]= useState(false)
  return (
    <Layout setMinimize={setMinimize} minimize={minimize}>
      <List />
    </Layout>
  );
};
