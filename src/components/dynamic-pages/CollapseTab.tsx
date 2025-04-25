import React from 'react';

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

export default function CollapseTab({ data }: PropsType) {

    return (

        <div className="mb-2 divide-y">
            {data?.map((tab: any, index: number) => (
                <div key={index}>
                    <div className="flex py-2">
                        <div className="relative after:absolute after:left-0 after:top-4 
                                        after:h-[1.2px] after:w-[15px] after:bg-black" />
                        <div className="pl-6 w-full">
                            <div className="flex justify-between items-center w-full mb-2">
                                <h4 className="text-hamzaPrimary text-2xl">{tab.heading}:</h4>
                            </div>
                            <p className="text-base">{tab.description}</p>
                        </div>
                    </div>
                    <>
                        <h5 className="text-hamzaPrimary text-2xl pt-2 xl:pt-4">{tab.heading} Resume Format:</h5>
                        <div className='grid xl:grid-cols-12 gap-4 xl:pl-6 py-3 xl:py-4'>
                            <div className='xl:col-span-5'>
                                <div className='flex mx-auto justify-center '>
                                    <Image src={tab.image} alt={`${tab.heading} Resume`} className='border overflow-hidden shadow-md rounded-lg ' width={300} height={400} />
                                </div>
                            </div>
                            <div className='xl:col-span-7 xl:py-6'>
                                <h6 className="text-hamzaPrimary text-2xl xl:mb-4 font-semibold">Best For:</h6>
                                <ul className='list-disc pl-6'>
                                    {tab.list?.map((item: string, i: number) => (
                                        <li key={i} className='mb-4 last:mb-0 text-base'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                </div>
            ))}
        </div>

    );
}
