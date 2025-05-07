'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// ===================
import { CTA, DynamicContent, DynamicTabs, DynBreadCrumbs } from '@/components';
// ===================
import verticleTabBg from 'media/images/verticleTabBg.webp';
import TempBg from 'media/resume_template_images/Template_24.webp';

type DynamicTabsData = {
    id?: string;
    title?: React.ReactNode;
};

type PropsType = {
    data: {
        tip1?: any;
        tip2?: any;
        section1: any;
        section2: any;
        section3: any;
        section4: any;
        section5: any;
        section6: any;
        pros: any;
        cons: any;
        DynamicTabsData?: DynamicTabsData[];
    };
};

const DynamicSection = ({ data }: PropsType) => {
    const [sectionId, setSectionId] = useState('');

    useEffect(() => {
        setSectionId('#section1');
    }, []);

    return (
        <section className="py-5 xl:py-10">
            <div className="container">
                <div className='my-5 md:mt-2'>
                    <DynBreadCrumbs />
                </div>
                <div className="relative grid grid-cols-12 gap-4 xl:gap-8">
                    <div className="col-span-12 xl:col-span-4 w-full static">
                        <div className="xl:sticky top-32 xl:overflow-y-auto">
                            <DynamicTabs
                                heading="Table Of Content"
                                tabsData={data?.DynamicTabsData}
                                setSectionId={setSectionId}
                            />
                            <div className="mt-4 relative z-10">
                                <Image src={verticleTabBg} alt="Resume benefits" />
                                <div className="absolute z-20 top-0 w-full h-full flex flex-col items-center justify-center px-10 xl:p-0">
                                    <div className="flex flex-col xl:flex-row items-center justify-center gap-5 md:gap-10 xl:gap-4 border-b p-6">
                                        <div className='hidden md:block w-[34%] md:w-[60%] lg:w-[75%] xl:w-[50%]'>
                                            <Image
                                                src={TempBg}
                                                alt="Resume preview"
                                                height={220}
                                                className="rounded-md w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-[13rem] md:w-[30rem] xl:w-60">
                                            <p className="text-[22px] leading-[27px] font-semibold text-white text-center xl:text-left mb-2">
                                                Build your resume in 15 Minutes
                                            </p>
                                            <p className="text-sm text-white text-center xl:text-left">
                                                Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-6">
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
                    <div className="col-span-12 xl:col-span-8">
                        <DynamicContent id={sectionId} data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DynamicSection;
