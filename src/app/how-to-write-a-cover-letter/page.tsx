'use client';

import { InnerBanner, Faq, HowToWriteCoverLetter } from '@/components';
import { BannerData, resumeFormatData, faqs } from './data';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <HowToWriteCoverLetter data={resumeFormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
