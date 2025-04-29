'use client';

import { InnerBanner, Faq, HowToWriteCoverLetter } from '@/components';
import { BannerData, FormatData, faqs } from './data';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <HowToWriteCoverLetter data={FormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
