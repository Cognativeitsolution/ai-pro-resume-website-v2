import React from "react";
import Image from "next/image";

interface WorkProps {
    image: any;
    number: number;
    title: string;
    description: string;
}

const WorkCard = ({
    image,
    number,
    title,
    description,
}: WorkProps) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center text-[20px] font-semibold text-hamzaPrimary bg-indigo-400/20 w-[50px] h-[50px] rounded-full">{number}</div>
                <h3 className="text-[22px] leading-[32px] font-semibold text-center">
                    {title}
                </h3>
                <p className="text-[16px] text-center">
                    {description}
                </p>
                <div className="w-full rounded-xl overflow-hidden mt-2">
                    <Image src={image} alt="Skills" />
                </div>
            </div>
        </>
    );
};

export default WorkCard;