'use client';
import { InnerBanner, Faq, CoverLetterSections, ParserFeatures, FindResumeTemplates } from '@/components';
import { BannerData, faqs, FeaturesData, findCoverLetterData, includedSecCoverLetter, ParserFeatureData, tabSectionData } from './data';
import TabSection from '@/components/sideTab/SideTab';
import BuilderFeatures from '@/components/Features/BuilderFeatures';

const page = () => {
    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <FindResumeTemplates data={findCoverLetterData} />
            <BuilderFeatures data={FeaturesData} />
            <CoverLetterSections sectionDetail={includedSecCoverLetter} />
            <TabSection data={tabSectionData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
