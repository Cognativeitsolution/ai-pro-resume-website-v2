import React from "react";
// ===================
import { CTA } from "@/components";
// ===================
import ats from "media/images/atsResumeBgImge.webp";

const BuildATSfriendlyResume = () => {
  return (
    <>
   <div
  className="w-full h-auto md:h-52 bg-cover bg-center bg-no-repeat px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 my-5 rounded-2xl"
  style={{
    backgroundImage: `url(${ats.src})`,
  }}
>
  {/* Left side text */}
  <h2 className="text-white text-lg md:text-2xl font-semibold text-center md:text-left leading-snug">
    Build an ATS-friendly resume using AI
    <br />
    PRO RESUME’s resume templates.
  </h2>

  {/* Right side button */}
  <div className="flex justify-center md:justify-end w-full md:w-auto">
    <CTA
      link
      text="Build an ATS Friendly Resume"
      href="/"
      bgColor="bg-white"
      txtColor="text-black"
      border="border-2 border-white"
    />
  </div>
</div>
    </>
  );
};

export default BuildATSfriendlyResume;
