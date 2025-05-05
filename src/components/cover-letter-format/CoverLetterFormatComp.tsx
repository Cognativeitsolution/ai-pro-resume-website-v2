'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import verticleTabBg from 'media/images/verticleTabBg.webp'
import { ProConsCard, DynVerticalTabs, CollapseTab, TemplatePoint, CTA, DynMainDiv, AutoPlaySlider } from '@/components'
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

export default function CoverFormatComp(props: propsType) {
    const { data } = props
    const [sectionId, setSectionId] = useState("");

    useEffect(() => {
        setSectionId("#head1")
    }, [])

    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className='my-5 md:mt-2'>
                    <DynBreadCrumbs />
                </div>
                <div className='relative grid lg:grid-cols-12 gap-4 xl:gap-6'>
                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <DynVerticalTabs heading="Table Of Content"
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

                        <DynMainDiv
                            id="head1"
                            title={data?.TopSection?.heading}
                            descBase={data?.TopSection?.description}
                            titleTag="h2"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                            <ProConsCard
                                title={data?.TopSection?.titlePro}
                                icon={data?.TopSection?.iconPro}
                                description={data?.TopSection?.descriptionPro}
                                isTip={data?.TopSection?.isTip}
                            />
                        </DynMainDiv>

                        <DynMainDiv
                            id='head2'
                            title={data?.FormatPoints?.heading}
                            titleTag="h2"
                            titleClass="text-[22px] text-center border-b-2 md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-medium my-4 capitalize "
                            CtaText="Create Resume"
                        >
                            <DynPoints includedPoints={data?.FormatPoints?.list} />
                            <ProConsCard
                                title={data?.FormatPoints?.titlePro}
                                icon={data?.FormatPoints?.iconPro}
                                description={data?.FormatPoints?.descriptionPro}
                                isTip={data?.FormatPoints?.isTip}
                            />
                        </DynMainDiv>

                        <DynMainDiv
                            id="head3"
                            title={data?.CollapseTab?.heading}
                            description={data?.CollapseTab?.description}
                            titleTag="h3"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                            <CollapseTab data={data?.CollapseTab?.list} />
                        </DynMainDiv>

                        {data?.TemplatePointTab?.map((items: any, index: number) => (
                            <div key={index}>
                                <DynMainDiv
                                    mainDivClass="mb-8"
                                    id={`head${index + 4}`}
                                    title={`${items?.heading} Resume Format:`}
                                    description={items?.description}
                                    titleTag="h3"
                                    titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold "
                                >
                                    <ProConsCard
                                        title={items.titlePro}
                                        icon={items.iconPro}
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
                                    <div className=' pt-2 sm:pt-6 md:pt-8'>
                                        <ProConsCard
                                            title={items?.consItemsData?.title}
                                            icon={items?.consItemsData?.icon}
                                            description={items?.consItemsData?.description}

                                        />
                                    </div>
                                </DynMainDiv>
                            </div>
                        ))}

                        <DynMainDiv
                            id="head7"
                            title={data?.FormatQuesAns?.heading}
                            titleTag="h3"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold "
                        >
                            <div className='pb-4'>
                                {data?.FormatQuesAns?.list?.map((items: any, index: number) => (
                                    <div className='pt-2' key={index}>
                                        <div className='flex gap-3 text-hamzaPrimary text-2xl pt-2'>
                                            <div className='hidden sm:block'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>                                        <h5 className="">{items.heading}</h5>
                                        </div>
                                        <p className="text-base sm:pl-10">
                                            {items.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </DynMainDiv>

                        <DynMainDiv
                            id="head8"
                            title={data?.TemplateData?.heading}
                            descBase={data?.TemplateData?.description}
                            titleTag="h4"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4"
                        >
                            {data?.TemplateData?.list && (
                                <>
                                    {data?.TemplateData?.list?.map((items: any, index: number) => (
                                        <div className='' key={index}>
                                            <h5 className="text-[18px] md:text-[22px] lg:text-[26px] leading-[30px] md:leading-[35px] lg:leading-[40px] py-2 font-medium">{items.heading}</h5>
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
                                </>
                            )}
                        </DynMainDiv>

                        <DynMainDiv
                            id="head9"
                            title={data?.BottomSection?.heading}
                            description={data?.BottomSection?.description}
                            titleTag="h4"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
