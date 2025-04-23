'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import verticleTabBg from 'media/images/verticleTabBg.webp'
import IconContact from 'media/images/Icon.webp'
import { BreadCrumbs, ProConsCard, QuickTips, DynVerticalTabs, CollapseTab, TemplatePoint, CTA } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import TipPro from 'media/images/TipPro.webp'

type PointData = {
    icon: any
    para: string
}

type DynVerticalTabsData = {
    id?: string
    name?: string
    description?: React.ReactNode
    points?: PointData[]
    gridImages?: any[]
    quickTip?: boolean
};

type ResumeDetailData = {
    prosItemsData?: any,
    consItemsData?: any,
    CollapseTab?: any,
    templatePoint?: any,
    TemplatePointTab?: any,
    ResumeFormateTips?: any,
    DynVerticalTabsData?: DynVerticalTabsData[]
    TemplateData?: any,
    headingTab?: any[]
};

type propsType = {
    data: ResumeDetailData;
};

export default function ResumeFormatComp(props: propsType) {
    const { data } = props
    const [sectionId, setSectionId] = useState("");

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
                                    src={verticleTabBg}
                                    alt="Resume benefits"
                                />
                                <div className='left-[13%] bottom-12 absolute text-yellow-100'>
                                    <h2 className='text-3xl font-semibold'>Need Help</h2>
                                    <div className='flex text-center items-center gap-4 mt-4'>
                                        <Image
                                            src={IconContact}
                                            alt="Resume benefits"
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

                        <div className='scroll-mt-32' id='head1'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                3 Most Popular Resume Formats
                            </h2>
                            <CollapseTab data={data.CollapseTab} />
                        </div>


                        {data?.TemplatePointTab?.map((items: any, index: number) => (
                            <div className='scroll-mt-32 mb-8' id={`head${index + 2}`} key={index}>
                                <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold ">
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
                                <div className=''>
                                    <ProConsCard
                                        title={items?.prosItemsData?.title}
                                        icon={items?.prosItemsData?.icon}
                                        description={items?.prosItemsData?.description}
                                        isPro={true}
                                    />
                                </div>
                                <div className='pt-8'>
                                    <ProConsCard
                                        title={items?.consItemsData?.title}
                                        icon={items?.consItemsData?.icon}
                                        description={items?.consItemsData?.description}

                                    />
                                </div>
                            </div>
                        ))}

                        <div className='scroll-mt-32 pb-4' id='head5'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold ">
                                Resume Formatting Tips For Writing A Perfect Resume
                            </h2>

                            {data?.ResumeFormateTips?.map((items: any, index: number) => (
                                <div className='pt-2' key={index}>
                                    <div className='flex gap-3 text-hamzaPrimary text-2xl pt-2'>
                                        <div>0{1 + index}</div>
                                        <h5 className="">{items.heading}</h5>
                                    </div>
                                    <p className="text-base pl-10">
                                        {items.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='scroll-mt-32' id='head6'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                Resume Templates That You Can Use To Grab an Employer’s Attention
                            </h2>
                            <p className="text-base mb-2">
                                Are you looking for generic resume formats that have eye-catching designs and are also ATS-friendly? We mention some resumes you can create on our AI-powered resume builder, along with many customization options. Rather than starting from scratch, you can use remarkable resume templates as well as professional cover letter templates to get noticed by your employers and increase your chances of securing more interviews.
                            </p>
                            <p className="text-base">
                                You can scroll through our list of well-designed resume templates and select one that you prefer and that matches your industry.
                            </p>
                            {data?.TemplateData?.map((items: any, index: number) => (
                                <div className='' key={index}>
                                    <h5 className="text-[20px] md:text-[25px] lg:text-[30px] leading-[30px] md:leading-[35px] lg:leading-[40px] py-2">{items.heading}</h5>
                                    <p className="text-base">
                                        {items.description}
                                    </p>
                                    <div className='max-w-[380px] mx-auto py-4  '>
                                        <Image src={items.image} alt={items.heading} className='rounded-lg border overflow-hidden shadow-md' />
                                    </div>
                                    <div className="flex justify-center my-6 ">
                                        <CTA
                                            btn
                                            text="Create Resume"
                                            bgColor="bg-primary hover:bg-PrimaryDark"
                                            txtColor="text-white"
                                            border="border-0"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='scroll-mt-32' id='head7'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                The Bottom Line
                            </h2>
                            <p className="text-[16px] lg:text-[18px] text-justify">
                                It is important to consider the level of your career and then select a generic resume format based on that. The three best format for resume tell a different story about you to the employers. So be wise about what you want your employer to notice: is it your long history of consistent work experience, your diverse skill sets that you gained as a career changer, or both? With the right resume format and the best cover letter format, you can significantly increase your chances of getting your dream job.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
