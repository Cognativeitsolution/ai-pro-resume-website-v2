import React from 'react'
import Image from 'next/image';

type ProsConsType = {
    title?: any
    description?: any
    icon?: any
    isPro?: any
}

export default function ProConsCard({ description, title, icon, isPro }: ProsConsType) {
    return (
        <>
            <div className='relative pt-10 mt-10'>
                <div className='flex items-end gap-4 absolute -top-1 left-6  z-20'>
                    <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full border border-green-600 bg-white z-10">
                        <Image src={icon} alt="blog detail" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isPro ? "text-green-600" : "text-red-600"}`}>{title}</h3>

                </div>
                <div className='relative'>
                    <div className={`flex items-start gap-4 p-4 rounded-2xl shadow-sm w-[97%] sm:w-[98%] h-[98%] z-20 ${isPro ? "bg-green-100 border border-green-600" : "bg-red-100 border border-red-600"} `}>
                        <div className='mt-10 '>
                            <p className="text-sm text-gray-800 mt-1 p-2">{description}</p>
                        </div>
                    </div>
                    <div className={`absolute flex top-[10px] md:top-3 right-0 md:right-1 -z-10  h-full items-start gap-4 p-4  rounded-2xl   shadow-sm w-[98%] ${isPro ? "bg-green-600/30" : "bg-red-600/30"}  `}>
                    </div>
                </div>
            </div>
            {/* <div className='relative pt-10 mt-10'>
                <div className='flex items-end gap-4 absolute -top-1 left-6  z-20'>
                    <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full border border-green-600 bg-white z-10">
                        <Image src={prosIcon} alt="blog detail" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600">Pros</h3>
                </div>

                <div className='relative'>
                    <div className=" flex items-start gap-4 p-4 border border-green-600 rounded-2xl shadow-sm w-[97%] sm:w-[98%] h-[98%] bg-green-100   z-20">
                        <div className='mt-10 '>
                            <p className="text-sm text-gray-800 mt-1 p-2">{prosDesc}</p>
                        </div>
                    </div>
                    <div className="absolute flex top-[10px] md:top-3 right-0 md:right-1 -z-10  h-full items-start gap-4 p-4  rounded-2xl   shadow-sm w-[98%] bg-green-600/30 ">
                    </div>
                </div>
            </div> */}

            {/* <div className='relative pt-10 mt-10'>
                <div className='flex items-end gap-4 absolute -top-1 left-6  z-20'>
                    <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full border border-red-600 bg-white z-10">
                        <Image src={consImg} alt="blog detail" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">Cons</h3>
                </div>
                <div className='relative'>
                    <div className=" flex items-start gap-4 p-4 border border-red-600 rounded-2xl shadow-sm w-[97%] sm:w-[98%] h-[98%] bg-red-100  z-20">
                        <div className='mt-10 '>
                            <p className="text-sm text-gray-800 mt-1 p-2">{consDesc}</p>
                        </div>
                    </div>
                    <div className="absolute flex top-[10px] md:top-3 right-0 md:right-1 -z-10  h-full items-start gap-4 p-4 rounded-2xl border   shadow-sm w-[98%] bg-red-600/30 "></div>
                </div>
            </div> */}

        </>
    )
}