import React from "react";
import ResumeFeaturesCard from "./ResumeFeaturesCard";
import { StaticImageData } from "next/image";

type FeatureItem = {
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
  buttonText: string;
};

type propsType = {
  data: FeatureItem[];
};


const ResumeFeatures = ({ data }: propsType) => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-4 space-y-8">
          {data.map((item, index) => (
            <ResumeFeaturesCard
              key={index}
              data={{ ...item, reverse: index % 2 === 1 }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ResumeFeatures;
