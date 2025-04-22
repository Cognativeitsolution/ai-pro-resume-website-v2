"use client"
import React, { ReactNode, useState } from 'react';

type CollapseTabItem = {
    heading: string;
    description: string;
    image: string;
    list: string[];
};

// type CollapseTabData = {
//     headingTab: ;
// };

type PropsType = {
    data: CollapseTabItem[];
};

import Image from 'next/image';

export default function CollapseTab({ data }: PropsType) {
    // const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    // const toggleExpand = (index: number) => {
    //     setExpandedIndex(prev => (prev === index ? null : index));
    // };

    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className="mb-2 divide-y">
                    {data?.map((tab: any, index: number) => (
                        <div key={index}>
                            <div className="flex py-2">
                                <div className="relative after:absolute after:left-0 after:top-4 
                                        after:h-[1.2px] after:w-[15px] after:bg-black" />
                                <div className="pl-6 w-full">
                                    <div className="flex justify-between items-center w-full mb-2">
                                        <h4 className="text-hamzaPrimary text-2xl">{tab.heading}:</h4>
                                        {/* <button
                                            onClick={() => toggleExpand(index)}
                                            className="px-4 py-1 italic bg-indigo-400/20 text-indigo-700"
                                        >
                                            {expandedIndex === index ? "show less" : "show more"}
                                        </button> */}
                                    </div>
                                    <p className="text-sm">{tab.description}</p>
                                </div>
                            </div>

                            {/* {expandedIndex === index && ( */}
                            <>
                                <h5 className="text-hamzaPrimary text-2xl pt-4">{tab.heading} Resume Format:</h5>
                                <div className='grid grid-cols-12 gap-4 pl-6 py-4'>
                                    <div className='col-span-4'>
                                        <div className='rounded-lg flex mx-auto justify-center'>
                                            <Image src={tab.image} alt={`${tab.heading} Resume`} width={300} height={400} />
                                        </div>
                                    </div>
                                    <div className='col-span-8 py-6'>
                                        <h6 className="text-hamzaPrimary text-2xl mb-4 font-semibold">Best For:</h6>
                                        <ul className='list-disc pl-6'>
                                            {tab.list?.map((item: string, i: number) => (
                                                <li key={i} className='mb-4 text-sm'>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                            {/* )} */}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
