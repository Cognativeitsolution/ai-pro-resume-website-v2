'use client'
import { getTailwindTransitionClass } from "@/utils/transition";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface FeatureCardProps {
    title: string;
    description: string;
    list?: string[];
    description2: string;
    reverse?: boolean;
    isBuilder?: boolean;
    builderImg?: any
}

const BuilderFeaturesCard = ({
    title,
    description,
    list,
    description2,
    reverse,
    isBuilder,
    builderImg
}: FeatureCardProps) => {

    const refRight = useRef(null);
    const refLeft = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow(entry.isIntersecting);
            },
            { threshold: 0.7 }
        );
        if (refRight.current) observer.observe(refRight.current);
        if (refLeft.current) observer.observe(refLeft.current);
        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className={`grid grid-cols-12 items-center gap-y-4 xl:gap-20 mb-6`}>
                {reverse || isBuilder && <>
                    <div className={`col-span-12 lg:col-span-6 order-last flex flex-col justify-center lg:justify-start lg:order-first `}>
                        <div ref={refLeft} className="min-h-[320px] sm:h-[400px] md:h-[480px] lg:h-[350px] xl:h-[380px] 2xl:h-[450px] relative">
                            {builderImg?.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={index}>
                                        <div
                                            className={`${item?.className} ${getTailwindTransitionClass(show, item?.direction, item?.duration)}`}
                                        >
                                            <Image
                                                src={item?.img}
                                                alt={`image`}
                                                className=""
                                            />
                                        </div>
                                        {
                                            item?.isShadow && (
                                                <div className={`absolute -z-10 w-[87%] sm:w-[60%]  lg:w-[60%] h-[34%] sm:h-[28%]  md:h-[32%] lg:h-[34%] top-[18%] left-[10%] bg-[#47445a] opacity-20 rounded-[10px] blur-[1px]  ${getTailwindTransitionClass(show, item?.direction, item?.duration)}`}>
                                                </div>
                                            )
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>}

                <div className={`col-span-12 lg:col-span-6 ${reverse ? "ms-auto w-full" : ""}`}>
                    <h3 className="text-[20px] sm:text-[25px] md:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[45px] font-semibold mb-2">
                        {title}
                    </h3>
                    {Array.isArray(description) ? (
                        description?.map((para: string, idx: number) => (
                            <p key={idx} className="text-[16px] text-justify md:text-left mb-2">
                                {para}
                            </p>
                        ))
                    ) : (
                        <p className="text-[16px] text-justify md:text-left">
                            {description}
                        </p>
                    )}
                    {list && (
                        <ul className="mt-3 list-disc pl-4">
                            {list.map((list: string, idx: number) => (
                                <li key={idx} className="text-[16px] text-left mb-2">
                                    {list}
                                </li>
                            ))}
                        </ul>
                    )}
                    {description2 && (
                        <p className="text-[16px] text-justify md:text-left">
                            {description2}
                        </p>
                    )}
                </div>

                {!reverse || isBuilder && <div className={`col-span-12  lg:col-span-6 flex flex-col justify-center`}>
                    <div ref={refRight} className="min-h-[320px] sm:h-[400px] md:h-[480px] lg:h-[350px] xl:h-[380px] 2xl:h-[450px] relative">
                        {builderImg?.map((item: any, index: number) => {

                            return (
                                <div
                                    key={index}>
                                    <div
                                        className={`${item?.className}  ${getTailwindTransitionClass(show, item?.direction, item?.duration)}`}
                                    >
                                        <Image
                                            src={item?.img}
                                            alt={`image`}
                                            className="w-[480px] h-auto "
                                        />
                                    </div>


                                </div>
                            );
                        })}
                    </div>
                </div>
                }
            </div >
        </>
    );
};

export default BuilderFeaturesCard;