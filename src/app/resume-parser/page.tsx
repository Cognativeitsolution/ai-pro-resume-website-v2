'use client';

import { Faq, ParserBanner, ParserContent, ParserFeatures, ParserGoals, UploadParser } from "@/components";
import { BannerData, ParserFeatureData, ParserGoalData, ParserContentData, faqs } from "./data";
import Tailor from "@/components/dynamicSection/Tailor";

const page = () => {
    return (
        <>
            <ParserBanner {...BannerData} />
            <UploadParser position={true} />
            <ParserContent data={ParserContentData} />
            <Tailor />
            <ParserFeatures data={ParserFeatureData} />
            <ParserGoals data={ParserGoalData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
