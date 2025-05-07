import { InnerBanner, Faq, CoverLetterSections, ParserFeatures, FindResumeTemplates, TabSection, BuilderFeatures } from '@/components';
import { BannerData, faqs, FeaturesData, findCoverLetterData, includedSecCoverLetter, ParserFeatureData, tabSectionData } from './data';
// ===============

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
