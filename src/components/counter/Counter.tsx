import Image from "next/image";
import React, { ReactNode } from "react";
import miniLogoShade from "media/images/mini-logo-shade.svg";


type CounterItem = {
    icon: string;
    count: string;
    label: string;
};

type CounterData = {
    title: string;
    description: ReactNode;
    counterlist: CounterItem[];
};

type propsType = {
    data: CounterData;
};


const Counter = (props: propsType) => {
    const { data } = props
    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className={`relative overflow-hidden rounded-3xl
                 flex flex-col items-center justify-center py-6 md:py-10 px-6 md:px-8 bg-PrimaryDark`}
                >
                    <div className="text-white text-justify sm:text-center">
                        <h3 className="text-[25px] md:text-[30px] xl:text-[40px] leading-[35px] md:leading-[40px] xl:leading-[50px] mb-2 font-medium">
                            {data.title}
                        </h3>
                        <p className="text-[16px] lg:text-[18px]">
                            {data.description}
                        </p>
                    </div>
                    <div className="flex items-start md:items-center justify-start sm:justify-evenly pt-4 md:pt-6 flex-col md:flex-row w-full lg:w-11/12 xl:w-9/12 gap-y-4">
                        {data.counterlist.map((item: any, index: any) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-4 bg-no-repeat bg-contain bg-center relative sm:w-[50%] md:w-[33%] min-h-[90px] lg:min-h-[120px] xl:min-h-[140px]"
                                style={{ backgroundImage: `url(${miniLogoShade.src})` }}
                            >
                                <Image src={item.icon} alt={item.label} width={50} height={50} />
                                <div className="flex flex-col">
                                    <p className="text-[#D7EAA2] text-[24px] md:text-[28px] xl:text-[38px] leading-none font-semibold">
                                        {item.count}
                                    </p>
                                    <p className="text-white text-[16px] lg:text-[18px] font-medium">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Counter;

