'use client';
import { InnerBanner, Faq, CoverLetterSections, ParserFeatures } from '@/components';
import { BannerData, DynamicSectionData, faqs, includedSecCoverLetter, ParserFeatureData } from './data';
import DynamicSection from '@/components/dynamicSection/DynamicSection';

const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <CoverLetterSections sectionDetail={includedSecCoverLetter} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
