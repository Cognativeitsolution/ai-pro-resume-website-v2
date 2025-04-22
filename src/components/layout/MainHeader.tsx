"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Icons
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { FaAngleDoubleLeft, FaAngleDown, FaTimes, } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
//========== Import Images
import logo from "media/images/headerLogo.webp";
import profile from "media/images/profileicon.webp";
import coin from "media/images/dollar.webp";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen1, setIsMegaMenuOpen1] = useState(false);
    const [isMegaMenuOpen2, setIsMegaMenuOpen2] = useState(false);
    const [isMegaMenuOpen3, setIsMegaMenuOpen3] = useState(false);
    const [isMegaMenuOpen4, setIsMegaMenuOpen4] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // ========= Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // ========= MegaMenu1
    const toggleMegaMenu1 = () => {
        setIsMegaMenuOpen1(!isMegaMenuOpen1);
    };
    // ========= MegaMenu2
    const toggleMegaMenu2 = () => {
        setIsMegaMenuOpen2(!isMegaMenuOpen2);
    };
    // ========= MegaMenu1
    const toggleMegaMenu3 = () => {
        setIsMegaMenuOpen3(!isMegaMenuOpen3);
    };
    // ========= MegaMenu2
    const toggleMegaMenu4 = () => {
        setIsMegaMenuOpen4(!isMegaMenuOpen4);
    };

    return (
        <>
            <div className="container h-full">
                <nav className="w-full h-full flex items-center justify-between bg-white/90 rounded-md shadow-md px-5 md:px-8">
                    <div className="w-full lg:w-auto h-full flex flex-wrap items-center justify-between">
                        <Link
                            href="/"
                            className="h-full flex items-center cursor-pointer w-[100px] lg:w-[160px] xl:w-[180px]"
                        >
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div
                        className={`w-[80%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-zinc-800 lg:bg-transparent ${isMenuOpen
                            ? "left-0 duration-700 ease-in-out"
                            : "left-[-100%] duration-700 ease-in-out"
                            }`}
                        id="navbar-default"
                    >
                        <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-6 xl:space-x-10 rtl:space-x-reverse p-5 lg:p-0 relative lg:static">
                            <li>
                                <Link href="/" className="cursor-pointer w-[120px] lg:w-[160px] xl:w-[180px] block lg:hidden">
                                    <Image src={logo} alt="Logo" />
                                </Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center group lg:relative">
                                <Link
                                    href="javascript:;"
                                    className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMegaMenu1}
                                >
                                    <span>Tools</span>
                                    <FaAngleDown className="mt-[1px]" />
                                </Link>
                                <div
                                    className={`w-full lg:w-[230px] h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-slate-700 absolute z-10 lg:-z-10 top-0 lg:top-[102%] lg:left-[0%] lg:group-hover:top-[100%] lg:invisible group-hover:visible lg:opacity-0 group-hover:opacity-[0.97] duration-700 lg:duration-[1s] ease-in-ou ${isMegaMenuOpen1
                                        ? "left-0 duration-700 ease-in-out"
                                        : "left-[-100%]"
                                        }`}
                                >
                                    <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                        <Link
                                            href="/"
                                            className="cursor-pointer w-[120px] lg:w-[160px] xl:w-[180px] block lg:hidden"
                                        >
                                            <Image src={logo} alt="Logo" />
                                        </Link>
                                        <FaAngleDoubleLeft
                                            className="text-[30px] text-white"
                                            onClick={toggleMegaMenu1}
                                        />
                                    </div>
                                    <ul className="flex flex-col space-y-10 lg:space-y-5 w-full mb-5 lg:mb-0">
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Create a Resume
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Create a Cover Letter
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Import Resume
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lg:h-full flex lg:items-center group lg:relative">
                                <Link
                                    href="javascript:;"
                                    className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMegaMenu2}
                                >
                                    <span>Resume</span>
                                    <FaAngleDown className="mt-[1px]" />
                                </Link>
                                <div
                                    className={`w-full lg:w-[230px] h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-slate-700 absolute lg:-z-10 top-0 lg:top-[102%] lg:left-[0%] lg:group-hover:top-[100%] lg:invisible group-hover:visible lg:opacity-0 group-hover:opacity-[0.97] duration-700 lg:duration-[1s] ease-in-ou ${isMegaMenuOpen2
                                        ? "left-0 duration-700 ease-in-out"
                                        : "left-[-100%]"
                                        }`}
                                >
                                    <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                        <Link
                                            href="/"
                                            className="cursor-pointer w-[120px] lg:w-[160px] xl:w-[180px] block lg:hidden"
                                        >
                                            <Image src={logo} alt="Logo" />
                                        </Link>
                                        <FaAngleDoubleLeft
                                            className="text-[30px] text-white"
                                            onClick={toggleMegaMenu2}
                                        />
                                    </div>
                                    <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/resume-templates"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Resume Templates
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/resume-examples"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Resume Examples
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/resume-format"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Resume format
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/how-to-write-resume"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                How to write a resume
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lg:h-full flex lg:items-center group lg:relative">
                                <Link
                                    href="javascript:;"
                                    className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMegaMenu3}
                                >
                                    <span>Cover Letter</span>
                                    <FaAngleDown className="mt-[1px]" />
                                </Link>
                                <div
                                    className={`w-full lg:w-[250px] h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-slate-700 absolute z-10 lg:-z-10 top-0 lg:top-[102%] lg:left-[0%] lg:group-hover:top-[100%] lg:invisible group-hover:visible lg:opacity-0 group-hover:opacity-[0.97] duration-700 lg:duration-[1s] ease-in-ou ${isMegaMenuOpen3
                                        ? "left-0 duration-700 ease-in-out"
                                        : "left-[-100%]"
                                        }`}
                                >
                                    <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                        <Link
                                            href="/"
                                            className="cursor-pointer w-[120px] lg:w-[160px] xl:w-[180px] block lg:hidden"
                                        >
                                            <Image src={logo} alt="Logo" />
                                        </Link>
                                        <FaAngleDoubleLeft
                                            className="text-[30px] text-white"
                                            onClick={toggleMegaMenu3}
                                        />
                                    </div>
                                    <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/cover-letter-templates"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Cover Letter Templates
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/cover-letter-examples"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Cover Letter Examples
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/cover-letter-format"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Cover Letter format
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="/how-to-write-cover-letter"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                How to write a Cover Letter
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lg:h-full flex lg:items-center group lg:relative">
                                <Link
                                    href="javascript:;"
                                    className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMegaMenu4}
                                >
                                    <span>Blogs</span>
                                    <FaAngleDown className="mt-[1px]" />
                                </Link>
                                <div
                                    className={`w-full lg:w-[230px] h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-slate-700 absolute lg:-z-10 top-0 lg:top-[102%] lg:left-[0%] lg:group-hover:top-[100%] lg:invisible group-hover:visible lg:opacity-0 group-hover:opacity-[0.97] duration-700 lg:duration-[1s] ease-in-ou ${isMegaMenuOpen4
                                        ? "left-0 duration-700 ease-in-out"
                                        : "left-[-100%]"
                                        }`}
                                >
                                    <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                        <Link
                                            href="/"
                                            className="cursor-pointer w-[120px] lg:w-[160px] xl:w-[180px] block lg:hidden"
                                        >
                                            <Image src={logo} alt="Logo" />
                                        </Link>
                                        <FaAngleDoubleLeft
                                            className="text-[30px] text-white"
                                            onClick={toggleMegaMenu4}
                                        />
                                    </div>
                                    <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Blog 1
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Blog 2
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link
                                                href="javascript:;"
                                                className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2"
                                                onClick={toggleMenu}
                                            >
                                                <FaTimes className="text-[20px]" />
                                                Blog 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link
                                    href="/services"
                                    className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMenu}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="lg:h-full flex lg:items-center">
                                <Link
                                    href="/pricing"
                                    className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                    onClick={toggleMenu}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <ol className="w-full h-full flex flex-col space-y-10 lg:hidden">
                                <li>
                                    <Link
                                        href="/profile"
                                        className="text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                        onClick={toggleMenu}
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"
                                        onClick={toggleMenu}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/login"}
                                        onClick={() => { console.log("Logout clicked"); toggleMenu(); }}
                                        className="text-[20px] lg:text-[16px] font-medium text-white lg:text-black hover:text-primary-100"

                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ol>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {/* profile */}
                        <div className="hidden lg:block relative text-left">
                            {/* Profile + Dropdown Icon */}
                            <div
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => setIsOpen((prev) => !prev)}
                            >
                                <div className="w-[25px]">
                                    <Image src={profile} alt="profile_icon" />
                                </div>
                                <IoMdArrowDropdown
                                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-dropdown"
                                >
                                    <div className="py-2 text-sm text-gray-700">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 font-semibold"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/dashboard"
                                            className="block px-4 py-2 font-semibold"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={"/login"}
                                            onClick={() => console.log("Logout clicked")}
                                            className="block px-4 py-2 font-semibold"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* cart */}
                        <div className="relative">
                            <span className="flex items-center justify-center w-[20px] h-[20px] absolute top-[-10px] right-[-10px] bg-white text-hamzaPrimary rounded-full text-xs border border-hamzaPrimary font-semibold">
                                10
                            </span>
                            <BsCart2
                                className="text-hamzaPrimary text-md cursor-pointer"
                                size={25}
                            />
                        </div>

                        {/* coin */}
                        <div className="relative cursor-pointer">
                            <div
                                style={{ minHeight: "20px", minWidth: "20px" }}
                                className="select-none absolute max-h-8 max-w-8 text-primary font-bold flex justify-center items-center text-xs top-[-10px] right-[-10px] bg-white text-hamzaPrimary rounded-full shadow-lg border border-hamzaPrimary"
                            >
                                10
                            </div>
                            <Link href={"/packages#coins_purchase"}>
                                <div className="w-[25px] cursor-pointer">
                                    <Image src={coin} alt="Coin" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="block lg:hidden w-max-9 ml-5">
                        {isMenuOpen ? (
                            <IoMdClose
                                className="text-[30px] cursor-pointer"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <HiBars3
                                className="text-[30px] cursor-pointer"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainHeader