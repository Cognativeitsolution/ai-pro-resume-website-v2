"use client";
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { CTA } from '..';
import arrowLeft from "media/resume_parser/goals-arrow-left.webp"
import arrowRight from "media/resume_parser/goals-arrow-right.webp"

type TabSectionItem = {
    id?: number;
    image: any;
    title: string;
    semiTitle: string;
};

type TabSectionData = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    list: TabSectionItem[];
};

type propsType = {
    data: TabSectionData;
};

export default function TabSection({ data }: propsType) {
    const [activeTab, setActiveTab] = useState(0);
    const [highlightBorder, setHighlightBorder] = useState(false);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setHighlightBorder(true);

        setTimeout(() => setHighlightBorder(false), 1000);
    };

    const activeItem = data.list[activeTab];

    return (
        <section className="py-5 md:py-10">
            <div className={"container mx-auto"}>
                <h4 className={`font-normal text-[16px] md:text-[20px] text-center  from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent`}>
                    {data.subTitle}
                </h4>
                <h3 className={`text-[24px] md:text-[32px] font-semibold text-center`}>
                    {data.title}
                </h3>
                <p className={`font-normal  text-[16px] text-center px-0 lg:px-40`}>
                    {data.description}
                </p>
                <div className="grid grid-cols-12 gap-y-10 xl:gap-5 mt-8 md:mt-16 ">
                    {/* Tabs */}
                    <div className="col-span-5 flex flex-col items-start space-y-4">
                        {data.list.map((tab, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 w-[90%] border ${activeTab === index
                                    ? 'bg-hamzaPrimary text-white'
                                    : 'bg-indigo-200/20  text-gray-700 '
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                <Image
                                    src={tab.image}
                                    alt={tab.title}
                                    width={40}
                                    height={40}
                                    className="rounded border shadow"
                                />
                                {tab.title}&nbsp; &nbsp;-&nbsp; &nbsp;{tab.semiTitle}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="col-span-7 flex relative">
                        <div className={` bg-indigo-200/20 backdrop-blur-none border-2 flex flex-col justify-center gap-4 mx-auto p-4 rounded transition-all duration-700 ${highlightBorder ? 'border-hamzaPrimary' : 'border-white'}`}>
                            <div className='flex justify-between'>
                                <h2 className="text-xl font-semibold ">{activeItem.title}</h2>
                                <div className='px-4 py-1 bg-hamzaPrimary text-white rounded-full'>
                                    {activeItem.semiTitle}
                                </div>
                            </div>
                            <div className='mx-auto relative group shadow '>
                                <Image
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    width={400}
                                    height={300}
                                    className="rounded-lg"
                                />
                                {/* Templates Before */}
                                <div className="flex items-center justify-center rounded-lg w-full h-full bg-slate-800/90 absolute top-0 left-0 z-40 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                                    <div className="translate-y-56 group-hover:-translate-y-0 transition-all duration-1000">
                                        <CTA
                                            btn
                                            text="Use This Template"
                                            bgColor="bg-PrimaryDark hover:bg-transparent"
                                            txtColor="text-white"
                                            border="border border-white"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="h-[220px] lg:h-[280px] absolute top-96 left-16 hidden lg:block">
                            <Image src={arrowLeft.src} alt="" width={80} height={80} />
                        </div>
                        <div className="h-[220px] lg:h-[280px] absolute top-4 right-16 hidden lg:block">
                            <Image src={arrowRight.src} alt="" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
