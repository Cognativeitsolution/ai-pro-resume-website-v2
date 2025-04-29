import React from 'react'
import ats from "../../../public/images/atsResumeBgImge.svg";
import { CTA } from "@/components";

const JobWinningResume = () => {
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
        Job Winning resume in Minutes
        </h2>

        {/* Right side button */}
        <CTA
          link
          text="Create New Resume"
          href="/"
          bgColor="bg-white"
          txtColor="text-black"
          border="border-2 border-white"
        />
      </div>
   
   </>
  )
}

export default JobWinningResume