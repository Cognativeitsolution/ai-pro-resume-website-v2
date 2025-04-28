'use client';

import { InnerBanner, Faq, HowToWriteResume } from '@/components';
import { BannerData, resumeFormatData, faqs } from './data';


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
