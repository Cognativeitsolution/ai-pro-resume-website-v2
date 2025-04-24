import Image from "next/image";
import React from "react";
import { FaCrown } from "react-icons/fa";
import { resume_examples } from "./ResumeCategories";
import { cover_examples } from "./CoverLetterCategories";

type Example = resume_examples | cover_examples;

type FilteredCategoryDetailsProps = {
  selectedCatName: string;
  selectedCatDesc: string;
  templates: Example[];
  exp_img: string;
};

const FilteredCategoryTemplates: React.FC<FilteredCategoryDetailsProps> = ({
  selectedCatName,
  selectedCatDesc,
  templates,
  exp_img,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-2xl text-hamzaPrimary text-center sm:text-start">
          {selectedCatName}
        </h3>
        <hr />
        <p
          className="text-sm sm:text-lg my-2 text-center sm:text-start"
          dangerouslySetInnerHTML={{
            __html: selectedCatDesc,
          }}
        />
        <div
          className={`${
            templates?.length === 0
              ? ""
              : "grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10"
          } `}
        >
          {templates?.length !== 0 ? (
            templates.map((template, idx) => (
              <div
                key={idx}
                className="w-full mt-2 flex flex-col p-3 rounded-lg bg-indigo-200/20 backdrop-blur-none border-2 border-white cursor-pointer"
              >
                <div className="ring-2 ring-zinc-500/20 rounded-lg shadow-lg overflow-hidden relative">
                  {template.template.is_paid === 1 && (
                    <div className="absolute -right-[33px] -top-[18px] transform rotate-45 w-[80px] h-[50px] pb-1 flex justify-center items-end bg-PrimaryDark">
                      <FaCrown className="text-[20px] text-yellow-500" />
                    </div>
                  )}
                  <Image
                    src={`${exp_img}/${template.preview_image}`}
                    alt="template_image"
                    width={300}
                    height={300}
                  />
                </div>
                <p className="text-md text-black font-semibold text-center mt-4 mx-auto">
                  {"resume_name" in template
                    ? template.resume_name
                    : template.name}
                </p>
                {template.job_positions.map((position, posIdx) => (
                  <div
                    key={posIdx}
                    className="bg-PrimaryDark text-white flex items-center justify-center text-xs font-semibold px-4 py-1 rounded mt-2"
                  >
                    <span className="max-w-[160px] truncate mx-auto">
                      {position.name}
                    </span>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <h1 className="my-2 text-xl font-bold px-6">No results</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FilteredCategoryTemplates;
