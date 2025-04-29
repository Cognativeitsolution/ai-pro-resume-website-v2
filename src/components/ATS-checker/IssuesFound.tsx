import Image from "next/image";
import React from "react";
import issuesfound from "../../../public/images/issuesfound.png";
import { CTA } from "@/components";

const IssuesFound = () => {
  const issues = [
    "Data Inside Tables May Be Skipped Or Read In The Wrong Order.",
    "Column Layout Gets Flattened, Causing Mixed-Up Data.",
    "Contact Info In Header/Footer Is Often Ignored By ATS.",
    "ATS May Not Recognize The Icon And Drop The Data Next To It.",
    "ATS Won’t Match This With Known Headers Like “Work Experience”.",
    "Content In Shapes Or Text Boxes May Be Invisible To Parsers.",
    "Non-Standard Bullets Render As Unknown Symbols Or Get Dropped.",
    "No Text Can Be Extracted — Completely Unreadable By ATS.",
  ];
  return (
    <>
      <div className="w-full bg-white p-4 md:p-6 rounded-xl shadow-md mb-5">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-[50px] h-[50px]">
            <Image src={issuesfound} alt="issues" />
          </div>
          <div className="ml-2 font-semibold text-md">
            <span className="bg-red-100 px-3 rounded-2xl mr-2">
              {" "}
              {issues.length}{" "}
            </span>
            Issues Found
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-2 mb-5 max-w-xl mx-auto">
          {issues.map((issue, idx) => (
            <>
              <div
                key={idx}
                className="bg-red-100 text-black text-sm sm:text-base rounded flex items-center justify-start gap-2"
              >
                <div className="h-[40px] w-[6px] bg-red-500"></div>
                <p>{issue}</p>
              </div>
            </>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5 items-center justify-center">
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
      </div>
    </>
  );
};

export default IssuesFound;
