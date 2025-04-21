'use client'
import React, { useState } from 'react'
// import { blogsVerticalTabsData, breadCrumbsItems, constText, prosText } from '@/app/blog/[blogId]/data';
import Image from 'next/image';
import blogImg from 'media/images/blogImg.webp'
import blogAiImage from 'media/images/AiBlogImg.webp'
import BlogOurBenefits from 'media/images/ourBenefitsImg.webp'
import Blogtemplates from 'media/images/blogGroup.webp'
import IconContact from 'media/images/Icon.webp'
import BlogHand from 'media/images/handblog.webp'
import { BreadCrumbs, ProConsCard, QuickTips, VerticalTabs } from '@/components'

type BlogsPiontData = {
    icon: any
    para: string
}

type BlogsVerticalTabsData = {
    id?: string
    name?: string
    description?: React.ReactNode
    points?: BlogsPiontData[]
    gridImages?: any[]
    quickTip?: any
};

type BreadCrumbsItems = {
    label?: string
    href?: string
};

// type ProConsItems = {
//     prosText?: string
//     constText?: string
// };

type BlogDetailData = {
    prosItemsData?: any,
    consItemsData?: any,
    breadCrumbsItems?: BreadCrumbsItems[]
    blogsVerticalTabsData?: BlogsVerticalTabsData[]

};

type propsType = {
    data: BlogDetailData;
};

const BlogDetail = (props: propsType) => {
    const { data } = props
    const [section, setSection] = useState("#head1");

    // console.log(blogsVerticalTabsData, "i am parent page section");
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <BreadCrumbs items={data.breadCrumbsItems} />
                <div className='relative grid lg:grid-cols-12 gap-4 xl:gap-6'>

                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <VerticalTabs heading="In This Guide" tabsData={data.blogsVerticalTabsData} setSection={setSection} />
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
                        {data?.blogsVerticalTabsData?.map((blog: any, index: any) => (
                            <div id={section} className='' key={index}>
                                {blog.mainImage && (
                                    <div className="flex items-center w-full xl:min-w-[550px] mb-5">
                                        <Image src={blog.mainImage} alt="" className="h-auto w-full" />
                                    </div>
                                )}
                                {blog.title && (
                                    <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                        {blog.title}
                                    </h2>
                                )}
                                {blog.paraImage ? (
                                    <div className="relative mb-2 ">
                                        <div className="sm:float-right sm:w-[300px] md:w-[370px] sm:ml-6 mb-2 md:mb-4">
                                            <Image
                                                src={blog.paraImage}
                                                alt="Blog benefits"
                                                className="rounded-lg w-full h-auto"
                                            />
                                        </div>

                                        <p className="text-[16px] lg:text-[18px] text-justify">
                                            {blog.description}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-[16px] lg:text-[18px] text-justify lg:text-left">
                                        {blog.description}
                                    </p>
                                )}
                                {blog?.points && (
                                    <div className='flex md:flex-row flex-col justify-around md:items-center gap-4 py-9 px-2 xl:px-5'>
                                        {blog?.points?.map((points: any, idx: number) => (
                                            <div className='flex gap-3 items-center' key={idx}>
                                                <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                                    <Image src={points.icon} alt="" />
                                                </div>
                                                <h3 className='md:max-w-24 font-semibold'>{points.para}</h3>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {blog.gridImages && (
                                    <div className='grid grid-cols-4 gap-6'>
                                        {blog?.gridImages?.map((grid: any, index: any) => (
                                            <div className='rounded-lg shadow-xl border overflow-hidden' key={index}>
                                                <Image src={grid} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {blog?.quickTip &&
                                    < QuickTips />
                                }
                                {blog.description2 && <p className="text-[16px] lg:text-[18px] text-justify">
                                    {blog?.description2}
                                </p>}
                            </div>
                        ))}
                        {data?.prosItemsData &&
                            <ProConsCard
                                title={data?.prosItemsData.title}
                                icon={data?.prosItemsData.icon}
                                description={data?.prosItemsData.description}
                                isPro={data?.prosItemsData.isPro}
                            />
                        }
                        {data?.consItemsData &&
                            <ProConsCard
                                title={data?.consItemsData.title}
                                icon={data?.consItemsData.icon}
                                description={data?.consItemsData.description}
                                isPro={data?.consItemsData.isPro}
                            />
                        }
                        {/* <ProConsCard prosDesc={prosText} consDesc={constText} /> */}
                    </div>


                    {/* <div className='lg:col-span-7 xl:col-span-8'>
                        <ProConsCard prosDesc={data.prosText} consDesc={data.constText} />
                    </div> */}

                    {/* <div className='lg:col-span-7 xl:col-span-8'>

                        <div id="head1" className=''>
                            <div className="flex items-center w-full xl:min-w-[550px] mb-5">
                                <Image src={blogImg} alt="" className="h-auto w-full" />
                            </div>

                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {blog.name}
                            </h2>
                            <p className="text-[16px] lg:text-[18px] text-justify lg:text-left">{blogsVerticalTabsData[0]?.description}</p>

                            <div className='flex md:flex-row flex-col justify-around md:items-center gap-4 py-9 px-2 xl:px-5'>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt="" />
                                    </div>
                                    <h3 className='md:max-w-24 font-semibold'>Lorem ipsum dolor sit</h3>
                                </div>

                                <div className='flex gap-4 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt="" />
                                    </div>
                                    <h3 className='md:max-w-24 font-semibold'>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt="" />
                                    </div>
                                    <h3 className='md:max-w-24 font-semibold'>Lorem ipsum dolor sit</h3>
                                </div>
                            </div>
                        </div>

                        <div id="head2" className="">
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {blogsVerticalTabsData[1]?.name}
                            </h2>

                            <div className="relative">
                                <div className="sm:float-right sm:w-[300px] md:w-[370px] sm:ml-6 mb-2 md:mb-4">
                                    <Image
                                        src={BlogOurBenefits}
                                        alt="Blog benefits"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>

                                <p className="text-[16px] lg:text-[18px] text-justify">
                                    {blogsVerticalTabsData[0]?.description}
                                </p>
                            </div>
                        </div>

                        <div id="head3" className='my-5'>
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {blogsVerticalTabsData[2]?.name}
                            </h2>
                            <div className='flex flex-col gap-2'>
                                <Image src={Blogtemplates} alt='blog image' />
                                <Image src={Blogtemplates} alt='blog image' />
                            </div>
                        </div>

                        <div id="head5" className="">
                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {blogsVerticalTabsData[4]?.name}
                            </h2>

                            <div className="relative">
                                <div className="sm:float-right sm:w-[300px] md:w-[370px] sm:ml-6 mb-2 md:mb-4">
                                    <Image
                                        src={BlogOurBenefits}
                                        alt="Blog benefits"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>

                                <p className="text-[16px] lg:text-[18px] text-justify">
                                    {blogsVerticalTabsData[0]?.description}
                                </p>
                                <QuickTips />
                                <p className="text-[16px] lg:text-[18px] text-justify">
                                    {blogsVerticalTabsData[0]?.description}
                                </p>
                            </div>
                        </div>

                        <ProConsCard prosDesc={prosText} consDesc={constText} />
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default BlogDetail