
"use client"
import React, { ReactNode, useState } from 'react';

type CollapseTabItem = {
    heading?: any;
    description?: any;
    image?: any;
    list?: {
        text?: any;
        subList?: any[];
    }[];
};

type PropsType = {
    data: CollapseTabItem[];
};

import Image from 'next/image';

export default function TemplatePoint({ data }: PropsType) {
    return (
        <div className="my-2 divide-y">
            {data?.map((tab: any, index: number) => (
                <div key={index}>
                    <div className='grid xl:grid-cols-12 gap-4 pl-6 py-4'>
                        <div className='xl:col-span-5'>
                            <div className='flex mx-auto justify-center '>
                                <Image src={tab.image} alt={`${tab.heading} Resume`} width={300} height={400} className='rounded-lg  border overflow-hidden shadow-md' />
                            </div>
                        </div>
                        <div className="xl:col-span-7 py-2">
                            <p className="text-base pb-2">{tab.description}</p>
                            <ul>
                                {tab.list?.map((item: any, i: number) => (
                                    <li key={i} className="mb-4 text-xl font-semibold pl-6 relative">
                                        <div
                                            className="absolute left-0 top-4 h-[1.2px] w-[15px] bg-black"
                                            style={{ content: '""' }}
                                        />
                                        {item.text || item}
                                        {item?.subList && (
                                            <ul className="pl-6 mt-2 ">
                                                {item.subList.map((subItem: any, j: number) => (
                                                    <li key={j} className="mb-2 text-base relative">
                                                        <div
                                                            className="absolute -left-6 top-3 h-[1.2px] w-[15px] bg-black"
                                                            style={{ content: '""' }}
                                                        />
                                                        {subItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div >
            ))}
        </div>
    );
}

