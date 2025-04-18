import React, { ReactNode } from "react";
// ===============
import ServiceCard from "./ServiceCard";
import { CTA } from "@/components";

type ServiceItem = {
  image: any;
  alt?: string;
  title: string;
  services: string[];
};

type ServiceData = {
  subTitle: string | ReactNode;
  title: string | ReactNode;
  description: ReactNode;
  serviceList?: ServiceItem[];
};

type propsType = {
  data: ServiceData;
};

const ServiceSection = ({ data }: propsType) => {

  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h3 className="font-normal text-[18px] md:text-[22px] text-center">
          {data.subTitle}
        </h3>
        <h4 className="font-semibold text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center mt-4">
          {data.title}
        </h4>
        <p className="font-normal text-[16px] lg:text-[18px] text-center mt-4">
          {data.description}
        </p>
        <div className="mt-5 flex justify-center">
          <CTA
            btn
            text="Explore All Services"
            bgColor="bg-primary hover:bg-PrimaryDark"
            txtColor="text-white"
            border="border-0"
          />
        </div>
        {/* service cards */}
        <div className="mt-8">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.serviceList?.map((item, idx) => (
              <ServiceCard
                key={idx}
                image={item.image}
                title={item.title}
                services={item.services}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
