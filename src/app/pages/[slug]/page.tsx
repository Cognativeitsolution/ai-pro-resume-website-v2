"use client";
// =================
import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// =================
import { InnerBanner, Features, Counter, Stepper, Client, Reviews, } from "@/components";
import { BannerData, ClientData, CounterData, FeaturesData, StepperData, } from "./data";
import { reviewData } from "../../data";
import { OldAPI } from "@/services/oldService";
// =================

type PageDetails = {
    id: number;
    title: string;
    slug: string;
    heading: string;
    short_description: string;
    long_description: string;
    card_heading_one?: string | null;
    card_heading_two?: string | null;
    card_heading_three?: string | null;
    card_description_one?: string | null;
    card_description_two?: string | null;
    card_description_three?: string | null;
    meta_description: string;
    meta_keywords: string;
}

const Page = () => {
    const params = useParams();
    const slug = params?.slug as string | undefined;
    const [show_pages, set_show_pages] = useState<PageDetails>();

    useEffect(() => {
        if (slug) {
            console.log("Slug:", slug);

            OldAPI.get(`/page/${slug}`)
                .then((res) => {
                    console.log("res page", res.data);
                    set_show_pages(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching page:", err);
                });
        }
    }, [slug]);


    return (

        <>
            <Head>
                <title>{show_pages?.title} 3333 </title>
                <meta name="description" content={`${show_pages?.meta_description} 3333`} />
                <meta name="keywords" content={`${show_pages?.meta_keywords} 3333`} />
            </Head>
            <InnerBanner
                subtitle={show_pages?.title || BannerData.subtitle}
                title={show_pages?.heading || BannerData.title}
                description={show_pages?.short_description || BannerData.description}
            />
            {/* <Features data={FeaturesData} /> */}
            <Counter data={CounterData} />
            <Stepper data={StepperData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
};

export default Page;
