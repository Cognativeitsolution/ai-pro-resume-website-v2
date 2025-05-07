import React, { ReactNode } from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";


type AtsProps = {
  backgroundImage: any;
  mainImage: any;
  robotImage: any;
  heading: string | ReactNode;
  description: string;
  buttonText: string;
};

type propsType = {
  data: AtsProps;
};


const Ats = ({ data }: propsType) => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-3xl flex items-start justify-center">
          <Image
            src={data.backgroundImage}
            alt="banner_bg_2"
            fill={true}
            priority
            className="block -z-10 object-cover object-bottom"
          />
          <div className="container mx-auto px-5 py-6 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10 relative">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center p-5 lg:pl-[40px] xl:pl-[50px] md:text-left">
              <h3 className="text-white font-semibold text-2xl xl:text-3xl leading-tight">
                {data.heading}
              </h3>
              <p className="text-white mt-4 text-sm md:text-base">
                {data.description}
              </p>
              <div className="mt-6 xl:mt-14">
                <CTA
                  btn
                  text={data.buttonText}
                  bgColor="bg-white hover:bg-primary"
                  txtColor="text-hamzaPrimary hover:text-white"
                  border="border-0"
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 text-center p-5 lg:p-0 flex items-center justify-center relative">
              <div className="w-full lg:w-[350px]">
                <Image src={data.mainImage} alt="Resume Previews" className="w-full" />
              </div>
              <div className="w-[150px] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-x-1/4 md:translate-y-1/4 lg:translate-x-[-80px] lg:translate-y-12 z-20">
                <Image src={data.robotImage} unoptimized alt="Robot Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ats;
