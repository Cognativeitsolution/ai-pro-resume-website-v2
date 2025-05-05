'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import blogAiImage from 'media/images/AiBlogImg.webp'
import IconContact from 'media/images/Icon.webp'
import { BreadCrumbs, ProConsCard, QuickTips, VerticalTabs } from '@/components'
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';

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

type BlogDetailData = {
    prosItemsData?: any,
    consItemsData?: any,
    breadCrumbsItems?: BreadCrumbsItems[]
    blogsVerticalTabsData?: BlogsVerticalTabsData[]
    headingTab?: any[]
};

type propsType = {
    data: BlogDetailData;
};

const BlogDetail = (props: propsType) => {
    const { data } = props
    const [sectionId, setSectionId] = useState("");
    // const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    // const toggleExpand = (index: number) => {
    //     setExpandedIndex(prev => (prev === index ? null : index));
    // };

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
                            <VerticalTabs heading="In This Guide"
                                tabsData={data.blogsVerticalTabsData}
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
                        {data?.blogsVerticalTabsData?.map((blog: any, index: any) => (
                            <div id={blog?.id} className='' key={index}>
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
                                    <div className='grid grid-cols-4 gap-6 mb-4'>
                                        {blog?.gridImages?.map((grid: any, index: any) => (
                                            <div className='rounded-lg shadow-xl border overflow-hidden' key={index}>
                                                <Image src={grid} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {blog?.quickTip &&
                                    <QuickTips description={blog?.quickTip} />
                                }
                                {blog.description2 && <p className="text-[16px] lg:text-[18px] text-justify mb-2">
                                    {blog?.description2}
                                </p>}
                                {blog?.headingTab && (
                                    <div className="mb-2 divide-y">
                                        {blog.headingTab.map((tabs: any, index: number) => (
                                            <div key={index}>
                                                <div className="flex py-2">
                                                    <div
                                                        className="relative after:absolute after:left-0 after:top-4 
                                                                    after:h-[1.2px] after:w-[15px] after:bg-black"
                                                    ></div>
                                                    <div className="pl-6 w-full">
                                                        <div className="flex justify-between items-center w-full mb-2">
                                                            <h4 className="text-hamzaPrimary text-2xl">{tabs.heading}:</h4>
                                                            {/* <button
                                                                onClick={() => toggleExpand(index)}
                                                                className="px-4 py-1 italic bg-indigo-400/20 text-indigo-700"
                                                            >
                                                                {expandedIndex === index ? "show less" : "show more"}
                                                            </button> */}
                                                        </div>
                                                        <p className="text-sm">{tabs.description}</p>
                                                    </div>
                                                </div>

                                                {/* {expandedIndex === index ? ( */}
                                                <>
                                                    <h5 className="text-hamzaPrimary text-2xl pt-4">{tabs.heading} Resume Format:</h5>
                                                    <div className='grid grid-cols-12 gap-4 pl-6 py-4'>
                                                        <div className='col-span-4'>
                                                            <div className='rounded-lg shadow-xl border overflow-hidden ' key={index}>
                                                                <Image src={tabs.image} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className='col-span-8 py-6'>
                                                            <h6 className="text-hamzaPrimary text-2xl mb-4 font-semibold">Best For:</h6>
                                                            <ul className='list-disc pl-6'>
                                                                {tabs.list?.map((tabs: any, index: number) => (
                                                                    <li key={index} className='mb-4 text-sm'>
                                                                        {tabs}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                                {/* ) : null} */}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {blog?.Tabs && (
                                    <>
                                        {blog?.Tabs?.map((tabs: any, index: number) => (
                                            <div className='p-2 bg-indigo-200/20 backdrop-blur-none border-4 rounded-md'>
                                                {tabs?.heading}
                                            </div>
                                        ))}
                                    </>
                                )}
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
                            <div className='pt-4'>
                                <ProConsCard
                                    title={data?.consItemsData.title}
                                    icon={data?.consItemsData.icon}
                                    description={data?.consItemsData.description}
                                    isPro={data?.consItemsData.isPro}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetail