import React from "react";
// =================
import { InnerBanner, Features, Counter, Stepper, Client, Reviews, IconSlider, } from "@/components";
// =================
import { BannerData, ClientData, CounterData, FeaturesData, IconData, StepperData, } from "./data";
import { reviewData } from "../data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <IconSlider {...IconData} />
            <Features data={FeaturesData} />
            <Counter data={CounterData} />
            <Stepper data={StepperData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
}
