import {
    InnerBanner,
    Features,
    Counter,
} from "@/components";
import React from "react";
import {
    BannerData,
    ClientData,
    CounterData,
    FeaturesData,
    StepperData,
} from "./data";
import Stepper from "@/components/stepper/Stepper";
import Client from "@/components/client/Client";

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
