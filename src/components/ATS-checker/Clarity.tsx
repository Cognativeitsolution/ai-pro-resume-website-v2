import React from "react";
import { CTA } from "@/components";
import Image from "next/image";
import formatting from "media/images/formatting.svg";
import conciseness from "media/images/Conciseness.svg";
import impactful from "media/images/impactful.svg";

const Clarity = () => {
  const issues = [
    "Data Inside Tables May Be Skipped Or Read In The Wrong Order.",
    "Column Layout Gets Flattened, Causing Mixed-Up Data.",
    "Contact Info In Header/Footer Is Often Ignored By ATS.",
  ];
  return (
    <>
      <div className="bg-indigo-200/20 backdrop-blur-none border-2 border-white p-4 rounded-2xl w-full mt-5">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={formatting} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">Clarity</h2>
        </div>

        {/* conciseness*/}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-2 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Conciseness
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur. Quis autem vel eum iure reprehenderit
              qui in ea voluptate
            </p>
            <Image className="mx-auto" src={conciseness} alt="formatting_2" />
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              Good Job!
            </p>
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              All bullet points in your resume fit within the length limit.
            </p>
          </div>
        </div>

        {/* impactful */}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Impactful 
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur. Quis autem vel eum iure reprehenderit
              qui in ea voluptate
            </p>

            <Image className="mx-auto" src={impactful} alt="impactful" />
            <p className="text-black font-semibold text-center text-[16px] mx-auto flex items-center justify-center">
              No! <br />
              Not so impactful Resume structure
            </p>
            <div className="space-y-2 max-w-2xl">
              {issues.map((issue, idx) => (
                <div
                  key={idx}
                  className="bg-red-100 text-black text-sm sm:text-base rounded flex items-center justify-start gap-2"
                >
                  <div className="h-[40px] w-[6px] bg-red-500"></div>
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
        </div>
      </div>
    </>
  );
};

export default Clarity;
