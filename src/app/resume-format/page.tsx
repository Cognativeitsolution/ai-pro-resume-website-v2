'use client';
import { InnerBanner, Faq, ResumeFormatComp } from '@/components';
import { BannerData, FormatDetailData, faqs } from './data';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <ResumeFormatComp data={FormatDetailData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
