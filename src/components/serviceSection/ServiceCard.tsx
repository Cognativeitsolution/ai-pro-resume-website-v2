import Image from "next/image";
import React from "react";
import tick from "../../../public/images/doubleTick.svg";

interface ServiceCardProps {
  image: any;
  title: string;
  services: string[];
}

const ServiceCard = ({ image, title, services }: ServiceCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center text-center p-6 bg-white/40 hover:bg-white/60 shadow-md rounded-2xl border-[0.5px] hover:border-hamzaPrimary border-white">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="mb-4"
        />
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
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
