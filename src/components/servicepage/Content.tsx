import React from "react";
import { ServicePageContent } from "../../app/services/data";
import Image from "next/image";
import check_1 from "media/images/check_1.webp";

const Content = () => {
  return (
    <>
      <div className="container">
        <div className="mx-auto px-4 space-y-8">
          {ServicePageContent.map((item, index) => (
            <div key={index} className="w-full">
              <h3 className="text-[26px] md:text-[30px] 2xl:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[44px] font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[18px] font-medium mb-4">
                {item.description}
              </p>
              <ul className="mb-4 space-y-3">
                {item.features.map((feature, idx) => (
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
