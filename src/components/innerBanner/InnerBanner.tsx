import React from "react";
import inner_banner_bg from "media/images/inner-banner_bg.svg";

type BannerProps = {
    title?: string | React.ReactNode;
    subtitle?: string;
    description?: string | React.ReactNode;
};

const InnerBanner = (props: BannerProps) => {
    const {
        title,
        subtitle,
        description,
    } = props;
    return (
        <>
            <section className={`relative overflow-hidden bg-no-repeat bg-cover bg-bottom`}
                style={{
                    backgroundImage: `url(${inner_banner_bg.src})`
                }}>
                <div className="container flex items-center justify-center relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px]" >
                    <div className=" flex flex-col items-center justify-between py-16 absolute ">
                        <p className="font-normal text-[16px] lg:text-[18px] xl:text-[20px] text-center text-white">
                            {subtitle}
                        </p>
                        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold text-center leading-[40px] md:leading-[50px] lg:leading-[60px] text-white my-1 sm:my-3">
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
