import React, { ReactNode } from "react";
import Image from "next/image";
// =============
import tick from "media/images/doubleTick.webp";
import resumeCheck from "media/summaryGenerator/resumeCheck.webp";

interface FeatureCardProps {
    title: string | ReactNode;
    list?: string[];
}

interface PropsType {
    data: FeatureCardProps;
}

const ResumeEditor = ({ data }: PropsType) => {
    return (
        <section className='py-5 md:py-10 bg-[linear-gradient(90deg,rgba(15,23,42,1)_0%,rgba(15,23,42,0.8)_50%,rgba(15,23,42,1)_100%)]'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-0">
                    <div className="relative rounded-3xl overflow-hidden w-full md:w-[65%] mx-auto order-last lg:order-first">
                        <Image src={resumeCheck} alt="Resume Checker" />
                        <div className="absolute top-0 left-0 w-full h-full z-[2] overflow-hidden">
                            <div className="bg-emerald-600/30 w-full h-[40px] flex items-center absolute left-0 z-[1] transform scale-y-[1] transition-opacity opacity-100 duration-[800s] animate-scanner">
                            <div className="bg-emerald-700 w-full h-[3px]"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-indigo-100 font-semibold">
                            {data.title}
                        </h3>
                        <ul className="mt-5">
                            {data.list?.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[18px] text-indigo-100 mb-2">
                                    <Image
                                        src={tick}
                                        alt="check"
                                        width={16}
                                        height={16}
                                        className="mt-[7px]"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeEditor;
