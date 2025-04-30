import Image from 'next/image';
import React, { ReactNode } from 'react'
import arrowLeft from "media/resume_parser/goals-arrow-left.webp"
import arrowRight from "media/resume_parser/goals-arrow-right.webp"

type ParserGoalsItem = {
    id?: number;
    icon: any;
    title: string | ReactNode;
    description?: string | ReactNode;
};

type ParserGoalsData = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    list?: ParserGoalsItem[];
};

type propsType = {
    data: ParserGoalsData;
};

export default function ParserGoals({ data }: propsType) {
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
                <div className='relative'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 mt-16 w-7/12 mx-auto ">
                        {data?.list?.map((item, index) => (
                            <div
                                key={index}
                                className="text-center flex flex-col items-center  bg-indigo-200/20 backdrop-blur-sm px-8 py-16 rounded-md border border-white shadow-md"
                            >
                                <div className="mb-8 ">
                                    <Image src={item?.icon} alt="icon" width={80} height={80} className='border rounded-full' />
                                </div>
                                <h3 className="text-[24px] text-slate-900 font-medium ">{item?.title}</h3>
                                <p className="text-gray-600 text-[16px] leading-relaxed pt-4">{item?.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="h-[280px] absolute top-72 left-20">
                        <Image src={arrowLeft.src} alt="" width={80} height={80} />
                    </div>
                    <div className="h-[280px] absolute top-24 right-20">
                        <Image src={arrowRight.src} alt="" width={100} height={100} />
                    </div>
                </div>

            </div>

        </section>
    )
}
