"use client"
import { useRef, useState } from "react";
import React from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";
import { FaRegCirclePlay } from "react-icons/fa6";


interface ResumeFeatureCardProps {
  image: any;
  video: any;
  title: string;
  description: string;
  features?: string[];
  buttonText: string;
  reverse?: boolean;
}

const ResumeFeaturesCard = ({
  image,
  video,
  title,
  description,
  features,
  buttonText,
  reverse,
}: ResumeFeatureCardProps) => {
  const videoRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <>
      <div className={`grid grid-cols-12 items-center gap-y-6 lg:gap-12 xl:gap-20 lg:py-6 xl:py-10 mb-4 xl:mb-0`}>
        {reverse ?
          <div className={`col-span-12 xl:col-span-6 order-last flex justify-center lg:justify-start lg:order-first`}>
            <div className="flex items-center w-full xl:min-w-[550px] ">
              {video ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video ref={videoRef} className="w-full rounded-lg" muted>
                    <source
                      src={video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <div
                    className={`absolute rounded-lg top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-slate-900/80 to-slate-700/80 flex items-center justify-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <FaRegCirclePlay className="text-hamzaPrimary" size={50} />
                  </div>
                </div>
              ) : image ? (
                <Image src={image} alt={title} className="w-full h-auto" />
              ) : null}
            </div>
          </div> : null}

        <div className={`col-span-12 xl:col-span-6 ${reverse ? "ms-auto" : ""}`}>
          <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
            {title}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-justify lg:text-left ">{description}</p>
          <div className="mt-2 sm:mt-4">
            <CTA
              btn
              text={buttonText}
              bgColor="bg-primary hover:bg-PrimaryDark"
              txtColor="text-white"
              border="border-0"
            />
          </div>
        </div>

        {reverse ? null :
          <div className={`col-span-12 xl:col-span-6 flex justify-center`}>
            <div className="flex items-center w-full xl:min-w-[550px] ">
              {video ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video ref={videoRef} className="w-full rounded-lg" muted>
                    <source
                      src={video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <div
                    className={`absolute rounded-lg top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-slate-900/80 to-slate-700/80 flex items-center justify-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <FaRegCirclePlay className="text-hamzaPrimary" size={50} />
                  </div>
                </div>
              ) : image ? (
                <Image src={image} alt={title} className="w-full h-auto" />
              ) : null}
            </div>
          </div>}
      </div>
    </>
  );
};

export default ResumeFeaturesCard;
