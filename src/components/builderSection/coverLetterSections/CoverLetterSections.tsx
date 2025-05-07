'use client'
import { getTailwindTransitionClass } from '@/utils/transition';
import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react'

type data = {
    title?: any;
    secImg?: any;
    PositionImg1?: any;
    PositionImg2?: any;
    PositionImg3?: any;
}
type data2 = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    list: data[];
}
type propsType = {
    sectionDetail: data2;
};

const CoverLetterSections = ({ sectionDetail }: propsType) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-5 md:py-10">
            <div className="container mx-auto">
                <h3 className="font-normal text-[16px] md:text-[20px] text-center from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent">
                    {sectionDetail?.subTitle}
                </h3>
                <h2 className="font-semibold text-slate-950 text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
                    {sectionDetail?.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 md:gap-x-0 lg:gap-12 xl:grid-cols-4 mt-10">
                    {sectionDetail?.list?.map((item: any, index: any) => (
                        <div key={index} className="flex flex-col gap-2 hover:shadow-lg mx-auto text-center border bg-indigo-200/20 backdrop-blur-none py-3 shadow-md rounded-2xl">
                            <div>
                                <div className="h-[40px] mx-auto w-[40px] border-2 text-white border-white bg-slate-600 font-medium text-[20px] flex items-center justify-center rounded-full  shadow-2xl">
                                    <span>{index + 1}</span>
                                </div>
                                <div className='px-4 py-1 bg-indigo-400/80 mt-2 text-white shadow  font-medium text-[24px] capitalize rounded-sm'>
                                    <p className="text-[15px] font-base">{item?.title}</p>
                                </div>
                            </div>
                            <div className='relative w-full' ref={ref}>
                                <div className="w-[80%] mx-auto h-[280px]  flex justify-center shadow-sm">
                                    <Image className="h-full" src={item?.secImg} alt={item?.title} />
                                </div>
                                {index === 0 && <Image
                                    className={`absolute top-[43px] left-1/2 transform -translate-x-1/2   ${getTailwindTransitionClass(show, 'left', 1500)}`}
                                    src={item?.PositionImg1}
                                    alt={item?.title}
                                />}
                                {index === 1 && <Image
                                    className={`absolute bottom-[-25px] left-1/2 transform -translate-x-1/2   ${getTailwindTransitionClass(show, 'left', 1000)}`}
                                    src={item?.PositionImg1}
                                    alt={item?.title}
                                />}
                                {index === 2 && (
                                    <>
                                        <Image
                                            className={`absolute w-[230px] top-[80px] left-[-4px] ${getTailwindTransitionClass(show, 'left', 1000)}`}
                                            src={item?.PositionImg1}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[230px] top-[138px]  right-[-5px] ${getTailwindTransitionClass(show, 'right', 1500)}`}
                                            src={item?.PositionImg2}
                                            alt={item?.title}
                                        />
                                    </>
                                )}
                                {index === 3 && (
                                    <>
                                        <Image
                                            className={`absolute w-[90px] top-[4px] left-[80px] ${getTailwindTransitionClass(show, 'left', 1000)}`}
                                            src={item?.PositionImg1}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[90px] top-[75px]  right-[65px] ${getTailwindTransitionClass(show, 'right', 1500)}`}
                                            src={item?.PositionImg2}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[80px] bottom-[10px]  left-[65px] ${getTailwindTransitionClass(show, 'bottom', 1000)}`}
                                            src={item?.PositionImg3}
                                            alt={item?.title}
                                        />
                                    </>

                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoverLetterSections