import React from "react";
import { CTA } from "@/components";
import Image from "next/image";
import evaluation from "../../../public/images/evaluation.svg";

const ParsedResumeOverview = () => {
  const totalBlocks = 9;
  const filledBlocks = 7;
  const score = 83;
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
            <h3 className="text-xl font-semibold text-gray-900 leading-snug">
              How Much of Your Resume Was Parsed?
            </h3>
            <p className="text-gray-500 text-[15px]">
              Our intelligent Resume Parser extracts key details from your
              resume to evaluate how ATS-friendly it is. We show you how much of
              your content—like job titles, skills, education, and
              experience—has been successfully parsed and structured for
              automated systems.
            </p>
            <div className="flex items-center justify-center w-full">
              <div className="">
                <p className="text-sm text-center sm:text-start font-semibold text-black">
                  Resume Parser Score
                </p>
                <div className="flex space-x-1 sm:space-x-2 mt-1 px-0 sm:px-2 py-1 rounded-full">
                  {Array.from({ length: totalBlocks }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-3 rounded-full ${
                        idx < filledBlocks ? "bg-[#a78bfa]" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[#a78bfa] text-md font-semibold mt-6">
                {score}%
              </span>
            </div>
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
