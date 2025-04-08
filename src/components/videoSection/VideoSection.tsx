import Image from "next/image";
import React from "react";
import home_page_video from "/public/images/home_page_video.svg";

const VideoSection = () => {
  return (
    <>
      <section className="container my-10">
        <p className="font-semibold text-[25px] md:text-[32px] text-center">
          What Makes UsThe Best Resume Builder Online?
        </p>
        <p className="font-normal text-[14px] sm:text-[16px] text-center mt-5">
          AI Pro Resume is your resume specialist that provides AI-based
          personalized suggestions based on your skills and experiences. These
          suggestions can speed up your cover letter and resume-making process.
          With the perfect resume builder, you do not have to write or
          copy-paste your data. Just import your current resume and see the
          magic of our resume parser tool. It fetches all the data from your
          file and transfers them to creative resume maker.
        </p>
        <div className="mt-5 text-center">
          <button className="px-2 sm:px-4 py-1 font-semibold text-[16px] sm:text-[18px] rounded-md bg-primary text-white">
            Let’s Build Your Resume
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center text-center">
          <Image src={home_page_video} alt="video" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default VideoSection;
