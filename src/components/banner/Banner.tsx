import Image from "next/image";
import React from "react";
// ============
import banner from "/public/images/banner.svg";
import robo_1 from "/public/images/robo_1.gif";
import robo_2 from "/public/images/robo_2.gif";
import headerTemp from "/public/images/header-template.svg";
import improveText from "/public/images/header-improvetext.svg";
import banner_bg_2 from "/public/images/banner_bg_2.svg";

const Banner = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-6">
        <Image
          src={banner_bg_2}
          alt="banner_bg_2"
          className="absolute w-full h-dvh md:h-[75%] -z-10 object-cover !2xl:object-fill object-bottom"
        />
        <div className="container flex flex-col items-center justify-between">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[30px] md:leading-[50px] lg:leading-[60px] font-semibold text-center text-white mt-[120px] lg:mt-[170px] 2xl:mt-[150px]">
            Let AI Build the Resume That Builds <br /> Your Career
          </h1>
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] font-normal text-center text-white my-3 capitalize">
            Easy to use templates, AI Powered Suggestions, and one click download.
          </p>
          {/* buttons */}
          <div className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-5 sm:gap-10 mt-3 md:mt-5">
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] rounded-md bg-primary text-white">
              Create Resume
            </button>
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] border border-white text-white rounded-md hover:bg-primary">
              Import Resume
            </button>
            <button className="w-[180px] sm:w-auto px-4 py-1 font-semibold text-[18px] border border-white text-white hover:bg-primary rounded-md">
              ATS Checker
            </button>
          </div>

          {/* image section */}
          <div className="w-full hidden md:flex justify-center items-center py-6 md:py-10 overflow-hidden">
            {/* Main laptop mockup */}
            <div className="w-full md:w-[70%] relative">
              <Image
                src={banner}
                alt="Laptop"
                className="w-full"
              />

              {/* Robot on left */}
              <div className="w-[15%] md:w-[20%] absolute -z-10 -rotate-45 top-5 -left-3 md:-left-8 xl:-left-12 2xl:-left-16 transform -scale-x-[1]">
                <Image
                  src={robo_1}
                  alt="Robot Left"
                  className="w-[full]"
                />
              </div>

              {/* Robot on right */}
              <div className="w-[15%] absolute z-20 bottom-3 right-2">
                <Image
                  src={robo_2}
                  alt="Robot Right"
                  className="w-full"
                />
              </div>
              {/* Resume preview popup */}
              <div className="absolute z-30 animate-diagonalFloat rounded-md w-[22%] md:w-[25%] left-5 top-32 md:top-40 2xl:top-60">
                <Image
                  src={headerTemp}
                  alt="Resume Preview"
                  className="w-full"
                />
              </div>

              {/* Toggle controls */}
              <div className="absolute z-30 animate-float w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px] top-28 right-4 md:top-40 2xl:top-52 lg:right-5 2xl:right-10">
                <Image
                  src={improveText}
                  alt="Toggles"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
