import { Faq, ParserBanner, ParserContent, ParserFeatures, ParserGoals, Tailor, UploadParser } from "@/components";
import { BannerData, ParserFeatureData, ParserGoalData, ParserContentData, faqs } from "./data";
// =================

const page = () => {
    return (
        <>
            <ParserBanner {...BannerData} />
            <UploadParser progress={false} />
            <ParserContent data={ParserContentData} />
            <Tailor />
            <ParserFeatures data={ParserFeatureData} />
            <ParserGoals data={ParserGoalData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
