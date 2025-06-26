import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GlobalLoader from "../../components/Loader/GLobalLoader";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      {/* Global route loader */}
      <GlobalLoader />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
