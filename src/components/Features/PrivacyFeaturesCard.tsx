import React from "react";
import Image from "next/image";

interface FeatureCardProps {
    image: any;
    title: string;
    description: string;
    list?: string[];
    description2: string;
    reverse?: boolean;
}

const PrivacyFeaturesCard = ({
    image,
    title,
    description,
    list,
    description2,
    reverse,
}: FeatureCardProps) => {
    return (
        <>
            <div className={`grid grid-cols-12 items-center gap-y-4 xl:gap-20 mb-6`}>
                {reverse ? <div className={`col-span-12 xl:col-span-6 order-last flex justify-center xl:justify-start xl:order-first`}>
                    <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px]">
                        <Image src={image} alt={title} className="h-auto" />
                    </div>
                </div> : null}

                <div className={`col-span-12 xl:col-span-6 ${reverse ? "ms-auto w-full" : ""}`}>
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
                {reverse ? null : <div className={`col-span-12 xl:col-span-6 flex justify-center`}>
                    <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px] ">
                        <Image src={image} alt={title} className="h-auto" />
                    </div>
                </div>}
            </div>
        </>
    );
};

export default PrivacyFeaturesCard;