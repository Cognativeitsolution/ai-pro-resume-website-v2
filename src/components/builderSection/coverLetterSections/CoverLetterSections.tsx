import Image from 'next/image';
import React, { ReactNode } from 'react'

type data = {
    title?: any;
    secImg?: any;
    PositionImg1?: any;
    PositionImg2?: any;
    PositionImg3?: any;
}
type data2 = {
    subTitle?: string | ReactNode;
    title: string | ReactNode;
    description?: string | ReactNode;
    list: data[];
}
type propsType = {
    sectionDetail: data2;
};

const CoverLetterSections = ({ sectionDetail }: propsType) => {
    console.log(sectionDetail, "sectionDetailsectionDetailsectionDetail");

    return (
        <section className="py-5 md:py-10 border ">
            <div className="container mx-auto">
                <h3 className="font-normal text-[16px] md:text-[20px] text-center from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent">
                    {sectionDetail?.subTitle}
                </h3>
                <h2 className="font-semibold text-slate-950 text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center">
                    {sectionDetail?.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 md:mt-16">
                    {sectionDetail?.list?.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="text-center flex flex-col items-center"
                        >
                            <div className="relative mb-3 border-4">
                                <div className="w-[250px] h-[300px]">
                                    <Image className="h-full" src={item?.secImg} alt={item?.title} />
                                </div>
                                <Image
                                    className="absolute top-[50px] left-1/2 -translate-x-1/2"
                                    src={item?.PositionImg1}
                                    alt={item?.title}
                                />
                            </div>


                            <div className="h-[52px] w-[52px] border-2 border-white bg-hamzaPrimary text-slate-200 font-semibold text-[28px] flex items-center justify-center rounded-full  shadow-2xl">
                                <span>{index + 1}</span>
                            </div>

                            <p className="text-[15px] text-slate-900 font-medium mb-2">{item?.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default CoverLetterSections