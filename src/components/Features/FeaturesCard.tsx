import Image from "next/image";
import React from "react";
import check_1 from "../../../public/images/check_1.svg";

interface ResumeFeatureCardProps {
  image: any;
  title: string;
  description: string;
  features?: string[];
  buttonText: string;
  reverse?: boolean;
}

const ResumeFeaturesCard = ({
  image,
  title,
  description,
  features,
  buttonText,
  reverse,
}: ResumeFeatureCardProps) => {
  return (
    <>
      <div
        className={`grid grid-cols-12 gap-y-8 lg:gap-16 xl:gap-20 lg:py-6 xl:py-10 mb-6 lg:mb-0`}
      >
        {reverse ? <div
          className={`col-span-12 lg:col-span-6 order-last flex justify-center lg:justify-start lg:order-first`}
        >
          <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px] ">
            <Image src={image} alt={title} className="h-auto" />
          </div>
        </div> : null}

        <div
          className={`col-span-12 lg:col-span-6 ${reverse ? "ms-auto" : ""}`}
        >
          <h3 className="text-[20px] sm:text-[25px] md:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[45px] font-semibold mb-2">
            {title}
          </h3>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] ">{description}</p>
          <ul className="mb-4 space-y-3">
            {features?.map((feature, idx) => (
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
          <button className="px-4 py-2 bg-primary text-white font-semibold rounded transition">
            {buttonText}
          </button>
        </div>

        {reverse ? null : <div
          className={`col-span-12 lg:col-span-6 flex justify-center`}
        >
          <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px] ">
            <Image src={image} alt={title} className="h-auto" />
          </div>
        </div>}
      </div>
    </>
  );
};

export default ResumeFeaturesCard;
