import Image from "next/image";
import React from "react";
import ats_bg from "/public/images/ats_bg.svg";
import ats_score from "/public/images/ats_score.svg";
import robo_2 from "../../../public/images/robo_2.gif";

const Ats = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-3xl flex items-start justify-center">
          <Image
            src={ats_bg}
            alt="banner_bg_2"
            fill={true}
            priority
            className="block -z-10 object-cover object-bottom"
          />
          <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-10 relative">
            {/* Text Section */}
            <div className="md:w-1/2 text-center pl-0 sm:pl-[50px] md:text-left">
              <h3 className="text-white font-semibold text-2xl md:text-3xl leading-tight">
                Resumes Optimized For Applicant <br /> Tracking Systems (ATS)
              </h3>
              <p className="text-white mt-4 text-sm md:text-base">
                AI PRO RESUME Resumes And Cover Letters Are Vigorously Tested
                Against Major ATS Systems To Ensure Complete Parsability
              </p>
              <button className="mt-[3.5rem] px-5 py-2 rounded-md bg-primary text-white font-semibold hover:bg-gray-100 transition">
                Check ATS Score
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex items-center justify-center relative">
              <div className="w-[350px]">
                <Image src={ats_score} alt="Resume Previews" className="z-10" />
              </div>
              <div className="w-[150px] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-x-1/4 md:translate-y-1/4 lg:translate-x-[-80px] lg:translate-y-12 z-20">
                <Image src={robo_2} alt="Robot Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ats;
