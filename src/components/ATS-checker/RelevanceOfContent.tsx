import Image from "next/image";
import React from "react";
import { CTA } from "@/components";
import relevance from "../../../public/images/relevance.svg";
import good_job from "../../../public/images/good_job.svg";

const RelevanceOfContent = () => {
  return (
    <>
      <div className="bg-indigo-200/20 backdrop-blur-none border-2 border-white p-4 rounded-2xl w-full mt-5">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={relevance} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">
            Relevance of Content
          </h2>
        </div>
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-2 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Other Activities
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia.
            </p>
            <Image className="mx-auto" src={good_job} alt="formatting_2" />
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              Good Job!
            </p>
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              All bullet points in your resume fit within the length limit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelevanceOfContent;
