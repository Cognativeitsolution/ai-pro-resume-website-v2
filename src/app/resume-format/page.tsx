'use client';
import { InnerBanner, Faq } from '@/components';
import { BannerData, FormatDetailData, faqs } from './data';
import ResumeFormatComp from '@/components/resume-format/ResumeFormatComp';


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
