import React from "react";
import { resume_examples } from "./ResumeCategories";
import { AutoPlaySlider } from "@/components";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
import { cover_examples } from "./CoverLetterCategories";

type Example = resume_examples | cover_examples;

type SliderTemplatesProps = {
    examples: Example[];
    exp_img: string;
  };

const SliderTemplates : React.FC<SliderTemplatesProps> = ({examples,exp_img}) => {
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
            className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5 min-w-[90%] sm:min-w-[50%] md:min-w-[33%] box-border"
          >
            <div className="flex items-center justify-center cursor-pointer flex-wrap mt-2 p-3 rounded-lg bg-indigo-200/20 backdrop-blur-none border-2 border-white">
              <div className="ring-2 ring-zinc-500/20 rounded-lg shadow-lg overflow-hidden relative">
                {example.template.is_paid === 1 && (
                  <div className="absolute -right-[33px] -top-[18px] transform rotate-45 w-[80px] h-[50px] pb-1 flex justify-center items-end bg-PrimaryDark">
                    <FaCrown className="text-[20px] text-yellow-500" />
                  </div>
                )}
                <Image
                  src={`${exp_img}/${example.preview_image}`}
                  alt="example_image"
                  width={300}
                  height={300}
                />
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
