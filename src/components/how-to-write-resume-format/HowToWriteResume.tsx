'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import blogAiImage from 'media/images/AiBlogImg.webp'
import IconContact from 'media/images/Icon.webp'
import { BreadCrumbs, ProConsCard, QuickTips, DynVerticalTabs } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import DynPoints from '../dynamic-pages/DynPoints';
import { BlogIncludedPoints } from '@/app/how-to-write-a-resume/data';
import TemlateImage from "media/resume_template_images/Template_23.webp"
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
    quickTip?: any;
};

type BreadCrumbsItems = {
    label?: string
    href?: string
};
type BlogIncludedPointsType = {
    id?: any;
    point?: any;
}

type BlogDetailData = {
    prosItemsData?: any,
    consItemsData?: any,
    // breadCrumbsItems?: BreadCrumbsItems[]
    DynVerticalTabsData?: DynVerticalTabsData[]
    headingTab?: any[];
    // BlogIncludedPointsType?: BlogIncludedPointsType[]

};

type propsType = {
    data: BlogDetailData;
};


export default function HowToWriteResume(props: propsType) {
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
                                tabsData={data?.DynVerticalTabsData}
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
                        <div className=' ' id='head1'>
                            <h2 className="text-[20px] md:text-[20px] lg:text-[20px] leading-[36px] md:leading-[40px] lg:leading-[50px] mb-2">
                                How To Write A Good Resume in 2025?
                            </h2>
                            <p className=''>
                                There are plenty of guides on how to write a resume online, but not all of them guarantee that your resume will make it to the second interview or even get any attention from the recruiter. But how can you figure out the best resume layouts to build your own?
                            </p>
                            <p className='mt-3'>Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start.</p>

                            {/* <ProConsCard
                                isPro={true}
                                title="PRO TIP"
                                icon={IconContact}
                                description="Your resume is like your personal highlight reel—it shows employers what you've achieved, why you're the best fit for the job, and where you hope to go next." /> */}

                            <p className='my-8'>
                                So, to cater to that, we have brought you this straightforward guide with plenty of resume expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.
                            </p>
                        </div>

                        <div className=' ' id='head2'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                This blog will include
                            </h2>
                            <DynPoints includedPoints={BlogIncludedPoints} />

                            {/* <ProConsCard
                                isPro={true}
                                title="PRO TIP"
                                icon={IconContact}
                                description="Your resume is like your personal highlight reel—it shows employers what you've achieved, why you're the best fit for the job, and where you hope to go next." /> */}
                        </div>

                        <div className=' ' id='head1'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                How to Write a Resume: Step-By-Step Guide
                            </h2>
                            <p className=''>
                                We have divided the resume creation process into steps to help you easily understand the process of creating a perfect resume without missing any important details that can lead to rejection.
                            </p>
                            <p className='mt-3'>Also, this is how a flawless resume looks like:</p>

                            <div className='grid grid-cols-12 '>
                                <div className='col-span-12  flex justify-center'>
                                    <Image className='rounded-xl overflow-hidden shadow-lg' src={TemlateImage} alt='Template image'
                                        width={200} height={200} />
                                </div>
                            </div>
                            {/* <DynPoints includedPoints={BlogIncludedPoints} /> */}
                        </div>

                        <div className='' id='head1'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                How To Write A Good Resume: 6 Steps
                            </h2>
                            <p className=''>
                                Before diving into each step individually on how to write a resume, we are listing down all the steps for an overview, so that you know what we are going to learn later in the guide:
                            </p>

                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                6 Steps
                            </h2>
                            <DynPoints includedPoints={BlogIncludedPoints} />


                            <div>
                                <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                    1. How To Write A Good Resume: 6 Steps
                                </h2>
                                <p className=''>
                                    The first step is identifying your audience—the people and technologies that will read your resume.
                                </p>
                                <p className=''>
                                    Your primary audience will probably be an Applicant Tracking System (ATS). ATS is a system that scans a candidate's resume and qualifies it for the second screening by the second audience. This human recruiter will review your application and decide whether to contact you for the interview.
                                </p>
                            </div>


                            <div>
                                <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                    2. Fetch Important Skills & Keywords
                                </h2>
                                <p className=''>
                                    The first step is identifying your audience—the people and technologies that will read your resume.
                                </p>
                                <p className=''>
                                    Your primary audience will probably be an Applicant Tracking System (ATS). ATS is a system that scans a candidate's resume and qualifies it for the second screening by the second audience. This human recruiter will review your application and decide whether to contact you for the interview.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
