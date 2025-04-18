import React from "react";
// =================
import { InnerBanner, Features, Counter, Stepper, Client, Reviews, } from "@/components";
// =================
import { BannerData, ClientData, CounterData, FeaturesData, StepperData, } from "./data";
import { reviewData } from "../data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Features data={FeaturesData} />
            <Counter data={CounterData} />
            <Stepper data={StepperData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
}
