import React from "react";
import SummaryFeaturesCard from "./SummaryFeaturesCard";

interface propsType {
    data: any[];
}

const SummaryFeatures = (props: propsType) => {
    const { data } = props

    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container mx-auto ">
                    <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-center mb-5 lg:mb-10 xl:mb-16">
                        Why Use AI Pro Resume's Summary Generator?
                    </h2>
                    {data?.map((item: any, index: any) => (
                        <SummaryFeaturesCard
                            key={index}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === data.length - 1}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SummaryFeatures;
