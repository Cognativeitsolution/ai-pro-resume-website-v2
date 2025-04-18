import React from "react";
import Image from "next/image";
import inner_banner_bg from "media/images/inner-banner_bg.webp";

type BannerProps = {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
};

const InnerBanner = (props: BannerProps) => {
  const { title, subtitle, description } = props;
  return (
    <>
      <section className={`h-full bg-PrimaryDark md:bg-none relative z-10 overflow-hidden `}>
        <Image
          src={inner_banner_bg}
          alt="banner_bg_2"
          priority
          className="absolute w-full h-full -z-10 object-cover !2xl:object-fill object-bottom hidden md:block"
        />
        <div className="container mx-auto">
          <div className=" flex flex-col items-center justify-between pt-36 pb-16 md:pt-40 md:pb-40 lg:pt-48 lg:pb-56">
            <p className="font-normal text-[16px] lg:text-[18px] xl:text-[20px] text-center text-white">
              {subtitle}
            </p>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[30px] md:leading-[50px] lg:leading-[60px] font-semibold text-center text-white mt-1 mb-1 sm:mb-3 max-w-3xl">
              {title}
            </h1>
            <p className="text-[16px] lg:text-[18px] text-center text-white mt-3 w-full md:w-[80%]">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
