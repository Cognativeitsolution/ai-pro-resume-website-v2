import React from "react";
import FeaturesCard from "./FeaturesCard";

interface propsType {
  data: any[];
}

const Features = (props: propsType) => {
  const { data } = props


  return (
    <>
      <section className="pb-8 lg:pb-10 xl:py-12 ">
        <div className="container mx-auto ">
          {data?.map((item: any, index: any) => (
            <FeaturesCard
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
