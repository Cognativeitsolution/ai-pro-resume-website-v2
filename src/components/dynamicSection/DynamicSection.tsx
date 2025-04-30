'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// ===================
import { CTA } from '@/components';
import DynamicContent from './DynamicContent';
import DynamicTabs from './DynamicTabs';
import DynBreadCrumbs from '../dynamic-pages/DynBreadCrumbs';
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
        <section className="py-5 md:py-10">
            <div className="container">
                <DynBreadCrumbs />
                <div className="relative grid lg:grid-cols-12 gap-4 xl:gap-8">
                    <div className="lg:col-span-5 xl:col-span-4 static">
                        <div className="sticky top-32 overflow-y-auto">
                            <DynamicTabs
                                heading="Table Of Content"
                                tabsData={data?.DynamicTabsData}
                                setSectionId={setSectionId}
                            />
                            <div className="mt-4 hidden lg:block relative z-10">
                                <Image src={verticleTabBg} alt="Resume benefits" />
                                <div className="absolute z-20 top-0 w-full h-full flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-center gap-4 border-b py-6">
                                        <div>
                                            <Image
                                                src={TempBg}
                                                alt="Resume preview"
                                                height={220}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-52">
                                            <p className="text-3xl font-semibold text-white">
                                                Build your resume in 15 Minutes
                                            </p>
                                            <p className="text-sm text-white">
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
                    <div className="lg:col-span-7 xl:col-span-8">
                        <DynamicContent id={sectionId} data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DynamicSection;
