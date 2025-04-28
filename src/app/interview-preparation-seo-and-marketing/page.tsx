'use client';

import { InnerBanner, Faq, InterviewQuestionsSeo } from '@/components';
import { BannerData, resumeFormatData, faqs } from './data';


const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <InterviewQuestionsSeo data={resumeFormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
