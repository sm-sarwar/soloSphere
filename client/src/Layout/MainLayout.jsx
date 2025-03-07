import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
      <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-106px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
