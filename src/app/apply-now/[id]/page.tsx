"use client";
import React from "react";
import { useParams } from "next/navigation";
// =================
import { InnerBanner } from "@/components";
// =================
import { BannerData } from "./data";
import ApplyNowForm from "@/components/applyNowForm/ApplyNowForm";


const Page = () => {
    const params = useParams();
    const jobId = params.id;

    return (
        <>
            <InnerBanner {...BannerData} />
            <ApplyNowForm />
        </>
        // <div className="min-h-screen flex justify-center items-center">
        //     <h1 className="text-2xl font-bold">
        //         Apply Now for Job ID: {jobId}
        //     </h1>
        // </div>
    );
};

export default Page;
