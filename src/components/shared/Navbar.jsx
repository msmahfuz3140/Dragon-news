"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import userIcon from "@/assets/user.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-lg font-bold text-gray-800 tracking-wide">
            DRAGON
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">

            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition ${isActive
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                    }`}
                >
                  {link.label}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
                  )}
                </Link>
              );
            })}

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Image
              src={userIcon}
              alt="User"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />

            <Link href="/login">
              <button className="hidden sm:block bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 py-4 border-t text-gray-700 font-medium">

            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition ${isActive ? "text-black font-semibold" : "text-gray-600"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <button className="bg-gray-900 text-white px-4 py-2 rounded-full w-fit">
              Login
            </button>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;