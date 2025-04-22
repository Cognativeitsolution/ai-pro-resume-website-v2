"use client";
import React from "react";
import { useRouter } from "next/navigation";
// =================
import { CTA } from "@/components";
// =================
import { FaAngleDoubleRight } from "react-icons/fa";

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
  const router = useRouter();

  const goToApplyNow = (jobId: number) => {
    router.push(`/apply-now/${jobId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => goToApplyNow(job.id)}
          className="w-full p-4 md:p-6 flex flex-col justify-between rounded-2xl bg-indigo-200/20 border-2 border-white cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2 mb-10 text-center">
            <h4 className="text-[24px] leading-[34px] font-medium">{job.title}</h4>
            <p className="text-[16px] text-zinc-700">{job.short_description}</p>
          </div>
          <div className="flex justify-between items-center">
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
