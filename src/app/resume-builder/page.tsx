import { InnerBanner, FindResumeTemplates, ParserFeatures, CoverLetterSections, Faq, BuilderFeatures, TabSection, } from "@/components";
import { BannerData, faqs, FeaturesData, findResumeData, includedSecCoverLetter, ParserFeatureData, tabSectionData } from "./data";
// =================

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <FindResumeTemplates data={findResumeData} />
            <BuilderFeatures data={FeaturesData} />
            <CoverLetterSections sectionDetail={includedSecCoverLetter} />
            <TabSection data={tabSectionData} />
            <Faq data={faqs} />
        </>
    );
}
