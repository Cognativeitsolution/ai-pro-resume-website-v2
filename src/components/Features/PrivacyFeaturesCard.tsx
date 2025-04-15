import React from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";

interface FeatureCardProps {
    image: any;
    title: string;
    description: string;
    buttonText: string;
    btn?: boolean;
    reverse?: boolean;
}

const PrivacyFeaturesCard = ({
    image,
    title,
    description,
    buttonText,
    btn,
    reverse,
}: FeatureCardProps) => {



    return (
        <>
            <div className={`grid grid-cols-12 items-center gap-y-4 lg:gap-16 xl:gap-20 mb-6 lg:mb-0`}>
                {reverse ? <div className={`col-span-12 lg:col-span-6 order-last flex justify-center lg:justify-start lg:order-first`}>
                    <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px]">
                        <Image src={image} alt={title} className="h-auto" />
                    </div>
                </div> : null}

                <div className={`col-span-12 lg:col-span-6 ${reverse ? "ms-auto" : ""}`}>
                    <h3 className="text-[20px] sm:text-[25px] md:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[45px] font-semibold mb-2">
                        {title}
                    </h3>
                    {Array.isArray(description) ? (
                        description.map((para: string, idx: number) => (
                            <p key={idx} className="text-[12px] sm:text-[14px] md:text-[16px] text-justify md:text-left mb-2">
                                {para}
                            </p>
                        ))
                    ) : (
                        <p className="text-[12px] sm:text-[14px] md:text-[16px] text-justify md:text-left">
                            {description}
                        </p>
                    )}
                    {btn && (
                        <div className={`col-span-12 lg:col-span-6 flex justify-center`}>
                            <CTA
                                btn
                                text={buttonText}
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        </div>
                    )}
                </div>
                {reverse ? null : <div className={`col-span-12 lg:col-span-6 flex justify-center`}>
                    <div className="flex items-center lg:min-w-[470px] xl:min-w-[550px] ">
                        <Image src={image} alt={title} className="h-auto" />
                    </div>
                </div>}
            </div>
        </>
    );
};

export default PrivacyFeaturesCard;