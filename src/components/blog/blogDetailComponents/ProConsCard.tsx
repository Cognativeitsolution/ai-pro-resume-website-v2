import React from 'react'
import Image from 'next/image';

type Item = {
    id: number;
    point: string;
    subHead: string;
};

type ProsConsType = {
    title?: string;
    description?: string | string[];
    icon?: any;
    isPro?: boolean;
    isTip?: boolean;
    list?: Item[];
};


export default function ProConsCard({ list, description, title, icon, isPro, isTip }: ProsConsType) {
    console.log(list, "list");

    return (
        <>
            <div className=''>
                <div className='relative pt-10 my-5'>
                    <div className='flex items-end gap-2 sm:gap-4 absolute top-0 sm:-top-1 left-6  z-20'>
                        <div className={`w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center rounded-full overflow-hidden border ${isPro ? "border-green-600" : isTip ? "border-indigo-600" : "border-red-600"} z-10`}>
                            <Image src={icon} alt="blog detail" />
                        </div>
                        <h3 className={`hidden sm:block sm:text-xl md:text-2xl capitalize font-bold ${isPro ? "text-green-600" : isTip ? "text-indigo-600" : "text-red-600"}`}>{title}</h3>

                    </div>
                    <div className='relative'>
                        <div className={`flex flex-col items-start sm:gap-4 p-4 rounded-2xl shadow-sm w-[97%] sm:w-[98%] h-[98%] z-20 ${isPro ? "bg-green-100 border border-green-600" : isTip ? "bg-indigo-100 border border-indigo-600" : "bg-red-100 border border-red-600"} `}>
                            <h3 className={`mt-5 sm:hidden block sm:text-xl md:text-2xl capitalize font-bold ${isPro ? "text-green-600" : isTip ? "text-indigo-600" : "text-red-600"}`}>{title}</h3>
                            {description && <div className='sm:mt-10'>
                                {Array.isArray(description) ? (
                                    description?.map((item: any, index: number) => {
                                        return <p key={index} className="text-sm text-gray-800 py-2 sm:p-2">{item}</p>;
                                    })
                                ) :
                                    <p className="text-sm text-gray-800 py-2 sm:p-2">{description}</p>
                                }
                            </div>}

                            {list?.length && <div className='mt-10'>
                                {list?.map((item, index) => (
                                    <div key={index} className={` flex px-5 gap-3 my-2 ${item?.subHead ? '' : 'text-lg font-medium'}`}>
                                        {item?.subHead ? <span className={`text-black  font-medium`}>{item?.subHead}</span> : ''}
                                        <p>{item?.point}</p>
                                    </div>
                                ))}
                            </div>}

                        </div>
                        <div className={`absolute flex top-[10px] md:top-3 right-0 md:right-1 -z-10  h-full items-start gap-4 p-4  rounded-2xl   shadow-sm w-[98%] ${isPro ? "bg-green-600/30" : isTip ? "bg-indigo-600/30" : "bg-red-600/30"}  `}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}