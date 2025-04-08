import Image from "next/image";
import React from "react";

import banner from "/public/images/banner.svg";
import headerTemp from "/public/images/header-template.svg";
import robo_1 from "/public/images/robo_1.svg";
import robo_2 from "/public/images/robo_2.svg";
import improveText from "/public/images/header-improvetext.svg";

const Banner = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-none h-full flex items-start justify-center pb-6">
        <div className="container flex flex-col items-center justify-between mt-[90px] sm:mt-[150px]">
          <p className="font-semibold text-[25px] md:text-[56px] w-full sm:w-[75%] text-center leading-[30px] md:leading-[65px]">
            Let AI Build the Resume That Builds Your Career
          </p>
          <p className="font-normal text-[18px] md:text-[24px] mt-3 w-full sm:w-[55%] text-center">
            Easy to use templates, AI Powered Suggestions, and one click
            download.
          </p>
          {/* buttons */}
          <div className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-5 sm:gap-10 mt-5">
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] rounded-md bg-primary text-white">
              Create Resume
            </button>
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] border border-[#9885FF] rounded-md hover:text-[#9885FF] transition">
              Import Resume
            </button>
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] border border-black hover:border-[#79A9FF] rounded-md hover:text-[#79A9FF] transition">
              ATS Checker
            </button>
          </div>

          {/* image section */}
          <div className="relative w-full flex justify-center items-center py-10 overflow-hidden">
            {/* Main laptop mockup */}
            <Image
              src={banner}
              alt="Laptop"
              className="z-10 w-[90%] max-w-[800px]"
            />

            {/* Robot on left */}
            <Image
              src={robo_1}
              alt="Robot Left"
              className="absolute z-20
      w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px]
      top-2 left-4
      sm:top-4 sm:left-10
      md:top-6 md:left-20
      lg:top-4 lg:left-32
      xl:top-4 xl:left-56"
            />

            {/* Robot on right */}
            <Image
              src={robo_2}
              alt="Robot Right"
              className="absolute z-20
      w-[50px] sm:w-[70px] md:w-[100px] lg:w-[120px] xl:w-[140px]
      bottom-4 right-4
      sm:bottom-6 sm:right-10
      md:bottom-8 md:right-20
      lg:bottom-10 lg:right-32
      xl:bottom-10 xl:right-56"
            />

            {/* Resume preview popup */}
            <Image
              src={headerTemp}
              alt="Resume Preview"
              className="absolute z-30 shadow-xl rounded-md
      w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px]
      top-[100px] left-[20px]
      sm:top-[140px] sm:left-[80px]
      md:top-[180px] md:left-[150px]
      lg:top-[200px] lg:left-[250px]
      xl:top-[220px] xl:left-[280px]"
            />

            {/* Toggle controls */}
            <Image
              src={improveText}
              alt="Toggles"
              className="absolute z-30
      w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px]
      top-[100px] right-[20px]
      sm:top-[140px] sm:right-[80px]
      md:top-[160px] md:right-[150px]
      lg:top-[180px] lg:right-[250px]
      xl:top-[160px] xl:right-[280px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
