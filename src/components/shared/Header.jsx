import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border py-7 md:py-10 border-gray-200 shadow-sm bg-white rounded-3xl mb-10">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={300}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-500 mt-3 text-sm md:text-base tracking-wide my-3">
          Journalism Without Fear or Favour
        </p>

        {/* Date */}
        <p className="text-gray-700 font-medium text-sm md:text-lg">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

      </div>
    </header>
  );
};

export default Header;