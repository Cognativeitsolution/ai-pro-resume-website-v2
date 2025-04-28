import React from "react";
import { CTA } from "@/components";
import Image from "next/image";
import evaluation from "../../../public/images/evaluation.svg";

const ParsedResumeOverview = () => {
  return (
    <>
      <div className="bg-[#ece9fe] p-4 rounded-2xl shadow-md w-full mt-5">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={evaluation} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">
            Parsed Resume Overview
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-4 w-full">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              How Much of Your Resume Was Parsed?
            </h3>
            <p className="text-gray-500 text-[15px]">
              Our intelligent Resume Parser extracts key details from your
              resume to evaluate how ATS-friendly it is. We show you how much of
              your content—like job titles, skills, education, and
              experience—has been successfully parsed and structured for
              automated systems.
            </p>
            <div>loading compoinent</div>
            <p className="text-gray-500 text-[15px]">
              Our resume parser evaluates and extracts your information just
              like a hiring system would. Track the percentage of successfully
              parsed content to ensure your resume stands out.
            </p>
          </div>

          <div className="flex gap-3 mt-5 items-center justify-center">
            <CTA
              link
              text="Upload Resume again"
              href="/"
              bgColor="bg-primary"
              txtColor="text-white"
              border="border-2 border-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParsedResumeOverview;
