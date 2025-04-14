import React from "react";
// =================
import { Client, Counter, InnerBanner, PrivacyFeatures, Reviews, Welcome } from "@/components";
// =================
import { BannerData, FeaturesData, } from "./data";
import { ClientData, CounterData } from "../about-us/data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Welcome />
            <PrivacyFeatures data={FeaturesData} />
            <Counter data={CounterData} />
            <Client data={ClientData} />
            <Reviews />
        </>
    );
}
