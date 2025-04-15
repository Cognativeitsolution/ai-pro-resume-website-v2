import React from "react";
import { ServicesData } from "../../app/services/data";
import ServiceLayout from "./ServiceLayout";

const ServicesSection = () => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="mx-auto px-4 space-y-8">
            {ServicesData.map((item, index) => (
              <ServiceLayout
                key={index}
                {...item}
                reverse={index % 2 === 1} // alternate layout
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
