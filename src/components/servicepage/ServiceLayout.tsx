"use client";

import React, { useState } from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";
// ===============
import check_1 from "../../../public/images/check_1.svg";

interface ServiceLayoutProps {
  image: any;
  title: string;
  features: string[];
  buttonText: string;
  reverse?: boolean;
}

const ServiceLayout = ({
  image,
  title,
  features,
  buttonText,
  reverse = false,
}: ServiceLayoutProps) => {
  const [show_details, setshow_details] = useState(false);

  const ToggleServiceDetails = () => {
    setshow_details(!show_details);
  };

  return (
    <>
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-6 lg:gap-10 rounded-xl p-0 lg:p-2 items-start`}
      >
        {/* Image Section */}
        <div
          className={`w-full lg:w-1/2 flex flex-shrink-0 ${
            reverse
              ? "justify-center lg:justify-end"
              : "justify-center lg:justify-start"
          }`}
        >
          <Image
            src={image}
            alt={title}
            className="w-[450px] h-auto animate-float"
          />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[26px] md:text-[30px] 2xl:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[44px] font-semibold mb-4">
            {title}
          </h3>
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
          <div className="flex items-center justify-start gap-3 mt-4 sm:mt-8">
            <CTA
              btn
              text={buttonText}
              bgColor="bg-primary hover:bg-PrimaryDark"
              txtColor="text-white"
              border="border-0"
            />
            <div className="flex items-center justify-start gap-2">
              <span className="line-through text-black font-semibold text-xs sm:text-lg">
                USD 6.00
              </span>
              <br></br>
              <span className="text-hamzaPrimary font-bold text-xs sm:text-lg">
                USD 4.00
              </span>
            </div>
          </div>
          <div className="mt-3">
            {show_details && (
              <p className="text-[16px] md:text-[18px]">
                Writing a professional resume can take a lot of time and effort
                as the industry trends are upgrading. AI Pro Resume offers
                professional resume writing services to ensure your resume
                stands out in the job market. Our experts use the best resume
                formats to highlight your key skills to make your first move
                impressive. You can trust our professional resume writing if you
                are starting your career or aiming for a higher position.
              </p>
            )}
            <button
              onClick={ToggleServiceDetails}
              className="text-hamzaPrimary font-semibold flex items-start justify-start"
            >
              {show_details ? "Hide Details" : "View Details"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;
