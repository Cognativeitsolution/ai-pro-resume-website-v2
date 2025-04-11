import Image from "next/image";
import React from "react";
import check_1 from "../../../public/images/check_1.svg";

interface ResumeFeatureCardProps {
  image: any;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  reverse?: boolean;
}

const ResumeFeaturesCard = ({
  image,
  title,
  description,
  features,
  buttonText,
  reverse = false,
}: ResumeFeatureCardProps) => {
  return (
    <>
      <div className={`flex flex-col ${ reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 rounded-xl p-0 lg:p-2 items-start`}>
        {/* Image Section */}
        <div className={`w-full lg:w-1/2 flex flex-shrink-0 ${ reverse ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
          <Image src={image} alt={title} className="w-[500px] h-auto" />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[26px] md:text-[30px] 2xl:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[44px] font-semibold mb-4">
            {title}
          </h3>
          <p className="text-[16px] font-normal mb-4">{description}</p>
          <ul className="mb-4 space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <Image
                  src={check_1}
                  alt="bullet"
                  width={15}
                  height={15}
                  className="mt-[5px]"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <button className="px-4 py-2 bg-primary text-white font-semibold rounded transition mt-2 sm:mt-4">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeFeaturesCard;
