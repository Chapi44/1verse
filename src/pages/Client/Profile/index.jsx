import React, { useState } from "react";
import { Layout } from "../../../Components/Layout";

export const Profile = () => {
  const [minimize, setMinimize] = useState(false);
  return (
    <Layout setMinimize={setMinimize} minimize={minimize}>
      Virtual
    </Layout>
  );
};
