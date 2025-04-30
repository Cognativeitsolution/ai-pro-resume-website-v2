'use client';

import { ParserBanner, ParserContent, ParserFeatures, ParserGoals, UploadParser } from "@/components";
import { BannerData, ParserFeatureData, ParserGoalData, ParserContentData } from "./data";

const page = () => {
    return (
        <>
            <ParserBanner {...BannerData} />
            <UploadParser />
            <ParserFeatures data={ParserFeatureData} />
            <ParserContent data={ParserContentData} />
            <ParserGoals data={ParserGoalData} />
        </>
    );
};

export default page;
