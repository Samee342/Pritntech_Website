import React from "react";
import { Outlet } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const InfoGroup = () => (
  <div className="flex shrink-0 py-2 items-center gap-10 pr-10">
    <span className="flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-white">
      <FiPhone size={13} />
      +977 9744819231
    </span>

    <span className="flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-white">
      <FiMail size={13} />
      printech7777@gmail.com
    </span>

    <span className="whitespace-nowrap text-[13px] font-semibold text-white">
      Free Demo Available
    </span>
  </div>
);

const Layout = () => {
  return (
    <div className="min-h-screen">
      {/* Top Marquee */}
      <div className="fixed left-0 top-0 z-[60] h-10 w-full overflow-hidden bg-orange-500">
        <div className="flex items-center w-max animate-phone-marquee">
          <InfoGroup />
          <InfoGroup />
          <InfoGroup />
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed left-0 top-10 z-50 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <main className="pt-28">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
