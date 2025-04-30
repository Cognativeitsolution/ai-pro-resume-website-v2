"use client";
import { CTA } from "@/components";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type ParserContentData = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
};

type PropsType = {
    data: ParserContentData;
    sections?: { title: string; description: ReactNode; tab?: any[] }[];
};

export default function ParserContent({ data, sections = [] }: PropsType) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const isScrolling = useRef(false);
    const scrollTimeout = useRef<any>();
    const [activeTab, setActiveTab] = useState(0);

    // Generate sample sections if none provided
    const allSections = [
        {
            title: "What is a Resume Parser?",
            description: (
                <p>
                    It is a smart feature that scans your uploaded resume and extracts important information such as your summary, skills, language, experience, personal information, and qualifications. It then automatically settles these details into the corresponding sections of your new resume format. This means you can focus on personalizing your resume while the parser handles the rest.
                </p>
            )
        },
        {
            title: "How to Use the Resume Parser",
            description: (
                <p>
                    To use the Resume Parser, follow the steps below:
                </p>
            ),
            tab: [
                {
                    title: "Import Resume",
                    list: [
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                    ]
                },
                {
                    title: "Sign Up & Login",
                    list: [
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                    ]
                },
                {
                    title: "Customization",
                    list: [
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                    ]
                },
                {
                    title: "Download Your Resume",
                    list: [
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                        "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                    ]
                },
            ]
        },
        {
            title: "What is a Resume Parser?",
            description: (
                <p>
                    It is a smart feature that scans your uploaded resume and extracts important information such as your summary, skills, language, experience, personal information, and qualifications. It then automatically settles these details into the corresponding sections of your new resume format. This means you can focus on personalizing your resume while the parser handles the rest.
                </p>
            )
        },
        {
            title: "What is a Resume Parser?",
            description: (
                <p>
                    It is a smart feature that scans your uploaded resume and extracts important information such as your summary, skills, language, experience, personal information, and qualifications. It then automatically settles these details into the corresponding sections of your new resume format. This means you can focus on personalizing your resume while the parser handles the rest.
                </p>
            )
        },
        // You can continue adding other sections here if needed
    ];

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

                <div className="relative grid lg:grid-cols-12 gap-6 xl:gap-8 mt-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 py-2 pr-4">
                            <div className='p-4 xl:p-8 rounded-lg border-white border bg-indigo-200/20 backdrop-blur-none shadow-md '>
                                <h3 className='text-xl mb-4 font-semibold text-center'>What is????</h3>
                                <div className='divide-y-[1.5px] divide-[#ffffff] flex flex-col'>
                                    {allSections.map((section, i) => (
                                        <div key={i}>
                                            <button
                                                onClick={() => handleScroll(i)}
                                                className={`flex py-2 !my-1 last:mb-0 gap-2 cursor-pointer items-center ${i === activeIndex ? 'bg-PrimaryDark rounded-lg ps-5 text-white w-full' : ''}`}
                                            >
                                                <span className='text-lg font-light'><FaAngleDoubleRight /></span>
                                                <p className='px-3'>{section.title}</p>

                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* <div className="space-y-10"> */}
                        {allSections.map((section, i) => (
                            <article
                                key={i}
                                ref={(el) => { (sectionRefs.current[i] = el) }}
                                className="scroll-mt-32 h-auto border p-6 mb-10"
                                id={`section-${i}`}
                            >
                                <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
                                <div className="prose prose-blue max-w-none">{section.description}</div>

                                {section?.tab && (
                                    <div className="mt-6 md:mt-8">
                                        {/* Tabs UI (Just Indicators) */}
                                        <div className="flex items-center justify-center gap-3 flex-wrap mb-5">
                                            {section.tab.map((tabItem, index) => (
                                                <React.Fragment key={index}>
                                                    <button
                                                        className={`px-4 py-2 transition-colors ${activeTab === index
                                                            ? "text-[#6A55DD] font-bold"
                                                            : "text-slate-900 font-semibold"
                                                            }`}
                                                        disabled
                                                    >
                                                        Step {index + 1}
                                                    </button>

                                                    {/* Show the icon between steps except after the last one */}
                                                    {index < section.tab.length - 1 && (
                                                        <FaAngleDoubleRight className="text-slate-900 text-sm mt-1" />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>

                                        {/* Tab content */}
                                        {section.tab[activeTab] && (
                                            <div className="grid grid-cols-1 gap-5 my-5">
                                                <div className="flex flex-col  gap-5 cursor-pointer w-9/12 mx-auto">
                                                    <h3 className="text-xl font-semibold text-gray-800">
                                                        {section.tab[activeTab].title}
                                                    </h3>
                                                    <ul className="list-disc pl-5 text-gray-700 border">
                                                        {section.tab[activeTab].list.map((li, idx) => (
                                                            <li key={idx}>{li}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        {/* Next Button */}
                                        <div className="mt-10 flex justify-center">
                                            {activeTab < section.tab.length - 1 ? (
                                                <CTA
                                                    btn
                                                    text="Next Step"
                                                    handleClick={() => setActiveTab((prev) => prev + 1)}
                                                    bgColor="bg-white hover:bg-primary"
                                                    txtColor="text-hamzaPrimary hover:text-white"
                                                    border="border-2 border-hamzaPrimary"
                                                />
                                            ) : (
                                                <CTA
                                                    btn
                                                    text="Go to Next Section"
                                                    handleClick={() => {
                                                        setActiveTab(0); // Reset tab index
                                                        // setActiveSectionIndex((prev: any) => Math.min(prev + 1, allSections.length - 1));
                                                    }}
                                                    bgColor="bg-white hover:bg-primary"
                                                    txtColor="text-hamzaPrimary hover:text-white"
                                                    border="border-2 border-hamzaPrimary"
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))}

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}