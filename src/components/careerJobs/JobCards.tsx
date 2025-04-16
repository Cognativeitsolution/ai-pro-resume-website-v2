"use client";
import React from "react";
// =================
import { FaAngleDoubleRight } from "react-icons/fa";
// =================
import { CTA } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Job = {
    id: number;
    title: string;
    short_description: string;
    last_date_of_apply: string;
    slug: string;
};

type JobCardsProps = {
    jobs: Job[];
};

const JobCards = ({ jobs }: JobCardsProps) => {
    const route = useRouter()
    const goToApplyNow = (page: any) => {
        route.push(`/apply-now/${page}`)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-4">
            {jobs.map((job) => (
                <div key={job.id} onClick={() => goToApplyNow(job?.id)}
                    className="w-full h-full p-4 md:p-6 flex flex-col justify-between mx-auto rounded-2xl bg-indigo-200/20 backdrop-blur-none border-2 border-white">
                    <div className="flex flex-col justify-center items-center gap-2 mb-10">
                        <h4 className="text-[24px] leading-[34px] font-medium text-center">
                            {job.title}
                        </h4>
                        <p className="text-[16px] text-zinc-700 text-center">
                            {job.short_description}
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="bg-primary px-2 rounded-md">
                            <span className="text-[16px] text-white font-medium">
                                {new Date(job.last_date_of_apply).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-500">
                            <FaAngleDoubleRight className="text-hamzaPrimary" />
                            <CTA
                                link
                                text="Login to Apply"
                                href={job.slug}
                                bgColor="bg-transparent !px-0 !h-max"
                                txtColor="text-hamzaPrimary"
                                border="border-0"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobCards;
