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
                <div className='relative grid lg:grid-cols-12 gap-6 xl:gap-8'>

                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <DynVerticalTabs heading="Table Of Content"
                                tabsData={data?.DynVerticalTabs}
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
                        <DynMainDiv
                            id="head1"
                            title={data?.TopSection?.heading}
                            descBase={data?.TopSection?.description}
                            description2={data?.TopSection?.description2}
                            titleTag="h2"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                            <ProConsCard
                                title="PRO TIP"
                                icon={TipPro}
                                description="Your resume is like your personal highlight reel—it shows employers what you've achieved, why you're the best fit for the job, and where you hope to go next."
                                isTip={true}
                            />
                        </DynMainDiv>
                        <DynMainDiv
                            id="head2"
                            title={data?.FormatPoints?.heading}
                            titleTag="h2"
                            titleClass="text-[22px] text-center border-b-2 md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-medium my-4 capitalize "
                            CtaText="Create Resume"
                        >
                            <DynPoints includedPoints={data?.FormatPoints?.list} />
                            <div className='mb-8 '>
                                <ProConsCard
                                    title={data?.FormatPoints?.titlePro}
                                    icon={data?.FormatPoints?.iconPro}
                                    description={data?.FormatPoints?.descriptionPro}
                                    isTip={data?.FormatPoints?.isTip}
                                />
                            </div>
                        </DynMainDiv>
                        <DynMainDiv
                            id="head3"
                            title={data?.StepGuide?.heading}
                            // descBase={data?.StepGuide?.description}
                            titleTag="h3"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                            <div className='grid grid-cols-12 mt-5 mb-2 sm:my-5 '>
                                <div className='col-span-12 xl:col-span-7 flex flex-col justify-center'>
                                    {data?.StepGuide?.description && Array.isArray(data?.StepGuide?.description) ? (
                                        data?.StepGuide?.description?.map((item: any, index: number) => {
                                            return <p key={index} className='text-[15px] lg:text-[16px] text-justify mt-2 first:mt-0'>{item}</p>;
                                        })
                                    ) :
                                        <p className='text-[15px] lg:text-[16px] text-justify'>{data?.StepGuide?.description}</p>
                                    }
                                    <ul className="my-3 space-y-3">
                                        {data?.StepGuide?.list?.map((item: any, idx: any) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <Image
                                                    src={check}
                                                    alt="bullet"
                                                    width={15}
                                                    height={15}
                                                    className="mt-[5px]"
                                                />
                                                <p className='text-[15px] lg:text-[16px] text-justify'>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='col-span-12 xl:col-span-5  flex justify-center'>

                                    <div className='max-w-[350px] h-auto mt-3 xl:mt-0'>
                                        <Image className='rounded-xl border overflow-hidden shadow-lg' src={data?.StepGuide?.image} alt="image"
                                            width={300} height={400} />
                                    </div>
                                </div>
                            </div>
                        </DynMainDiv>
                        <DynMainDiv
                            id="head4"
                            title={data?.SixStep?.heading}
                            description={data?.SixStep?.description}
                            titleTag="h3"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2"
                        >
                            {data?.SixStep?.steptitle && <h3 className="text-[18px] text-center border-b-2 md:text-[24px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {data?.SixStep?.steptitle}
                            </h3>}

                            <DynPoints includedPoints={data?.SixStep?.list} />

                            {data?.SixStep?.sixStepDetail?.map((step: any, stepIndex: any) => (
                                <div key={stepIndex}>
                                    <h5 className="mt-5 text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-2">
                                        {stepIndex + 1}. {step.title}
                                    </h5>

                                    {step?.paragraphs?.map((para: any, idx: any) => (
                                        <p key={idx} className="text-base mt-2 first:mt-0">{para}</p>
                                    ))}

                                    {step?.subheading && (
                                        <h6
                                            className="text-center text-lg md:text-xl lg:text-2xl border-b-2 pb-2 my-4 font-medium">{step?.subheading}</h6>
                                    )}

                                    {step?.keywordList && <DynPoints includedPoints={step?.keywordList} />}

                                    {step?.templateCards && (
                                        <div className="hidden md:grid md:grid-cols-12 gap-4 ">
                                            {step.templateCards.map((temp: any, index: any) => (
                                                <div key={index} className='items-center flex justify-center md:col-span-4 flex-col gap-5'>
                                                    <div className=' bg-hamzaPrimary/10 px-5 text-lg font-medium text-hamzaPrimary rounded-xl'>{temp?.title}</div>
                                                    <Image src={temp?.templateImages} alt="Template Image" className='border rounded-lg shadow-lg' width={200} height={100} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {step?.templateCards && (
                                        <div className="block md:hidden  ">
                                            <AutoPlaySlider
                                                options={{ align: "start" }}
                                                arrowPosition="!mt-2 mb-5 md:mb-8"
                                            >
                                                {step.templateCards.map((temp: any, index: number) => (
                                                    <div key={index} className="grow-0 shrink-0 basis-full sm:basis-[50%] ">
                                                        <div className="">
                                                            <div className="max-w-[250px] mx-auto py-4">
                                                                <div className="bg-hamzaPrimary/10 px-0 py-2 mb-5 text-center text-base md:text-lg font-medium text-hamzaPrimary rounded-xl">
                                                                    {temp?.title}
                                                                </div>
                                                                <Image
                                                                    src={temp?.templateImages}
                                                                    alt="Template Image"
                                                                    className="border w-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </AutoPlaySlider>
                                        </div>
                                    )}

                                    {step?.proTips &&
                                        <>
                                            {step.proTips.map((tip: any, i: number) => (
                                                <>
                                                    {tip?.paragraphs &&
                                                        Array.isArray(tip?.paragraphs) ? (
                                                        tip?.paragraphs?.map((item: any, index: number) => {
                                                            return <p key={index} className='text-base font-semibold pt-2'>
                                                                {item}
                                                            </p>;
                                                        })
                                                    ) :
                                                        <p className='text-base font-semibold pt-2'>
                                                            {tip?.paragraphs}
                                                        </p>
                                                    }

                                                    {tip?.image && <div className='my-5 flex justify-center' >
                                                        <Image
                                                            className='rounded-xl border dden shadow-lg'
                                                            src={tip?.image} alt='Template image'
                                                            width={250} height={250}
                                                        />
                                                    </div>}

                                                    {tip?.paragraphs2 &&
                                                        Array.isArray(tip?.paragraphs2) ? (
                                                        tip?.paragraphs2?.map((item: any, index: number) => {
                                                            return <p key={index} className="text-base mt-2">
                                                                {item}
                                                            </p>;
                                                        })
                                                    ) :
                                                        <p className="text-base mt-2">
                                                            {tip?.paragraphs2}
                                                        </p>
                                                    }
                                                    <ProConsCard
                                                        title={tip?.proTitle}
                                                        icon={tip?.proIcon}
                                                        description={tip?.proDescription}
                                                        isTip={tip?.isTip}
                                                    />
                                                </>
                                            ))}

                                        </>
                                    }

                                    {step?.IncludedSection?.map((sec: any, index: any) => (
                                        <>
                                            <div className='py-2'>
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
                                                        {sec?.includedSections?.length ? sec.includedSections.map((data: any, index: any) => (
                                                            <div className="flex py-2" key={index}>
                                                                <div className="relative sm:after:absolute sm:after:left-0 sm:after:top-4 sm:after:h-[1.2px] sm:after:w-[15px] sm:after:bg-black" />
                                                                <div className="sm:pl-6 w-full">
                                                                    <div className="flex justify-between items-center w-full mb-2">
                                                                        <h4 className="text-black flex gap-2 text-base font-medium">
                                                                            <span>{index + 1}:</span>
                                                                            <p>{data.title}</p>
                                                                        </h4>
                                                                    </div>
                                                                    <p className="text-base">
                                                                        {data.innerDesc}
                                                                    </p>
                                                                    {data?.img && <div className='mx-auto my-2 sm:my-1 flex justify-center sm:w-[400px] '>
                                                                        <Image
                                                                            className='rounded-xl  overflow-hidden shadow-lg'
                                                                            src={data?.img}
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
                                            </div>
                                        </>
                                    ))
                                    }

                                    {step?.tips?.map((tip: any, idx: any) => (
                                        <div className='pt-2' key={idx}>
                                            <div className='flex gap-3 text-hamzaPrimary text-lg font-semibold'>
                                                <div>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                                                <h5>{tip.heading}</h5>
                                            </div>
                                            <p className="text-base pl-10">{tip.description}</p>
                                        </div>
                                    ))}

                                    {step?.resumeExamples && (
                                        <>
                                            <h2 className="text-[18px] md:text-[24px] lg:text-[28px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold">
                                                {step?.resumeExamples?.title}
                                            </h2>
                                            <p className="text-base">
                                                {step?.resumeExamples?.description}
                                            </p>
                                            {step?.resumeExamples?.list && (
                                                <>
                                                    <div className='hidden md:block'>
                                                        {step?.resumeExamples?.list?.map((items: any, index: number) => (
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
                                                    </div>

                                                    <div className="block md:hidden  ">
                                                        <AutoPlaySlider
                                                            options={{ align: "start" }}
                                                            arrowPosition="!mt-2 mb-5 md:mb-8"
                                                        >
                                                            {step?.resumeExamples?.list?.map((temp: any, index: number) => (
                                                                <div key={index} className="grow-0 shrink-0 basis-full sm:basis-[50%] ">
                                                                    <div className="">
                                                                        <h5 className="text-[18px] md:text-[22px] lg:text-[26px] leading-[30px] md:leading-[35px] lg:leading-[40px] py-2">
                                                                            {temp?.heading}
                                                                        </h5>
                                                                        <div className='max-w-[250px] mx-auto py-4'>
                                                                            <Image
                                                                                src={temp?.image}
                                                                                alt="Template Image"
                                                                                className='rounded-lg border overflow-hidden shadow-md'
                                                                            />
                                                                            <div className='mt-4 flex justify-center'>
                                                                                <CTA
                                                                                    btn
                                                                                    text="Use This Template"
                                                                                    bgColor="bg-primary hover:bg-PrimaryDark"
                                                                                    txtColor="text-white"
                                                                                    border="border-0"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </AutoPlaySlider>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}

                                    {step?.bottomTip && (
                                        <ProConsCard
                                            title={step?.bottomTip?.proTitle}
                                            icon={step?.bottomTip?.proIcon}
                                            description={step?.bottomTip?.proDescription}
                                            isTip={step?.bottomTip?.isTip} />
                                    )}

                                </div>
                            ))}
                        </DynMainDiv>
                        <DynMainDiv
                            id="head5"
                            title={data?.BottomSection?.heading}
                            description={data?.BottomSection?.description}
                            titleTag="h5"
                            titleClass="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4"
                        />
                    </div>
                </div>
            </div >
        </section >
    )
}
