import Image from "next/image";
import React from "react";
import ats_bg from "/public/images/ats_bg.png";
import ats_score from "/public/images/ats_score.png";

const Ats = () => {
  return (
    <section className="container relative z-10 overflow-hidden h-full flex items-start justify-center pb-6">
      <Image
        src={ats_bg}
        alt="banner_bg_2"
        fill={true}
        className="block -z-10 object-cover object-bottom"
      />
      <div className="flex items-start justify-between">
        <div className="w-full bg-yellow-400">
          <p className="font-semibold text-[20px] md:text-[32px] text-white">
            Resumes optimized for applicant tracking systems (ATS)
          </p>
          <p className="font-normal text-[16px] text-white">
            Easy to use templates, AI Powered Suggestions, and one click
            download.
          </p>
          <button className="px-4 py-1 font-semibold text-[18px] rounded-md bg-primary text-white">
            Check ATS Score
          </button>
        </div>
        {/* image section */}
        <div className="flex justify-center items-center bg-red-400">
          <Image src={ats_score} alt="ats_score" className="z-10" />
        </div>
      </div>
    </section>
  );
};

export default Ats;
