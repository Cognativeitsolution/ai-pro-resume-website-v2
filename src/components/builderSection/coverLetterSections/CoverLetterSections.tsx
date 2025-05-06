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
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.3 }
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10 xl:grid-cols-4 mt-8 md:mt-16">
                    {sectionDetail?.list?.map((item: any, index: any) => (
                        <div key={index} className="flex flex-col gap-4 text-center">
                            <div>
                                <div className="h-[52px] mx-auto w-[52px] border-2 text-slate-600  bg-slate-600/20  font-semibold text-[28px] flex items-center justify-center rounded-full  shadow-2xl">
                                    <span>{index + 1}</span>
                                </div>
                                <p className="text-[15px] font-base mt-2">{item?.title}</p>
                            </div>
                            <div className='relative' ref={ref}>
                                <div className="w-[80%] mx-auto h-[300px]">
                                    <Image className="h-full" src={item?.secImg} alt={item?.title} />
                                </div>
                                {index === 0 && <Image
                                    className={`absolute top-[43px] right-[10px]  ${getTailwindTransitionClass(show, 'left')}`}
                                    src={item?.PositionImg1}
                                    alt={item?.title}
                                />}
                                {index === 1 && <Image
                                    className={`absolute bottom-[-25px] right-[9px]  ${getTailwindTransitionClass(show, 'left')}`}
                                    src={item?.PositionImg1}
                                    alt={item?.title}
                                />}
                                {index === 2 && (
                                    <>
                                        <Image
                                            className={`absolute w-[230px] top-[80px] left-[-4px] ${getTailwindTransitionClass(show, 'left')}`}
                                            src={item?.PositionImg1}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[230px] top-[138px]  right-[5px] ${getTailwindTransitionClass(show, 'right')}`}
                                            src={item?.PositionImg2}
                                            alt={item?.title}
                                        />
                                    </>
                                )}
                                {index === 3 && (
                                    <>
                                        <Image
                                            className={`absolute w-[90px] top-[4px] left-[80px] ${getTailwindTransitionClass(show, 'left')}`}
                                            src={item?.PositionImg1}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[90px] top-[75px]  right-[65px] ${getTailwindTransitionClass(show, 'right')}`}
                                            src={item?.PositionImg2}
                                            alt={item?.title}
                                        />
                                        <Image
                                            className={`absolute w-[80px] bottom-[10px]  left-[65px] ${getTailwindTransitionClass(show, 'bottom')}`}
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