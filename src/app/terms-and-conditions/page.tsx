import { Client, Counter, InnerBanner, PrivacyFeatures, Reviews, ServiceSection, Welcome } from "@/components";
import { BannerData, FeaturesData, WelcomeData } from "./data";
import { ClientData, CounterData } from "../about-us/data";
import { reviewData, serviceSectionData } from "../data";
// =================

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Welcome data={WelcomeData} />
            <PrivacyFeatures data={FeaturesData} />
            <Counter data={CounterData} />
            <ServiceSection data={serviceSectionData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
}
