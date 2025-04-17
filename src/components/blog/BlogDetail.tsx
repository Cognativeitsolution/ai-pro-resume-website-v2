'use client'
import React, { useState } from 'react'
import VerticalTabs from './blogDetailComponents/VerticalTabs'
import { blogsVerticalTabsData } from '@/app/blog/[blogId]/data';
import Image from 'next/image';
import blogImg from '../../../public/images/blogImg.webp'
import BlogOurBenefits from '../../../public/images/ourBenefitsImg.webp'
import Blogtemplates from '../../../public/images/blogGroup.webp'
import BlogHand from '../../../public/images/handblog.webp'

import { FaFacebook } from 'react-icons/fa';
import ProConsCard from './blogDetailComponents/ProConsCard';
const BlogDetail = () => {
    const [section, setSection] = useState();

    console.log(blogsVerticalTabsData, "i am parent page section");

    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className='grid lg:grid-cols-12 gap-4 xl:gap-6'>

                    <div className='lg:col-span-5 xl:col-span-4'>
                        <VerticalTabs tabsData={blogsVerticalTabsData} setSection={setSection} />
                    </div>

                    <div className='lg:col-span-7 xl:col-span-8 gap-4'>

                        <div id="head1" className=''>
                            <div className="flex items-center w-full xl:min-w-[550px] mb-5">
                                <Image src={blogImg} alt={blogImg} className="h-auto w-full" />
                            </div>

                            <h2 className="text-[22px] md:text-[30px] lg:text-[34px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4">
                                {blogsVerticalTabsData[0]?.name}
                            </h2>
                            <p className="text-[16px] lg:text-[18px] text-justify lg:text-left">{blogsVerticalTabsData[0]?.description}</p>

                            <div className='flex md:flex-row flex-col justify-around md:items-center gap-4 py-9 px-2 xl:px-5'>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt={BlogHand} />
                                    </div>
                                    <h3 className='md:max-w-24 font-semibold'>Lorem ipsum dolor sit</h3>
                                </div>

                                <div className='flex gap-4 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt={BlogHand} />
                                    </div>
                                    <h3 className='md:max-w-24 font-semibold'>Lorem ipsum dolor sit</h3>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center'>
                                        <Image src={BlogHand} alt={BlogHand} />
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

                        <ProConsCard />

                    </div>


                </div>
            </div>
        </section>
    )
}

export default BlogDetail