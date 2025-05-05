import React from "react";
import Image from "next/image";

interface FeatureCardProps {
    video: any;
    title: string;
    description: string;
    list?: string[];
    description2: string;
    reverse?: boolean;
}

const SummaryFeaturesCard = ({
    video,
    title,
    description,
    list,
    description2,
    reverse,
}: FeatureCardProps) => {
    return (
        <>
            <div className={`grid grid-cols-12 gap-y-4 xl:gap-20 mb-10`}>
                {reverse ? <div className={`col-span-12 xl:col-span-4 order-last flex justify-center xl:justify-start xl:order-first`}>
                    <div className="flex items-center rounded-xl overflow-hidden">
                        <video
                            src={video}
                            autoPlay
                            loop />
                    </div>
                </div> : null}

                <div className={`col-span-12 xl:col-span-8 ${reverse ? "ms-auto w-full" : ""}`}>
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
                {reverse ? null : <div className={`col-span-12 xl:col-span-4 flex justify-center`}>
                    <div className="flex items-center rounded-xl overflow-hidden">
                        <video
                            src={video}
                            autoPlay
                            loop />
                    </div>
                </div>}
            </div>
        </>
    );
};

export default SummaryFeaturesCard;