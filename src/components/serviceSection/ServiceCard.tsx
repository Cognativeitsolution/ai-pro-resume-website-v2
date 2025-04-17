import Image from "next/image";
import React from "react";
import tick from "../../../public/images/doubleTick.webp";

interface ServiceCardProps {
  image: any;
  title: string;
  services: string[];
}

const ServiceCard = ({ image, title, services }: ServiceCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center text-center p-6 bg-white/40 hover:bg-white/60 shadow-md rounded-2xl border-[0.5px] hover:border-hamzaPrimary border-white">
        <div className="w-[80px]">
          <Image src={image} alt={title} className="mb-4" />
        </div>
        <h5 className="text-lg font-semibold mb-4">{title}</h5>
        <ul className="space-y-2 text-sm text-left">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <Image
                src={tick}
                alt="check"
                width={16}
                height={16}
                className="mt-[6px]"
              />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServiceCard;
