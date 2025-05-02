"use client";
import { CTA } from "@/components";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import check_1 from "media/images/check_1.webp";
import Tailor from "@/components/dynamicSection/Tailor";

type SemiContent = {
    semiTitle?: string;
    semiDescription?: ReactNode;
    list?: string[];
};

type TabContent = {
    title: string;
    description?: ReactNode;
    list?: string[];
};

type ParserContentList = {
    title: string;
    description: ReactNode;
    semi?: SemiContent[];
    tab?: TabContent[];
    isTailor?: ReactNode
};

type ParserContentData = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    sections?: ParserContentList[];
};

type PropsType = {
    data: ParserContentData;
};

export default function ParserContent({ data }: PropsType) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const isScrolling = useRef(false);
    const scrollTimeout = useRef<any>(null);
    const [activeTab, setActiveTab] = useState(0);

    const handleScroll = (index: number) => {
        clearTimeout(scrollTimeout.current);
        isScrolling.current = true;
        setActiveIndex(index);

        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Changed to "start" to align with top
        });

        scrollTimeout.current = setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                        const index = sectionRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5, // More strict threshold
            }
        );

        sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            observer.disconnect();
            clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <section className="py-5 md:py-10 relative">
            <div className="container mx-auto px-4">
                <h3 className="font-normal text-[16px] md:text-[20px] text-center from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent">
                    {data.subTitle}
                </h3>
                <h2 className="font-semibold text-slate-950 text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
                    {data?.title}
                </h2>
                <p className="font-normal text-[16px] lg:text-[18px] text-center mt-4">
                    {data?.description}
                </p>

                <div className="relative grid lg:grid-cols-12 gap-6 xl:gap-8 mt-8 md:mt-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 py-2 pr-4">
                            <div className='p-4 xl:p-8 rounded-lg border-white border bg-indigo-200/20 backdrop-blur-none shadow-md '>
                                <h3 className='text-xl mb-4 font-semibold text-center'>About Resume Parser</h3>
                                <div className='divide-y-[1.5px] divide-[#ffffff] flex flex-col'>
                                    {data?.sections?.map((section: any, i: any) => (
                                        <React.Fragment key={i}>
                                            <button
                                                onClick={() => handleScroll(i)}
                                                className={`flex py-2 !my-1 last:mb-0 gap-2 cursor-pointer items-center ${i === activeIndex ? 'bg-PrimaryDark rounded-lg ps-5 text-white w-full' : ''}`}
                                            >
                                                <span className='text-lg font-light'><FaAngleDoubleRight /></span>
                                                <p className='px-3'>{section.title}</p>

                                            </button>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">

                        {data?.sections?.map((section: any, i: any) => (
                            <article
                                key={i}
                                ref={(el) => { (sectionRefs.current[i] = el) }}
                                className="scroll-mt-32 h-auto py-2"
                                id={`section-${i}`}
                            >
                                <h2 className="text-2xl font-semibold text-gray-950 mb-2">{section.title}</h2>
                                <div className="prose prose-blue max-w-none">{section.description}</div>
                                {section?.semi && section.semi.map((item: any, index: any) => (
                                    <div key={index} className="my-2">
                                        <div className='flex gap-3 text-hamzaPrimary text-xl font-semibold mb-2'>
                                            <div className=''>{index + 1 < 10 ? `0${index + 1}` : index + 1} <span className="ps-1">{item.semiTitle}</span></div>
                                        </div>
                                        <div className="prose prose-blue max-w-none ">{item.semiDescription}</div>
                                        {item?.list &&
                                            <ul className="mt-2 ">
                                                {item.list.map((item: any, index: any) => (
                                                    <li key={index} className="flex items-start gap-4">
                                                        <span className="min-w-[18px]">
                                                            <Image
                                                                src={check_1}
                                                                alt="bullet"
                                                                width={12}
                                                                height={12}
                                                                className="mt-[5px]"
                                                            />
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                ))}

                                {/* {section.isTailor && <Tailor />} */}

                                {section?.tab && (
                                    <div className="">
                                        <div className="flex items-center gap-1 sm:gap-3 flex-wrap border-b justify-center">
                                            {section.tab.map((tabItem: any, index: any) => (
                                                <React.Fragment key={index}>
                                                    <button
                                                        className={`px-4 py-2 first:ps-0 transition-colors ${activeTab === index
                                                            ? "text-[#6A55DD] font-semibold"
                                                            : "text-slate-900 font-semibold"
                                                            }`}
                                                        disabled
                                                    >
                                                        <span className="sm:hidden block">{activeTab === index && "Step"} {index + 1}</span>
                                                        <span className="hidden sm:block">Step {index + 1}</span>
                                                    </button>

                                                    {index < section.tab.length - 1 && (
                                                        <FaAngleDoubleRight className="text-slate-900 text-sm " />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>


                                        {section.tab[activeTab] && (
                                            <div className="grid grid-cols-1 mt-2 mb-5">
                                                <div className="cursor-pointer">
                                                    <div className='flex gap-3 text-hamzaPrimary text-xl font-semibold mb-2'>
                                                        <div className='hidden sm:block'>{section.tab[activeTab].title}</div>
                                                    </div>
                                                    {section.tab[activeTab].description &&
                                                        <div className="prose prose-blue max-w-none">{section.tab[activeTab].description}</div>
                                                    }

                                                    {section?.tab[activeTab]?.list &&
                                                        <ul className="">
                                                            {section?.tab[activeTab]?.list?.map((li: any, idx: any) => (
                                                                <li key={idx} className="flex items-start gap-4">
                                                                    <span className="min-w-[18px]">
                                                                        <Image
                                                                            src={check_1}
                                                                            alt="bullet"
                                                                            width={12}
                                                                            height={12}
                                                                            className="mt-[5px]"
                                                                        />
                                                                    </span>
                                                                    <p>{li}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    }
                                                </div>
                                            </div>
                                        )}

                                        {/* Next Button */}
                                        <div className="flex justify-center mt-4">
                                            {activeTab < section.tab.length - 1 ? (
                                                <CTA
                                                    btn
                                                    text="Next"
                                                    handleClick={() => setActiveTab((prev) => prev + 1)}
                                                    bgColor="bg-transparent hover:bg-primary"
                                                    txtColor="text-hamzaPrimary hover:text-white"
                                                    border="border-2 border-hamzaPrimary"
                                                />
                                            ) : (
                                                <CTA
                                                    btn
                                                    text="Finish"
                                                    handleClick={() => {
                                                        setActiveTab(0); // Reset tab index
                                                    }}
                                                    bgColor="bg-transparent hover:bg-primary"
                                                    txtColor="text-hamzaPrimary hover:text-white"
                                                    border="border-2 border-hamzaPrimary"
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))}

                    </div>
                </div>
            </div>
        </section >
    );
}