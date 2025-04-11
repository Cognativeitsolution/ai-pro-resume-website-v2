import React from "react";
import FeaturesCard from "./FeaturesCard";

interface propsType {
  data: any[];
}

const Features = (props: propsType) => {
  const { data } = props


  return (
    <>
      <section className="py-5 md:py-10">
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
