import React from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";
// ============
import banner from "media/images/banner.webp";
import robo_1 from "media/images/robo_1.gif";
import robo_2 from "media/images/robo_2.gif";
import headerTemp from "media/images/header-template.webp";
import improveText from "media/images/header-improvetext.webp";
import banner_bg_2 from "media/images/banner_bg_2.webp";

type BannerProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

const Banner = (props: BannerProps) => {
  const { title, description } = props;
  return (
    <>
      <section className="h-full bg-PrimaryDark md:bg-none relative z-10 overflow-hidden pb-6">
        <Image
          src={banner_bg_2}
          alt="banner_bg_2"
          priority
          className="absolute w-full h-full md:h-[75%] -z-10 object-cover !2xl:object-fill object-bottom hidden md:block"
        />
        <div className="container">
          <div className="flex flex-col items-center justify-between pt-36 pb-10 md:py-0 mt-0 md:mt-[120px] lg:mt-[170px] 2xl:mt-[180px]">
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[30px] md:leading-[50px] lg:leading-[60px] font-semibold text-center text-white">
              {title}
            </h1>
            <p className="text-[16px] lg:text-[18px] xl:text-[20px] font-normal text-center text-white my-3 capitalize">
              {description}
            </p>
            {/* buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 mt-3 md:mt-5">
              <CTA
                btn
                text="Create Resume"
                bgColor="bg-primary hover:bg-none"
                txtColor="text-white"
                border="border border-white"
              />
              <CTA
                btn
                text=" Import Resume"
                bgColor="bg-transparent hover:bg-primary"
                txtColor="text-white"
                border="border border-white"
              />
              <CTA
                btn
                text="ATS Checker"
                bgColor="bg-transparent hover:bg-primary"
                txtColor="text-white"
                border="border border-white"
              />
            </div>

            {/* image section */}
            <div className="w-full hidden md:flex justify-center items-center py-6 md:py-10 overflow-hidden">
              {/* Main laptop mockup */}
              <div className="w-full md:w-[70%] relative">
                <Image
                  src={banner}
                  alt="Laptop"
                  priority
                  className="w-full"
                />

                {/* Robot on left */}
                <div className="w-[15%] md:w-[20%] absolute -z-10 -rotate-45 top-0 xl:top-5 -left-7 lg:-left-8 xl:-left-12 2xl:-left-16 transform -scale-x-[1]">
                  <Image
                    src={robo_1}
                    alt="Robot Left"
                    priority
                    unoptimized
                    className="w-[full]"
                  />
                </div>

                {/* Robot on right */}
                <div className="w-[15%] absolute z-20 bottom-3 right-1">
                  <Image
                    src={robo_2}
                    alt="Robot Right"
                    priority
                    unoptimized
                    className="w-full"
                  />
                </div>

                {/* Resume preview popup */}
                <div className="absolute z-30 animate-diagonalFloat rounded-md w-[22%] md:w-[25%] top-24 lg:top-32 xl:top-40 2xl:top-52 left-5">
                  <Image
                    src={headerTemp}
                    alt="Resume Preview"
                    priority
                    className="w-full"
                  />
                </div>

                {/* Toggle controls */}
                <div className="absolute z-30 animate-float w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px] top-24 lg:top-32 xl:top-40 2xl:top-52 right-4 lg:right-5 2xl:right-10">
                  <Image
                    src={improveText}
                    alt="Toggles"
                    priority
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
