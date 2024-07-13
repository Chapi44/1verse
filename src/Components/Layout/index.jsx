import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children, minimize, setMinimize }) => { 
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
 
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1000);
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  console.log(drawerOpen);
  return (
    <div className="grid grid-cols-12">
      <div
        className={`${!minimize ? "col-span-2" : "hidden"} ${
          !isMobile ? "col-span-2" : "hidden"
        } `}
      >
        <Sidebar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
      </div>
      <div
        className={`${!minimize ? "col-span-10" : "col-span-12"} ${
          isMobile ? "col-span-12" : "col-span-10"
        }`}
      >
        <Navigation
          setMinimize={setMinimize}
          minimize={minimize}
          setDrawerOpen={setDrawerOpen}
          drawerOpen={drawerOpen}
        />
        {children}
      </div>
    </div>
  );
};
