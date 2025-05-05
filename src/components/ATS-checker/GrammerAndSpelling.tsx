import React from "react";
import { CTA } from "@/components";
import Image from "next/image";
import relevance from "../../../public/images/relevance.svg";
import grammer from "../../../public/images/grammer.svg";
import resume_length_3 from "../../../public/images/resume_length_3.svg";

const GrammerAndSpelling = () => {
  const issues = [
    "Data Inside Tables May Be Skipped Or Read In The Wrong Order.",
    "Column Layout Gets Flattened, Causing Mixed-Up Data.",
  ];
  return (
    <>
      <div className="bg-indigo-200/20 backdrop-blur-none border-2 border-white p-4 rounded-2xl w-full mt-5">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={relevance} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">
            Grammar And Spelling
          </h2>
        </div>

        {/* Capitalization*/}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Capitalization
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              Having an error-free resume is key to making a good first
              impression on the hiring manager. Ensure that your resume is free
              from spelling and grammatical errors by reading it aloud a few
              times. For an extra layer of security, use the AI PRO
              RESUME builder and let the content checker do the heavy lifting
              for you.
            </p>

            <Image className="mx-auto" src={grammer} alt="impactful" />
            <p className="text-black font-semibold text-center text-[16px] mx-auto flex items-center justify-center">
              Oops! <br />
              It looks like some Typo and inconsistent Capitalization issues
            </p>
            <div className="space-y-2 max-w-2xl">
              {issues.map((issue, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffe0b9] text-black text-sm sm:text-base rounded flex items-center justify-start gap-2"
                >
                  <div className="h-[40px] w-[6px] bg-[#da9b4c]"></div>
                  <p>{issue}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex sm:flex-row gap-3 mt-5 items-center justify-center">
            <CTA
              link
              text="Fix with AI"
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

          <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6 rounded-lg max-w-5xl mx-auto">
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                With AI PRO Resume report, you get:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>A complete professional-grade resume checker report</li>
                <li>Ready to use suggestions for improving your resume</li>
                <li>Over 1000 industry-leading resume templates and samples</li>
                <li>Enhancv’s resume and cover letter builder</li>
                <li>Resume tailoring based on a job ad you provide</li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-gray-50">
              <Image
                src={resume_length_3}
                alt="Resume Preview"
                className="w-[300px] h-auto mx-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrammerAndSpelling;
