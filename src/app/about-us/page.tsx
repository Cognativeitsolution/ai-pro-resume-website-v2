import {
    InnerBanner,
    Features,
    Counter,
    Stepper,
    Client,
} from "@/components";
import React from "react";
import {
    BannerData,
    ClientData,
    CounterData,
    FeaturesData,
    StepperData,
} from "./data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <Features data={FeaturesData} />
            <Counter data={CounterData} />
            <Stepper data={StepperData} />
            <Client data={ClientData} />
        </>
    );
}
