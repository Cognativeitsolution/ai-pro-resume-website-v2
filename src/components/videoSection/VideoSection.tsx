import React from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";
// ===============
import home_page_video from "/public/images/home_page_video.svg";

const VideoSection = () => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <h2 className="font-semibold text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
            What Makes UsThe Best Resume Builder Online?
          </h2>
          <p className="font-normal text-[16px] lg:text-[18px] text-center mt-6">
            AI Pro Resume is your resume specialist that provides AI-based
            personalized suggestions based on your skills and experiences. These
            suggestions can speed up your cover letter and resume-making
            process. With the perfect resume builder, you do not have to write
            or copy-paste your data. Just import your current resume and see the
            magic of our resume parser tool. It fetches all the data from your
            file and transfers them to creative resume maker.
          </p>
          <div className="mt-7 flex justify-center">
            <CTA
              btn
              text="Let’s Build Your Resume"
              bgColor="bg-primary hover:bg-PrimaryDark"
              txtColor="text-white"
              border="border-0"
            />
          </div>
          <div className="mt-6 flex items-center justify-center text-center">
            <Image src={home_page_video} alt="video" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
