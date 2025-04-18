import React from "react";
// =================
import { InnerBanner, Client, Reviews, CareerJobs, } from "@/components";
// =================
import { BannerData, CareerData, ClientData, } from "./data";
import { reviewData } from "../data";

export default function Page() {
    return (
        <>
            <InnerBanner {...BannerData} />
            <CareerJobs data={CareerData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
}
