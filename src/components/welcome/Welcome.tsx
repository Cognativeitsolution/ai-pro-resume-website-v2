import React, { ReactNode } from "react";

type WelcomeData = {
    title: string | ReactNode;
    description: string[];
};

type propsType = {
    data: WelcomeData;
};

const Welcome = (props: propsType) => {
    const { data } = props;
    return (
        <section className="py-5 md:pb-0 md:pt-10">
            <div className="container mx-auto">
                <h2 className="text-[20px] sm:text-[25px] md:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[45px] font-semibold mb-2">
                    {data?.title}
                </h2>
                {data?.description?.map((para, index) => (
                    <p key={index} className={`text-[16px] text-justify md:text-left ${index !== data?.description?.length - 1 ? 'mb-5' : ''}`}>
                        {para}
                    </p>
                ))}
            </div>
        </section>
    );
};
export default Welcome;
