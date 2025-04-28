'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import blogAiImage from 'media/images/AiBlogImg.webp'
import IconContact from 'media/images/Icon.webp'
import { ProConsCard, DynVerticalTabs, CTA, TemplatePoint, DynMainDiv, AutoPlaySlider } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import DynPoints from '../dynamic-pages/DynPoints';
import TipPro from 'media/images/TipPro.webp'
import check from "media/images/check_1.webp";

type PiontData = {
    icon: any
    para: string
}

type DynVerticalTabs = {
    id?: string
    name?: string
    description?: React.ReactNode
    points?: PiontData[]
    gridImages?: any[]
    quickTip?: any;
};


type BlogDetailData = {
    DynVerticalTabs?: DynVerticalTabs[]
    TopSection?: any
    FormatPoints?: any
    StepGuide?: any
    SixStep?: any
    headingTab?: any[]
    BottomSection?: any

};

type propsType = {
    data: BlogDetailData;
};


export default function InterviewQuestionsSeo(props: propsType) {
    const { data } = props
    const [sectionId, setSectionId] = useState("");

    useEffect(() => {
        setSectionId("#head1")
    }, [])
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <DynBreadCrumbs />
                <div className='relative grid lg:grid-cols-12 gap-6 xl:gap-8'>

                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <DynVerticalTabs heading="Interview Questions"
                                tabsData={data?.DynVerticalTabs}
                                setSectionId={setSectionId} />
                            <div className="relative  mt-4 hidden lg:block">
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

                        {
                            data?.TopSection?.map((sec: any, index: any) => (
                                <div key={index}>
                                    <DynMainDiv
                                        id={sec?.id}
                                        title={sec?.heading}
                                        descBase={sec?.description}
                                        description2={sec?.description2}
                                        titleTag="h2"
                                        titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                                    >
                                        {sec?.isTip && <ProConsCard
                                            title="PRO TIP"
                                            icon={TipPro}
                                            description="Your resume is like your personal highlight reel—it shows employers what you've achieved, why you're the best fit for the job, and where you hope to go next."
                                            isTip={true}
                                        />}
                                    </DynMainDiv>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </section >
    )
}
