import React from "react";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
// ==================
import { AutoPlaySlider, CTA } from "@/components";
import { resume_examples } from "./ResumeCategories";
import { cover_examples } from "./CoverLetterCategories";

type Example = resume_examples | cover_examples;

type SliderTemplatesProps = {
  examples: Example[];
  exp_img: string;
};

const SliderTemplates: React.FC<SliderTemplatesProps> = ({ examples, exp_img }) => {
  return (
    <>
      <AutoPlaySlider
        wrapperClasses=""
        options={{ slidesToScroll: 1 }}
        arrows={true}
        arrowPosition="justify-end"
      >
        {examples.map((example, idx) => (
          <div
            key={idx}
            className="grow-0 shrink-0 basis-[100%] md:basis-[50%] lg:basis-1/3 pl-5 min-w-[90%] sm:min-w-[50%] md:min-w-[33%] box-border"
          >
            <div className="flex items-center justify-center cursor-pointer flex-wrap mt-2 p-3 rounded-lg bg-indigo-200/20 backdrop-blur-none border-2 border-white transition-all duration-1000 group">
              <div className="ring-2 ring-zinc-500/20 rounded-lg shadow-lg overflow-hidden relative">
                {/* Templates Badge */}
                {example.template.is_paid === 1 && (
                  <div className="absolute -right-[33px] -top-[18px] transform rotate-45 w-[80px] h-[50px] pb-1 flex justify-center items-end bg-PrimaryDark">
                    <FaCrown className="text-[20px] text-yellow-500" />
                  </div>
                )}
                {/* Templates Images */}
                <Image
                  src={`${exp_img}/${example.preview_image}`}
                  alt="example_image"
                  width={300}
                  height={300}
                />
                {/* Templates Before */}
                <div className="flex items-center justify-center w-full h-full bg-slate-800/90 absolute top-0 left-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                  <div className="translate-y-56 group-hover:-translate-y-0 transition-all duration-1000">
                    <CTA
                      btn
                      text="Use This Example"
                      bgColor="bg-PrimaryDark hover:bg-transparent"
                      txtColor="text-white"
                      border="border border-white"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <p className="text-md font-semibold text-black text-center mt-4 truncate">
                  {"resume_name" in example ? example.resume_name : example.name}
                </p>
                <div className="w-full flex flex-col items-center mt-2 gap-2">
                  {example.job_positions.map((position, posIdx) => (
                    <div
                      key={posIdx}
                      className="bg-PrimaryDark text-white text-xs font-semibold px-4 py-1 rounded w-[250px] truncate text-center"
                    >
                      {position.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoPlaySlider>
    </>
  );
};

export default SliderTemplates;
