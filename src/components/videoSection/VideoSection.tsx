import React from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";
// ===============
import home_page_video from "media/images/home_page_video.webp";

type VideoSectionProps = {
  title: string;
  description: string;
  image: any;
  alt: string
};

type propsType = {
  data: VideoSectionProps;
};

const VideoSection = ({ data }: propsType) => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <h2 className="font-semibold text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
            {data.title}
          </h2>
          <p className="font-normal text-[16px] lg:text-[18px] text-center mt-6">
            {data.description}
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
            <Image src={data.image} alt={data.alt} className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
