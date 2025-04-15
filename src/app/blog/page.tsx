import {
    InnerBanner,
    Features,
    Counter,
    Stepper,
    Client,
    Blogs,
    Reviews,
} from "@/components";
import React from "react";
import {
    BannerData,
    ClientData,
    blogsData,
} from "./data";

export default function Page() {

    return (
        <>
            <InnerBanner {...BannerData} />
            <Blogs />
            <Client data={ClientData} />
            <Reviews />
        </>
    );
}
