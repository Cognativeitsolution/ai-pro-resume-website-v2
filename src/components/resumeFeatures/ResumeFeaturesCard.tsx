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
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-10 rounded-xl p-6 items-start`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image src={image} alt={title} className="w-[500px] h-auto" />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-[18px] sm:text-[32px] font-semibold mb-2">
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
          <button className="px-4 py-2 bg-primary text-white font-semibold rounded transition">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeFeaturesCard;
