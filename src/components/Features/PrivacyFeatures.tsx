import React from "react";
import PrivacyFeaturesCard from "./PrivacyFeaturesCard";

interface propsType {
  data: any[];
}

const Features = (props: propsType) => {
  const { data } = props


  return (
    <>
      <section className="py-5 lg:py-10">
        <div className="container mx-auto ">
          {data?.map((item: any, index: any) => (
            <PrivacyFeaturesCard
            key={index}
            {...item}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
