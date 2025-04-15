import React from "react";
import Image from "next/image";
import inner_banner_bg from "media/images/inner-banner_bg.svg";

type BannerProps = {
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
};

const InnerBanner = (props: BannerProps) => {
  const { title, subtitle, description } = props;
  return (
    <>
      <section className={`relative z-10 overflow-hidden`}>
        <Image
          src={inner_banner_bg}
          alt="banner_bg_2"
          priority
          className="absolute w-full h-[100vh] md:h-full -z-10 object-cover !2xl:object-fill object-bottom"
        />
        <div className="container flex items-center justify-center relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px]">
          <div className=" flex flex-col items-center justify-between py-16 absolute">
            <p className="font-normal text-[16px] lg:text-[18px] xl:text-[20px] text-center text-white">
              {subtitle}
            </p>
            <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-semibold text-center leading-[30px] md:leading-[40px] lg:leading-[50px] text-white my-1 sm:my-3">
              {title}
            </h1>
            <p className="text-[16px] lg:text-[18px] text-center text-white">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
