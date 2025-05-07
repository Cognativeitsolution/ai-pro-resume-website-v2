import React from "react";
// =================
import { InnerBanner, FindResumeTemplates, ParserFeatures, PrivacyFeatures, CoverLetterSections, Faq, } from "@/components";
// =================
import { BannerData, faqs, FeaturesData, findResumeData, includedSecCoverLetter, ParserFeatureData, tabSectionData } from "./data";
import TabSection from "@/components/sideTab/SideTab";
import BuilderFeatures from "@/components/Features/BuilderFeatures";

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
