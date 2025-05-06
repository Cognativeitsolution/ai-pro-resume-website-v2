import React from "react";
import Image from "next/image";
// =============
import tick from "media/images/doubleTick.webp";

interface FeatureCardProps {
    image: any;
    video: any;
    title: string;
    description: string;
    list?: string[];
    description2: string;
    arrow: any;
    reverse?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

const SummaryFeaturesCard = ({
    image,
    video,
    title,
    description,
    list,
    description2,
    arrow,
    reverse,
    isFirst,
    isLast,

}: FeatureCardProps) => {
    return (
        <>
            <div className={`grid grid-cols-12 items-center gap-y-4 xl:gap-20 ${isLast ? "mb-0" : "mb-10"}`}>
                {reverse ? <div className={`col-span-12 lg:col-span-5 order-last flex justify-center xl:justify-start lg:order-first`}>
                    <div className="flex items-center rounded-xl overflow-hidden w-full md:w-2/4 mx-auto lg:w-full">
                        <video
                            src={video}
                            autoPlay
                            loop
                        />
                    </div>
                </div> : null}
                {reverse ? <div className={`col-span-1`}></div> : null}
                <div className={`col-span-12 lg:col-span-6 ${reverse ? "ms-auto w-full" : ""} relative`}>
                    <h3 className="text-[20px] sm:text-[25px] lg:text-[35px] leading-[30px] sm:leading-[35px] lg:leading-[45px] font-semibold mb-2">
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
                        <ul className="mt-3">
                            {list.map((list: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-[16px] text-left mb-2">
                                    <Image
                                        src={tick}
                                        alt="check"
                                        width={16}
                                        height={16}
                                        className="mt-[7px]"
                                    />
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
                    {image &&
                        <div className="w-[85%] mt-10 ml-auto">
                            <Image src={image} alt="Skills" />
                        </div>
                    }
                    {/* Arrow Image */}
                    {arrow && (
                        <div className={`hidden lg:block absolute ${isFirst ? "-top-10 -right-20 xl:-right-36 rotate-45" : isLast ? "top-56 xl:top-24 -right-10 xl:-right-32 rotate-12" : "-top-10 xl:bottom-40 -left-20 xl:-left-40 rotate-12 w-[20%] xl:w-[22%]"}`}>
                            <Image src={arrow} alt="Skills" />
                        </div>
                    )}
                </div>
                {reverse ? null : <div className={`col-span-1`}></div>}
                {reverse ? null :
                    <div className={`col-span-12 lg:col-span-5 flex justify-center`}>
                        <div className={`flex items-center ${isFirst ? "rounded-full" : "rounded-xl"} overflow-hidden w-full md:w-2/4 mx-auto lg:w-full`}>
                            <video
                                src={video}
                                autoPlay
                                loop
                            />
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default SummaryFeaturesCard;