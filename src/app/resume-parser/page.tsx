'use client';

import { ParserBanner, UploadParser } from "@/components";
import { BannerData } from "./data";

const page = () => {
    return (
        <>
            <ParserBanner {...BannerData} />
            <UploadParser />
        </>
    );
};

export default page;
