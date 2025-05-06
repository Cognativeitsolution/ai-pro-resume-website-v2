import React from "react";
import WorkCard from "./WorkCard";

interface propsType {
    data: any[];
}

const Work = (props: propsType) => {
    const { data } = props

    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container mx-auto ">
                    <h3 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-center mb-8 lg:mb-10">
                        How Does the Resume Summary Generator Work?
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
                        {data?.map((item: any, index: any) => (
                            <WorkCard
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
