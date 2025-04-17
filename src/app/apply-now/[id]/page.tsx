"use client";
import React from "react";
import { useParams } from "next/navigation";
// =================
import { ApplyNowForm, InnerBanner } from "@/components";
// =================
import { BannerData } from "./data";


const Page = () => {
    const params = useParams();
    const jobId = params.id;

    return (
        <>
            <InnerBanner {...BannerData} />
            <ApplyNowForm />
        </>
    );
};

export default Page;
