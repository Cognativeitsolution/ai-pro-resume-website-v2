"use client";

import React from "react";
import { BuildATSfriendlyResume, Evaluation, ParsedResumeOverview, YourScore } from "@/components";

export default function Page() {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-6">
            <YourScore />

            {/* Content */}
            <div className="w-full xl:w-3/4 relative top-24">
              <Evaluation />
              <ParsedResumeOverview/>
              <BuildATSfriendlyResume/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
