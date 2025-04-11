import React from "react";
// =================
import { InnerBanner, PrivacyFeatures, Reviews } from "@/components";
import Welcome from "@/components/welcome/Welcome";
// =================
import { BannerData, FeaturesData, } from "./data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Welcome />
            <PrivacyFeatures data={FeaturesData} />
            <Reviews />
        </>
    );
}
