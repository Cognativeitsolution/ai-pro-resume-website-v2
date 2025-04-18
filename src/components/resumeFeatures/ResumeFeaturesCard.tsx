import React from "react";
import Image, { StaticImageData } from "next/image";
// ===============
import { CTA } from "@/components";
// ===============
import check_1 from "media/images/check_1.webp";

type ResumeFeatureCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  features: any[];
  buttonText: string;
  reverse?: boolean;
};

type propsType = {
  data: ResumeFeatureCardProps;
};

const ResumeFeaturesCard = ({ data }: propsType) => {
  return (
    <>
      <div className={`flex flex-col ${data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 rounded-xl p-0 lg:p-2 items-start`}>
        {/* Image Section */}
        <div className={`w-full lg:w-1/2 flex flex-shrink-0 ${data.reverse ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
          <Image src={data.image} alt={data.title} className="w-[500px] h-auto" />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[26px] md:text-[30px] 2xl:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[44px] font-semibold mb-4">
            {data.title}
          </h3>
          <p className="text-[16px] font-normal mb-4">{data.description}</p>
          <ul className="mb-4 space-y-3">
            {data.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <Image
                  src={check_1}
                  alt="bullet"
                  width={15}
                  height={15}
                  className="mt-[5px]"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:mt-8">
            <CTA
              btn
              text={data.buttonText}
              bgColor="bg-primary hover:bg-PrimaryDark"
              txtColor="text-white"
              border="border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeFeaturesCard;
