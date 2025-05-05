import React from "react";
// =================
import { InnerBanner, IconSlider, FindResumeTemplates, ParserFeatures } from "@/components";
// =================
import { BannerData, findResumeData, ParserFeatureData } from "./data";
import { reviewData } from "../data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <ParserFeatures data={ParserFeatureData} />
            <FindResumeTemplates data={findResumeData} />
            {/* <Features data={FeaturesData} />
            <Counter data={CounterData} />
            <Stepper data={StepperData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} /> */}
        </>
    );
}
