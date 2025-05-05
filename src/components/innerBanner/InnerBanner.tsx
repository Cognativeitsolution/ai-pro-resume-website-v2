"use client"
import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
// ===============
import { BreadCrumbs, CTA } from "@/components";
import { useReferHeader } from "@/context/ReferHeaderContext";
// ===============
import inner_banner_bg from "media/images/inner-banner_bg.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import DynBreadCrumbs from "../dynamic-pages/DynBreadCrumbs";

type BannerProps = {
  title?: string | ReactNode;
  subtitle?: string;
  description?: string | ReactNode;
  subdesc?: boolean;
  linkText?: string;
  href?: string;
  breadCrumbsData?: any;
};

const InnerBanner = (props: BannerProps) => {
  const { title, subtitle, description, subdesc, linkText, href, breadCrumbsData } = props;
  const { showReferHeader } = useReferHeader();
  return (
    <>
      <section className={`h-full bg-PrimaryDark md:bg-none relative z-10 overflow-hidden`}>
        <Image
          src={inner_banner_bg}
          alt="banner_bg_2"
          priority
          className="absolute w-full h-full -z-10 object-cover !2xl:object-fill object-bottom hidden md:block"
        />
        <div className="container mx-auto">
          <div className={`flex flex-col items-center justify-between pb-10 md:pb-40 lg:pb-56 ${showReferHeader ? 'pt-40 lg:pt-48' : 'pt-[7.5rem] lg:pt-44'}`}>
            {breadCrumbsData &&
              <div className='my-1'>
                <DynBreadCrumbs color={breadCrumbsData} />
              </div>}
            <p className="text-[16px] lg:text-[18px] xl:text-[20px] text-center text-white">
              {subtitle}
            </p>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[30px] md:leading-[50px] lg:leading-[60px] font-semibold text-center text-white mt-1 mb-1 sm:mb-3 max-w-3xl">
              {title}
            </h1>
            <p className="text-[16px] lg:text-[18px] text-center text-white mt-3 w-full md:w-[80%]">
              {description}
            </p>
            {/* Conditional subdesc rendering */}
            {subdesc && (
              <div className="flex flex-col gap-8 mt-5">
                <div className="flex flex-col justify-center items-center gap-4">
                  {href && (
                    <div className="flex items-center gap-2 cursor-pointer group">
                      <span className="text-[16px] lg:text-[18px] text-white">
                        Click here to check our
                      </span>
                      <Link className="text-[16px] lg:text-[18px] text-white font-semibold" href={href}>
                        {linkText}
                      </Link>
                      <FaArrowRightLong className="text-[16px] lg:text-[18px] text-white group-hover:scale-110 transition-all duration-500" />
                    </div>
                  )}
                  <CTA
                    btn
                    text=" Import Resume"
                    bgColor="bg-primary hover:bg-none"
                    txtColor="text-white"
                    border="border border-white"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
