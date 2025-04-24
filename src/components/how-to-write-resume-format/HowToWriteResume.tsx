'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import blogAiImage from 'media/images/AiBlogImg.webp'
import IconContact from 'media/images/Icon.webp'
import { BreadCrumbs, ProConsCard, QuickTips, DynVerticalTabs, CTA, TemplatePoint } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import DynPoints from '../dynamic-pages/DynPoints';
import { BlogIncludedPoints, consListItems, HowToWriteResmTemplateData, HowToWriteResumeFormateTips, LookInTo5Points, LookInToKeyWords, LookInToTemplates, resumeIncludedSection, ResumeIncludedSixPoints, tipListItems } from '@/app/how-to-write-a-resume/data';
import TemlateImage from "media/resume_template_images/Template_23.webp"
import TipPro from 'media/images/TipPro.webp'
import TipProComma from 'media/images/commaIcoon.webp'
import cons from 'media/images/cons.webp';



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
type LookInToKeyWordsType = {
    id?: any;
    point?: any;
    subHead?: any;
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
                        <div className='scroll-mt-32' id='head1'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                How To Write A Good Resume in 2025?
                            </h2>
                            <p className='text-base'>
                                There are plenty of guides on how to write a resume online, but not all of them guarantee that your resume will make it to the second interview or even get any attention from the recruiter. But how can you figure out the best resume layouts to build your own?
                            </p>
                            <p className='mt-3 text-base'>Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start.</p>

                            <ProConsCard
                                title="PRO TIP"
                                icon={TipPro}
                                description="Your resume is like your personal highlight reel—it shows employers what you've achieved, why you're the best fit for the job, and where you hope to go next."
                                isTip={true}
                            />
                            <p className='my-8 text-base'>
                                So, to cater to that, we have brought you this straightforward guide with plenty of resume expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.
                            </p>
                        </div>

                        <div className='scroll-mt-32' id='head2'>
                            <h2 className="text-[22px] text-center border-b-2 md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-medium mb-4">
                                This blog will include
                            </h2>
                            <DynPoints includedPoints={BlogIncludedPoints} />

                            <ProConsCard
                                title="Looking for a quick way to make a resume?"
                                icon={TipProComma}
                                description="Our AI-powered resume builder is super fast with resume creation. It has more than 30+ resume templates and professional & free cover letter formats that you can quickly customize based on your industry."
                                isTip={true}
                            />
                            <div className='mt-8 mb-7 flex justify-center'>
                                <CTA
                                    btn
                                    text='Create Resume'
                                    bgColor="bg-primary hover:bg-PrimaryDark"
                                    txtColor="text-white"
                                    border="border-0"
                                />
                            </div>
                        </div>

                        <div className='scroll-mt-32' id='head3'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                How to Write a Resume: Step-By-Step Guide
                            </h2>
                            <p className='text-base'>
                                We have divided the resume creation process into steps to help you easily understand the process of creating a perfect resume without missing any important details that can lead to rejection.
                            </p>
                            <p className='mt-3 text-base'>Also, this is how a flawless resume looks like:</p>

                            <div className='grid grid-cols-12 '>
                                <div className='col-span-12 my-5 flex justify-center'>
                                    <Image className='rounded-xl border overflow-hidden shadow-lg' src={TemlateImage} alt='Template image'
                                        width={200} height={200} />
                                </div>
                            </div>
                            {/* <DynPoints includedPoints={BlogIncludedPoints} /> */}
                        </div>

                        <div className='scroll-mt-32' id='head4'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                How To Write A Good Resume: 6 Steps
                            </h2>
                            <p className='text-base'>
                                Before diving into each step individually on how to write a resume, we are listing down all the steps for an overview, so that you know what we are going to learn later in the guide:
                            </p>

                            <h2 className="text-[18px] text-center border-b-2 md:text-[24px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                6 Steps
                            </h2>

                            <DynPoints includedPoints={ResumeIncludedSixPoints} />

                            <div>
                                <h2 className="mt-5 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2">
                                    1. Identifying Your Audience
                                </h2>
                                <p className='text-base'>
                                    The first step is identifying your audience—the people and technologies that will read your resume.
                                </p>
                                <p className='mt-2 text-base'>
                                    Your primary audience will probably be an Applicant Tracking System (ATS). ATS is a system that scans a candidate's resume and qualifies it for the second screening by the second audience. This human recruiter will review your application and decide whether to contact you for the interview.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-3 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2">
                                    2. Fetch Important Skills & Keywords
                                </h2>
                                <p className='text-base'>
                                    After establishing your first audience, the next step is finding the best way to pass the ATS and recruiter review. To do so, you need to understand how ATS works. ATS is like a human recruiter, but an electronic one. It manages the hiring process electronically and ranks the best resumes by scanning for relevant keywords and skills mentioned in your resume that resonate with the job description.
                                </p>
                                <p className='mt-1 text-base'>
                                    These are some of the best ways to find and use relevant keywords in your resume.
                                </p>

                                <h2 className="mt-3 text-[14px] text-center border-b-2 md:text-[16px] lg:text-[20px] leading-[36px] md:leading-[40px] lg:leading-[50px] mb-4">
                                    You need to look for keywords such as
                                </h2>

                                <DynPoints
                                    includedPoints={LookInToKeyWords}
                                />

                            </div>

                            <div>
                                <h2 className="mt-5 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2">
                                    3. Different Resume Formats And Choosing The Right One
                                </h2>
                                <p className='text-base'>
                                    Before diving into the details, the very first part of the resume building is to decide which of the best resume layouts to opt for. There are three kinds of best resume formats that you can choose from. All three focus on different sections of a resume based on various situations.
                                </p>

                                <h2 className="mt-3 text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[36px] md:leading-[40px] lg:leading-[50px] mb-4">
                                    You need to look for keywords such as
                                </h2>

                                <div className='grid grid-cols-12'>
                                    {
                                        LookInToTemplates?.map((temp, index) => (
                                            <div key={temp?.id} className='items-center flex justify-center col-span-4 flex-col gap-5'>
                                                <div className=' bg-hamzaPrimary/10 px-5 text-lg font-medium text-hamzaPrimary rounded-xl'>{temp?.title}</div>
                                                <Image src={temp?.templateImages} alt="Template Image" className='border rounded-lg shadow-lg' width={200} height={100} />
                                            </div>
                                        ))
                                    }
                                </div>

                                <p className='mt-8 text-base'>
                                    Despite all three best resume layouts, reverse chronological is the most common format, and most recruiters prefer it. It lists your most recent job at the top and works backward, which is why most recruiters prefer it. It is also best for ATS because it makes it easy for the system to parse and show the progress in your career.
                                </p>

                                <div className='mb-7'>
                                    <ProConsCard
                                        title="PRO TIP"
                                        icon={TipPro}
                                        description="This best layout for resume is perfect for people with consultant work history or professionals looking to show career growth. "
                                        isTip={true}
                                    />
                                </div>
                                <p className='text-base font-semibold'>Here is what a reverse chronological resume format looks like:</p>

                                <div className='my-5 flex justify-center'>
                                    <Image
                                        className='rounded-xl border dden shadow-lg'
                                        src={TemlateImage} alt='Template image'
                                        width={250} height={250}
                                    />
                                </div>
                                <p className='mt-3 text-base'>
                                    However, the reverse chronological form is the most common one, which doesn't mean the other 2 formats are insignificant. If you are someone who explores different careers constantly and has a diverse work history, a combination will work the best for the candidate, as it will put equal focus on the varied and transferable skills that they gained from various job experiences.
                                </p>
                                <div className='mb-7'>
                                    <ProConsCard
                                        title="PRO TIP"
                                        icon={TipPro}
                                        description="On the other hand, a functional format will work best for individuals who recently graduated with a significant career break and want to focus more on skills rather than work experience. "
                                        isTip={true}
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="mt-5 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2">
                                    4. Sections Every Resume Must Include
                                </h2>
                                <p className='text-base'>
                                    Regardless of the perfect resume format you choose, there are some sections every resume should have. Let's break them down one by one:
                                </p>
                                <div className='py-2'>
                                    {
                                        resumeIncludedSection?.map((sec, index) => (
                                            <>
                                                <div className="flex">
                                                    <div className="relative after:absolute after:left-0 after:top-4 after:h-[1.2px] after:w-[15px] after:bg-black" />
                                                    <div className="pl-6 w-full">
                                                        <div className="flex justify-between items-center w-full mb-2">
                                                            <h4 className="text-hamzaPrimary flex gap-2 text-base font-medium">
                                                                <span>{`${index <= 9 ? '0' : ''}`}{index + 1}:</span>
                                                                <p>{sec?.title}</p>
                                                            </h4>
                                                        </div>
                                                        <p className='text-base'>
                                                            {sec?.desc}
                                                        </p>

                                                        {sec?.includedFieldsRight?.length ? <TemplatePoint data={sec?.includedFieldsRight} /> : null}
                                                        {sec?.includedSections?.length ? sec.includedSections.map((dataa, index) => (
                                                            <div className="flex py-2" key={index}>
                                                                <div className="relative after:absolute after:left-0 after:top-4 after:h-[1.2px] after:w-[15px] after:bg-black" />
                                                                <div className="pl-6 w-full">
                                                                    <div className="flex justify-between items-center w-full mb-2">
                                                                        <h4 className="text-black flex gap-2 text-base font-medium">
                                                                            <span>{index + 1}:</span>
                                                                            <p>{dataa.title}</p>
                                                                        </h4>
                                                                    </div>
                                                                    <p className="text-base">
                                                                        {dataa.innerDesc}
                                                                    </p>
                                                                    {dataa?.img && <div className='mx-auto my-1 flex justify-center w-[400px]'>
                                                                        <Image
                                                                            className='rounded-xl  overflow-hidden shadow-lg'
                                                                            src={dataa?.img}
                                                                            alt='Template image'
                                                                        />
                                                                    </div>}

                                                                </div>
                                                            </div>
                                                        )) : null}
                                                        {sec?.proTip &&
                                                            <div className='mb-7'>
                                                                <ProConsCard
                                                                    title={sec?.proTip?.title}
                                                                    icon={sec?.proTip?.icon}
                                                                    description={sec?.proTip?.description}
                                                                    isTip={sec?.proTip?.isPro}
                                                                /></div>
                                                        }

                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold ">
                                    5. Writing Tips for a Winning Resume
                                </h2>

                                {HowToWriteResumeFormateTips?.map((items: any, index: number) => (
                                    <div className='pt-2' key={index}>
                                        <div className='flex gap-3 text-hamzaPrimary text-lg font-semibold'>
                                            <div>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                            <h5 className="">{items.heading}</h5>
                                        </div>
                                        <p className="text-base pl-10">
                                            {items.description}
                                        </p>
                                    </div>
                                ))}

                                <div className='mb-7'>
                                    <ProConsCard
                                        title="How to craft a job-winning cover letter?"
                                        icon={TipProComma}
                                        description="Use AI Pro Resume, which offers plenty of the best cover letter examples from which to take inspiration and start crafting yours."
                                        isTip={true}
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="mt-5 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold">
                                    6. A Quick Word About Our AI-Powered Resume Builder
                                </h2>
                                <p className="text-base">
                                    If designing and formatting and learning how to write a resume for a job from scratch feels like a challenge, tools like resume makers, which include some incredible platforms such as AI Pro Resume, can make the process easier. These tools offer professional resume templates, help with content with AI suggestions, and ensure ATS-friendly formatting.
                                </p>
                                <h2 className="text-[18px] md:text-[24px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold">
                                    Some Professional Resume Examples For You To Check Out
                                </h2>
                                <p className="text-base">
                                    The following are some of the best resumes built on a robust tool, AI Pro Resume, that offers ATS-friendly templates with the option of AI suggestions, resume examples​, and plenty of customization.
                                </p>
                                {HowToWriteResmTemplateData?.map((items: any, index: number) => (
                                    <div className='' key={index}>
                                        <h5 className="text-[18px] md:text-[22px] lg:text-[26px] leading-[30px] md:leading-[35px] lg:leading-[40px] py-2">{items.heading}</h5>
                                        <div className='max-w-[380px] mx-auto py-4'>
                                            <Image src={items.image} alt={items.heading} className='rounded-lg border overflow-hidden shadow-md' />
                                        </div>
                                        <div className="flex justify-center my-6">
                                            <CTA
                                                btn
                                                text="Use This Template"
                                                bgColor="bg-primary hover:bg-PrimaryDark"
                                                txtColor="text-white"
                                                border="border-0"
                                            />
                                        </div >
                                    </div>
                                ))}

                                <ProConsCard
                                    title="PRO TIP"
                                    icon={TipPro}
                                    description="To build your resume in these or similar templates, head towards AI Pro Resume and boost your chances of getting your much-awaited job opportunity."
                                    isTip={true}
                                />
                            </div>
                        </div>

                        <div className='scroll-mt-32' id='head5'>
                            <h2 className="mt-7 font-semibold text-[18px] md:text-[22px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                Final Thoughts
                            </h2>
                            <p className='text-base'>
                                It's not enough to simply state your qualifications in a well-organized format; a great resume tells a story of your achievements and prospects. With this detailed guide, you should have the tools and knowledge to create a great working resume.
                            </p>
                            <p className='mt-3 text-base'>
                                After all, your resume is your very first step towards getting your dream job. So, you better invest your time in it, pursue the steps mentioned in the blog on how to write a resume to get a job, along with that, use a professional cover letter template, and let your personality, experience, and skills do the talking.
                            </p>
                        </div>

                        <div className='scroll-mt-32' id='head6'>
                            <h2 className=" font-semibold mt-5 text-[18px] md:text-[22px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                Frequently Asked Questions (FAQs)
                            </h2>

                            <div>
                                <h2 className="capitalize font-medium text-[18px] md:text-[22px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                    How to format a resume that stands out?
                                </h2>

                                <p className='text-base'>A visually appealing resume grabs attention. However, don't go overboard with fancy fonts or colors.</p>

                                <ProConsCard
                                    title="Here are some design tips:"
                                    icon={TipPro}
                                    itemsList={tipListItems}
                                    isTip={true}
                                />

                            </div>

                            <div className='mt-6'>
                                <h2 className="capitalize font-medium text-[18px] md:text-[22px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                    What are the common resume mistakes to avoid?
                                </h2>

                                <p className='text-base'>
                                    here are some common mistakes that you should avoid
                                </p>

                                <ProConsCard
                                    title="Don’t"
                                    icon={cons}
                                    itemsList={consListItems}
                                    isTip={false}
                                />
                            </div>

                            <div className='mt-6'>
                                <h2 className="capitalize font-medium text-[18px] md:text-[22px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                    What are the 5 P's of a resume?
                                </h2>

                                <p className='text-base'>
                                    The 5 P’s of a resume that highlight the important elements of a resume are as follows:
                                </p>

                                <h2 className="my-2 font-semibold text-[14px] text-center border-b-2 md:text-[16px] lg:text-[20px] leading-[36px] md:leading-[40px] lg:leading-[50px]">
                                    5 P's of a resume
                                </h2>

                                <DynPoints
                                    includedPoints={LookInTo5Points}
                                    defaultColor="black"
                                    showSeriel={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
