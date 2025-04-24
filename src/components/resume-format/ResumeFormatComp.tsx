'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import verticleTabBg from 'media/images/verticleTabBg.webp'
import { ProConsCard, DynVerticalTabs, CollapseTab, TemplatePoint, CTA } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import TipPro from 'media/images/TipPro.webp'
import TempBg from 'media/resume_template_images/Template_24.webp'
import DynPoints from '../dynamic-pages/DynPoints';

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
    DynVerticalTabsData?: DynVerticalTabsData[],
    BlogIncludedPoints?: any,
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
                            <div className="mt-4 hidden lg:block relative z-10"
                            >
                                <Image
                                    src={verticleTabBg}
                                    alt="Resume benefits"
                                />
                                <div className='absolute z-20 top-0 w-full h-full flex flex-col items-center justify-center'>
                                    <div className='flex items-center justify-center gap-4 border-b py-6'>
                                        <div className=''>
                                            <Image
                                                src={TempBg}
                                                alt="Resume benefits"
                                                height={220}
                                                className='rounded-md'


                                            />
                                        </div>
                                        <div className='flex flex-col items-center justify-center w-52'>
                                            <p className='text-3xl font-semibold text-white'> Build your resume
                                                in 15 Minutes </p>
                                            <p className='text-sm text-white'> Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for.</p>
                                        </div>
                                    </div>
                                    <div className='py-6'>
                                        <CTA
                                            btn
                                            text="Create Resume"
                                            bgColor="bg-primary hover:bg-PrimaryDark"
                                            txtColor="text-white"
                                            border="border-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-7 xl:col-span-8'>

                        <div className='scroll-mt-32' id='head1'>
                            <h2 className="text-[20px] md:text-[20px] lg:text-[20px] leading-[36px] md:leading-[40px] lg:leading-[50px] mb-2">
                                Best Resume Formats to Impress in 2025
                            </h2>
                            <p className='text-base'>
                                The first thing you choose when making a resume is a resume format. Selecting the resume format is important as it reflects the story of your professional experience to the employers.  This will also affect the chances of you getting your dream job.
                            </p>
                            <p className='mt-3 text-base'>But you must be wondering which resume would work the best for you? In this guide, we will assist you in deciding the best generic resume format so you can have a roadmap to write your resume further</p>

                            <ProConsCard
                                title="PRO TIP"
                                icon={TipPro}
                                description="Moreover, to grab the attention of your employers, you need to check all the elements of the best format for resume. These elements include a clear and well-structured resume. Such a resume will increase your chances of getting an interview. "
                                isTip={true}
                            />
                        </div>

                        <div className='scroll-mt-32' id='head2'>
                            <h2 className="text-[22px] text-center border-b-2 md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-medium mb-4 capitalize mt-8">
                                This blog will include
                            </h2>
                            <DynPoints includedPoints={data.BlogIncludedPoints} />

                            <ProConsCard
                                title="Need A resume ASAP?"
                                icon={TipPro}
                                description="Our AI-powered resume builder has features that can help you write a resume in time. With more than 30+ professional resume templates, you can choose the one that is suitable for your industry and begin creating a perfect resume. Also, you can revamp your old resume by importing it on our platform and customizing it the way you want. "
                                isTip={true}
                            />
                            <div className='mt-8 mb-7 flex justify-center'>
                                <CTA
                                    btn
                                    text="Create Resume"
                                    bgColor="bg-primary hover:bg-PrimaryDark"
                                    txtColor="text-white"
                                    border="border-0"
                                />
                            </div>
                        </div>

                        <div className='scroll-mt-32' id='head3'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                3 Most Popular Resume Formats
                            </h2>
                            <p className="text-[16px] lg:text-[18px] text-justify">
                                There are 3 main proper resume formats that are used around the world. Each format highlights your work experience and skills in a different way.
                            </p>
                            <CollapseTab data={data.CollapseTab} />
                        </div>

                        {data?.TemplatePointTab?.map((items: any, index: number) => (
                            <div className='scroll-mt-32 mb-8' id={`head${index + 4}`} key={index}>
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

                        <div className='scroll-mt-32 pb-4' id='head7'>
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

                        <div className='scroll-mt-32' id='head8'>
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

                        <div className='scroll-mt-32' id='head9'>
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
