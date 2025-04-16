import React, { ReactNode } from "react";
import Image from "next/image";
import stepperBg from "media/images/stepper_bg.svg";

type StepperItem = {
  title: string;
  description: string;
};

type StepperData = {
  title: string;
  description: ReactNode;
  stepperList: StepperItem[];
};

type propsType = {
  data: StepperData;
};

export default function Stepper(props: propsType) {
  const { data } = props;
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-2 xl:gap-8">
          <div className="flex flex-col relative">
            {data.stepperList.map((item: any, index: any) => (
              <div
                key={index}
                className="bg-transparent hover:bg-primary hover:text-white rounded-lg px-6 py-5 transition-colors duration-300 ease-in-out"
              >
                <h3 className="text-[18px] lg:text-[20px] xl:text-[30px] leading-[28px] lg:leading-[30px] xl:leading-[40px] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-[16px] lg:text-[18px] text-justify lg:text-left ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative h-full w-full rounded-md overflow-hidden mt-3 xl:mt-0">
            <Image
              src={stepperBg}
              alt="banner_bg_2"
              fill={false}
              className="w-full object-cover object-bottom md:object-center max-h-[350px] xl:max-h-full xl:rounded-none rounded-lg z-10"
            />
            <div className="absolute Black z-20 text-white px-2 sm:px-6 py-5 bottom-0 top-auto rounded-lg xl:rounded-none">
              <h3 className="text-[18px] lg:text-[20px] xl:text-[30px] leading-[28px] lg:leading-[30px] xl:leading-[40px] font-semibold mb-1">
                {data.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] text-justify lg:text-left">
                {data.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
