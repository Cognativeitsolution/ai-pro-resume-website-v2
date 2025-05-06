import React from "react";
// =================
import { InnerBanner, FindResumeTemplates, ParserFeatures, PrivacyFeatures, } from "@/components";
// =================
import { BannerData, FeaturesData, findResumeData, ParserFeatureData, tabSectionData } from "./data";
import TabSection from "@/components/sideTab/SideTab";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <FindResumeTemplates data={findResumeData} />
            <PrivacyFeatures data={FeaturesData} />
            <TabSection data={tabSectionData} />
        </>
    );
}
