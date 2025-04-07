"use client";

import Image from "next/image";
import React, { useState } from "react";
import headerLogo from "/public/images/headerLogo.svg";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import profile from "/public/images/profileicon.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Tools", link: "#", dropdown: true },
    { name: "Resume", link: "#", dropdown: true },
    { name: "Cover Letter", link: "#", dropdown: true },
    { name: "Blogs", link: "#", dropdown: true },
    { name: "Services", link: "#" },
    { name: "Pricing", link: "#" },
  ];

  return (
    <>
      <header className="mt-0 sm:mt-10 absolute z-20 w-full">
        <div className="container flex justify-between items-center bg-white backdrop-blur-xl p-4 shadow-lg rounded-md h-full">
          {/* logo */}
          <Link href={"/"} className="flex">
            <Image
              src={headerLogo}
              alt="header_logo"
              className="w-[80px] sm:w-[140px] h-[30px] sm:h-[50px]"
            />
          </Link>

          {/* desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-[20px] lg:gap-[35px] xl:gap-[80px] h-full">
            {navItems.map((item) => (
              <ul key={item.name} className="relative group h-full">
                <li className="flex items-center gap-1 text-sm text-black font-semibold hover:text-purple-600 cursor-pointer h-full">
                  <Link className="h-full" href={item.link}>
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown size={16} className="mt-0.5" />
                  )}
                </li>
                {item.dropdown && (
                  <div className="absolute text-sm text-black font-semibold left-0 hidden group-hover:block bg-white shadow rounded-md p-2 w-40 z-10">
                    <Link
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-100"
                    >
                      Option 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-100"
                    >
                      Option 2
                    </Link>
                  </div>
                )}
              </ul>
            ))}
          </nav>

          {/* dashboard button and profile icon */}
          <div className="flex items-center justify-center gap-3">
            <Link href="/dashboard">
              <button className="bg-[#9885FF] text-white text-xs sm:text-sm px-2 sm:px-4 py-2 rounded hover:bg-[#8A72DF] transition">
                My Dashboard
              </button>
            </Link>
            <Image src={profile} alt="profile_icon" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="container bg-white lg:hidden mt-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.link}
                  className="block text-md font-semibold text-black"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link href="#" className="block text-sm text-gray-600">
                      Option 1
                    </Link>
                    <Link href="#" className="block text-sm text-gray-600">
                      Option 2
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
