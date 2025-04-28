import React from "react";
import ats from "../../../public/images/atsResumeBgImge.svg";
import { CTA } from "@/components";

const BuildATSfriendlyResume = () => {
  return (
    <>
      <div
        className="w-full h-52 bg-contain bg-no-repeat bg-center flex items-center justify-between px-8"
        style={{
          backgroundImage: `url(${ats.src})`,
        }}
      >
        {/* Left side text */}
        <h2 className="text-white text-2xl font-semibold">
          Build an ATS-friendly resume using AI
          <br />
          PRO RESUME’s resume templates.
        </h2>

        {/* Right side button */}
        <CTA
          link
          text="Build an ATS Friendly Resume"
          href="/"
          bgColor="bg-white"
          txtColor="text-black"
          border="border-2 border-white"
        />
      </div>
    </>
  );
};

export default BuildATSfriendlyResume;
