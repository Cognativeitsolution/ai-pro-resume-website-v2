'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import blogAiImage from 'media/images/AiBlogImg.webp'
import IconContact from 'media/images/Icon.webp'
import { BreadCrumbs, ProConsCard, QuickTips, DynVerticalTabs, CollapseTab, TemplatePoint } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import TipPro from 'media/images/TipPro.webp'

type PiontData = {
    icon: any
    para: string
}

type DynVerticalTabsData = {
    id?: string
    name?: string
    description?: React.ReactNode
    points?: PiontData[]
    gridImages?: any[]
    quickTip?: any
};
type TemplatePointTabItems = {
    heading?: string
    description?: React.ReactNode
    // points?: PiontData[]
    // gridImages?: any[]
    // quickTip?: any
};

type BreadCrumbsItems = {
    label?: string
    href?: string
};

type BlogDetailData = {
    prosItemsData?: any,
    consItemsData?: any,
    // breadCrumbsItems?: BreadCrumbsItems[]
    CollapseTab?: any,
    templatePoint?: any,
    TemplatePointTab?: any,
    DynVerticalTabsData?: DynVerticalTabsData[]
    headingTab?: any[]
};

type propsType = {
    data: BlogDetailData;
};

export default function ResumeFormatComp(props: propsType) {
    const { data } = props
    const [sectionId, setSectionId] = useState("");
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        setSectionId("#head1")
    }, [])
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <DynBreadCrumbs />
                <div className='relative grid lg:grid-cols-12 gap-4 xl:gap-6'>

                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <DynVerticalTabs heading="Table Of Content"
                                tabsData={data.DynVerticalTabsData}
                                setSectionId={setSectionId} />
                            <div className="relative  mt-4 hidden lg:block"
                            >
                                <Image
                                    src={blogAiImage}
                                    alt="Blog benefits"
                                />
                                <div className='left-[13%] bottom-12 absolute text-yellow-100'>
                                    <h2 className='text-3xl font-semibold'>Need Help</h2>
                                    <div className='flex text-center items-center gap-4 mt-4'>
                                        <Image
                                            src={IconContact}
                                            alt="Blog benefits"
                                            width={70}
                                            height={70}
                                        />
                                        <div className='flex flex-col items-start'>
                                            <p className='text-lg font-light'> Support </p>
                                            <p className='text-xl'> +125 (405) 555-0128 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-7 xl:col-span-8'>

                        <div className='' id='head0'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                3 Most Popular Resume Formats
                            </h2>
                            <CollapseTab data={data.CollapseTab} />
                        </div>


                        {data?.TemplatePointTab?.map((items: any, index: number) => (
                            <div className='mb-8' id={`head${index + 1}`} key={index}>
                                <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                    {items.heading}
                                </h2>
                                <p className="text-[16px] lg:text-[18px] text-justify">
                                    {items.description}
                                </p>
                                <ProConsCard
                                    title={items.titlePro}
                                    icon={TipPro}
                                    description={items.descriptionPro}
                                    isTip={true}
                                />
                                <TemplatePoint data={items.TemplatePointTab} />

                                <ProConsCard
                                    title={items?.prosItemsData?.title}
                                    icon={items?.prosItemsData?.icon}
                                    description={items?.prosItemsData?.description}
                                    isPro={true}
                                />

                                <ProConsCard
                                    title={items?.consItemsData?.title}
                                    icon={items?.consItemsData?.icon}
                                    description={items?.consItemsData?.description}

                                />
                            </div>
                        ))}
                        {/* <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                Reverse-Chronological Resume Format
                            </h2>
                            <p className="text-[16px] lg:text-[18px] text-justify">
                                A reverse chronological resume format is also known as a chronological resume format. It focuses on your recent working experience, followed by the rest of your job experience in reverse order.
                            </p>
                            <ProConsCard
                                title="PRO TIP"
                                icon={TipPro}
                                description=" This format is the most popular one out of all formats. Most job seekers start with this one."
                                isTip={true}
                            />
                            <TemplatePoint data={data.CollapseTab} /> */}


                    </div>
                </div>
            </div>
        </section>
    )
}
