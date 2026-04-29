import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="relative overflow-hidden border-b border-gray-200 bg-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-10">

        {/* Top Bar */}
        <div className="flex justify-between items-center text-xs md:text-sm text-gray-500">
          <p className="tracking-wide font-medium">
            Independent Journalism Since 2025
          </p>
          <p>{today}</p>
        </div>

        {/* Center Brand */}
        <div className="flex flex-col items-center mt-8">

          <Image
            src={logo}
            alt="Logo"
            width={300}
            height={120}
            priority
            className="transition duration-500 hover:scale-105"
          />

          <p className="mt-5 text-gray-600 uppercase tracking-[0.35em] text-xs md:text-sm text-center">
            Journalism Without Fear or Favour
          </p>

          {/* Elegant Divider */}
          <div className="mt-6 flex items-center gap-4">
            <span className="w-16 h-[1px] bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="w-16 h-[1px] bg-gray-300"></span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;