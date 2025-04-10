import {
    InnerBanner,
    Features,
    Counter,
} from "@/components";
import React from "react";
import {
    BannerData,
    FeaturesData,
} from "./data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Features data={FeaturesData} />
            <Counter />
            {/* <ExploreTemplates />
            <VideoSection />
            <Steps />
            <Ats />
            <FindResumeTemplates />
            <ServiceSection />
            <Reviews />
            <Faq /> */}
        </>
    );
}
