
"use client"
import React, { ReactNode, useState } from 'react';

type CollapseTabItem = {
    heading: string;
    description: string;
    image: string;
    list: string[];
};

type PropsType = {
    data: CollapseTabItem[];
};

import Image from 'next/image';

export default function TemplatePoint({ data }: PropsType) {
    return (

        <div className="my-6 divide-y">
            {data?.map((tab: any, index: number) => (
                <div key={index}>
                    <div className='grid xl:grid-cols-12 gap-4 pl-6 py-4'>
                        <div className='xl:col-span-5'>
                            <div className='flex mx-auto justify-center '>
                                <Image src={tab.image} alt={`${tab.heading} Resume`} width={300} height={400} className='rounded-lg  border overflow-hidden shadow-md' />
                            </div>
                        </div>
                        <div className='xl:col-span-7 py-6'>
                            <p className="text-base pb-2">{tab.description}</p>
                            <ul className=''>
                                {tab.list?.map((item: string, i: number) => (
                                    <div className="flex pb-2" key={i}>
                                        <div className="relative after:absolute after:left-0 after:top-4 
                                       after:h-[1.2px] after:w-[15px] after:bg-black" />  <li className='mb-4 text-xl font-semibold pl-6'>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div >
            ))
            }
        </div >

    );
}

