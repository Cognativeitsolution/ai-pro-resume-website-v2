'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
// ==============
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
import { ProConsCard, CTA } from '@/components'
import DynamicContent from './DynamicContent';
import DynamicTabs from './DynamicTabs';
// ==============
import verticleTabBg from 'media/images/verticleTabBg.webp'
import TempBg from 'media/resume_template_images/Template_24.webp'

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

type FormatDetail = {
    DynVerticalTabsData?: DynVerticalTabsData[],
    TopSection?: any
    FormatPoints?: any,
    CollapseTab?: any,
    TemplatePointTab?: any,
    FormatQuesAns?: any,
    TemplateData?: any,
    BottomSection?: any
};

type propsType = {
    data: FormatDetail;
};

const DynamicSection = (props: propsType) => {
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
                            <DynamicTabs heading="Table Of Content"
                                tabsData={data?.DynVerticalTabsData}
                                setSectionId={setSectionId} />
                            <div className="mt-4 hidden lg:block relative z-10">
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
                        <DynamicContent
                            id="head1"
                            title={data?.TopSection?.heading}
                            descBase={data?.TopSection?.description}
                            titleTag="h2"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                        </DynamicContent>
                        <ProConsCard
                            title={data?.TopSection?.titlePro}
                            icon={data?.TopSection?.iconPro}
                            description={data?.TopSection?.descriptionPro}
                            isTip={data?.TopSection?.isTip}
                        />
                        <ProConsCard
                            title={data?.TopSection?.titlePro}
                            icon={data?.TopSection?.iconPro}
                            description={data?.TopSection?.descriptionPro}
                            isTip={data?.TopSection?.isTip}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DynamicSection   