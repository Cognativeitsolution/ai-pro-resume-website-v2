'use client';
import { InnerBanner, Faq } from '@/components';
import { BannerData, resumeFormatData, faqs } from './data';
import ResumeFormatComp from '@/components/resume-format/ResumeFormatComp';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <ResumeFormatComp data={resumeFormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
