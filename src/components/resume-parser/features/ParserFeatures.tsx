import Image from 'next/image';
import React, { ReactNode } from 'react'


type ParserFeaturesItem = {
    id?: number;
    icon: any;
    title: string;
    description: string;
};

type ParserFeaturesData = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    list: ParserFeaturesItem[];
};

type propsType = {
    data: ParserFeaturesData;
};

export default function ParserFeatures({ data }: propsType) {
    return (
        <section className="py-5 md:py-10 ">
            <div className="container mx-auto">
                <h3 className="font-normal text-[16px] md:text-[20px] text-center from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent">
                    {data.subTitle}
                </h3>
                <h2 className="font-semibold text-slate-950 text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
                    {data?.title}
                </h2>
                <p className="font-normal text-[16px] lg:text-[18px] text-center mt-4">
                    {data?.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 md:mt-16">
                    {data?.list?.map((item, index) => (
                        <div
                            key={index}
                            className="text-center flex flex-col items-center"
                        >
                            <div className="mb-3 bg-indigo-200/30 backdrop-blur-sm p-3 rounded-full">
                                <Image src={item?.icon} alt={item?.title} />
                            </div>
                            <h3 className="text-[24px] text-slate-900 font-medium mb-2">{item?.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item?.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
