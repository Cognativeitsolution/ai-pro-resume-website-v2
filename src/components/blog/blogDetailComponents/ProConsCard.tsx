import React from 'react'
import Image from 'next/image';

type ProsConsType = {
    title?: any
    description?: any
    icon?: any
    isPro?: any
    isTip?: any
}

export default function ProConsCard({ description, title, icon, isPro, isTip }: ProsConsType) {
    return (
        <>
            <div className='relative pt-10 mt-10'>
                <div className='flex items-end gap-4 absolute -top-1 left-6  z-20'>
                    <div className={`w-[90px] h-[90px] flex items-center justify-center rounded-full overflow-hidden border ${isPro ? "border-green-600" : isTip ? "border-indigo-600" : "border-red-600"} z-10`}>
                        <Image src={icon} alt="blog detail" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isPro ? "text-green-600" : isTip ? "text-indigo-600" : "text-red-600"}`}>{title}</h3>

                </div>
                <div className='relative'>
                    <div className={`flex items-start gap-4 p-4 rounded-2xl shadow-sm w-[97%] sm:w-[98%] h-[98%] z-20 ${isPro ? "bg-green-100 border border-green-600" : isTip ? "bg-indigo-100 border border-indigo-600" : "bg-red-100 border border-red-600"} `}>
                        <div className='mt-10 '>
                            {description && (
                                description.map((item: any, index: number) => {
                                    return <p key={index} className="text-sm text-gray-800 p-2">{item}</p>;
                                })
                            )}
                        </div>
                    </div>
                    <div className={`absolute flex top-[10px] md:top-3 right-0 md:right-1 -z-10  h-full items-start gap-4 p-4  rounded-2xl   shadow-sm w-[98%] ${isPro ? "bg-green-600/30" : isTip ? "bg-indigo-600/30" : "bg-red-600/30"}  `}>
                    </div>
                </div>
            </div>
        </>
    )
}