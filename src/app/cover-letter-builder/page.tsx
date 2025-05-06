'use client';
import { InnerBanner, Faq, CoverLetterSections, ParserFeatures, FindResumeTemplates } from '@/components';
import { BannerData, faqs, findCoverLetterData, includedSecCoverLetter, ParserFeatureData, tabSectionData } from './data';
import TabSection from '@/components/sideTab/SideTab';

const page = () => {
    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <FindResumeTemplates data={findCoverLetterData} />
            <CoverLetterSections sectionDetail={includedSecCoverLetter} />
            <TabSection data={tabSectionData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
