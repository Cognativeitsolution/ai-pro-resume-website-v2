'use client';

import { InnerBanner, Faq } from '@/components';
import { BannerData, resumeFormatData, faqs } from './data';
import HowToWriteResume from '@/components/how-to-write-resume-format/HowToWriteResume';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <HowToWriteResume data={resumeFormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
