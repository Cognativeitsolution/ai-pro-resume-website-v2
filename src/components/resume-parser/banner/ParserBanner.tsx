"use client"
import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
// ===============
import { useReferHeader } from "@/context/ReferHeaderContext";
// ===============
import preview from "media/resume_parser/top-preview.webp";
import arrow from "media/resume_parser/top-arrow.webp";
import { CTA } from "@/components";
import banner_bg_2 from "media/images/banner_bg_2.webp";

type BannerProps = {
    title?: string | ReactNode;
    subtitle?: string;
    description?: string | ReactNode;
    subdesc?: boolean;
    linkText?: string;
    href?: string;
};

const ParserBanner = (props: BannerProps) => {
    const { title, subtitle, description, subdesc, linkText, href } = props;
    const { showReferHeader } = useReferHeader();
    return (
        <>
            <section className={`h-full bg-PrimaryDark md:bg-none relative z-10 overflow-hidden`}>
                <Image
                    src={banner_bg_2}
                    alt="banner_bg_2"
                    priority
                    className="absolute w-full h-full -z-10 object-cover !2xl:object-fill object-bottom hidden md:block"
                />
                <div className="container mx-auto ">
                    <div className={`flex flex-col items-center justify-between pb-10 md:pb-40 lg:pb-56 ${showReferHeader ? 'pt-40 lg:pt-40' : 'pt-[7.5rem] lg:pt-44'}`}>
                        <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-center text-white" >
                            {subtitle}
                        </p>
                        <h1 className="text-[30px] md:text-[40px] leading-[30px] md:leading-[50px] font-semibold text-center text-white mt-1 mb-1 sm:mb-3 ">
                            {title}
                        </h1>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="hidden md:block col-span-6">
                                <div className="flex relative">
                                    <div className="h-[380] lg:h-[350px] 2xl:h-[320px] lg:ms-28 2xl:ms-32 mx-auto">
                                        <Image src={preview.src} alt="" width={320} height={320} />
                                    </div>
                                    <div className="h-[280px] absolute top-40 right-0 2xl:right-12 hidden xl:block">
                                        <Image src={arrow.src} alt="" width={160} height={160} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 mt-2 md:mt-10">
                                <p className="text-[16px] lg:text-[18px] md:text-start text-center text-white ">
                                    {description}
                                </p>
                                <div className="mt-3 flex justify-center md:justify-start">
                                    <CTA
                                        btn
                                        text=" Import Resume"
                                        bgColor="bg-transparent hover:bg-primary"
                                        txtColor="text-white"
                                        border="border border-white"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default ParserBanner;
