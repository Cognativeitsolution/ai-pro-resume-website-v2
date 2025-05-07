"use client"
// ===================
import React from "react";
import Image from "next/image";
// ===================
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
// ===================
import { CTA } from "@/components";
// ===================
import evaluation from "media/images/evaluation.webp";

ChartJS.register(ArcElement, Tooltip);

const Evaluation = () => {
  const score = 80;

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#59b036", "#e5e7eb"],
        borderWidth: 0,
        cutout: "70%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: { enabled: true },
    },
  };

  const score2 = 83;
  const totalBlocks = 10;
  const filledBlocks = Math.round((score2 / 100) * 10);



  return (
    <>
      <div className="bg-indigo-200/20 backdrop-blur-none border-2 border-white p-4 rounded-2xl w-full">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={evaluation} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">
            Evaluation
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
            {/* Left Section */}
            <div className="flex-1 space-y-4 w-full md:w-1/2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                We’ll Help You Enhance Your Resume <br className="hidden lg:block" /> And Impress Hiring
                Managers
              </h3>

              <p className="text-gray-500 text-[15px]">
                An Applicant Tracking System (ATS) is a tool used by employers
                and recruiters to efficiently review and filter a large volume
                of job applications.
                <br />
                Having a high parse rate on your resume means the ATS can
                accurately read and understand your information—such as
                experience and skills—greatly improving the chances of your
                resume reaching the recruiter’s desk.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-3">
              <h4 className="text-sm text-gray-600 font-medium">
                Overall Professionalism Score:
              </h4>
              <div className="relative w-full h-[200px] flex items-end justify-center">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
                  <div className="text-[#59b036] text-xl mt-5 font-semibold">
                    Score
                  </div>
                  <div className="text-[#59b036] text-xl font-bold">
                    {score}/100
                  </div>
                </div>
              </div>

              {/* Black Line and Dot */}
              <div className="relative w-full max-w-[220px]">
                <div className="border-t border-black"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-[5px] w-3 h-3 bg-black rounded-full"></div>
              </div>

              {/* Issues Found */}
              <div className="text-red-400 font-semibold text-[14px] mt-2">
                08 Issues Found
              </div>
            </div>
          </div>
          {/* //buttons */}
          <div className="flex flex-col sm:flex sm:flex-row gap-3 mt-5 items-center justify-center">
            <CTA
              link
              text="Fix With AI"
              href="/"
              bgColor="bg-primary"
              txtColor="text-white"
              border="border-2 border-white"
            />
            <CTA
              link
              text="Edit & Fix Resume"
              href="/"
              bgColor="bg-primary"
              txtColor="text-white"
              border="border-2 border-white"
            />
          </div>
        </div>

        <div className="w-full mt-7">
          {/* heading */}
          <div className="flex items-center gap-2">
            <Image src={evaluation} alt="evaluation" />
            <h2 className="text-[20px] font-semibold text-gray-800">
              Parsed Resume Overview
            </h2>
          </div>
          <div className="bg-white p-5 rounded-2xl mt-[10px]">
            <div className="flex-1 space-y-4 w-full">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                How Much of Your Resume Was Parsed?
              </h3>
              <p className="text-gray-500 text-[15px]">
                Our intelligent Resume Parser extracts key details from your
                resume to evaluate how ATS-friendly it is. We show you how much
                of your content—like job titles, skills, education, and
                experience—has been successfully parsed and structured for
                automated systems.
              </p>
              <div className="flex items-center justify-center w-full">
                <div className="">
                  <p className="text-sm text-center font-semibold text-black">
                    Resume Parser Score
                  </p>
                  <div className="flex space-x-1 sm:space-x-2 mt-1 px-0 sm:px-2 py-1 rounded-full">
                    {Array.from({ length: totalBlocks }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-4 h-2 md:w-8 md:h-3 rounded-full ${idx < filledBlocks ? "bg-[#a78bfa]" : "bg-gray-200"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[#a78bfa] text-md font-semibold mt-6">&nbsp;&nbsp;{score2}%</span>
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
      </div>
    </>
  );
};

export default Evaluation;
