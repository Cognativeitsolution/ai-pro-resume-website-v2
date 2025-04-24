"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AutoPlaySlider } from "@/components";
import { OldAPI } from "@/services/oldService";
import CustomLoader from "../loader/CustomLoader";

type categories = {
  cover_letter_description: string;
  icon: string;
  id: any;
  name: string;
  parent_id: number;
  short_description: string;
  top: number;
};

type job_positions = {
  id: number;
  name: string;
};

type template = {
  id: number;
  is_paid: number;
  name: string;
};

type resume_examples = {
  category_id: number;
  city: string;
  contact_number: string;
  country_id: number;
  created_at: string;
  date_of_birth: string;
  deleted_at: any;
  email_address: string;
  first_name: string;
  gender: string;
  id: number;
  id_no: string;
  job_positions: job_positions[];
  job_title: string;
  last_name: string;
  maritial_status: string;
  middle_name: string;
  nationality: any;
  phone_number: string;
  postal_code: string;
  preview_image: string;
  resume_name: string;
  state: string;
  street_address: string;
  template: template[];
  template_id: number;
  updated_at: string;
};

type TopCategories = {
  cover_letter_description: string;
  icon: string;
  id: number;
  name: string;
  parent_id: number;
  resume_examples: resume_examples[];
  short_description: string;
  top: number;
};

const Categories = () => {
  const [Categories, setCategories] = useState<categories[]>([]);
  const [top_categories, set_top_categories] = useState<TopCategories[]>([]);
  const [isfilter, setIsfilter] = useState<any>(false);
  const [exp_img, setExp_img] = useState<any>([]);
  const [frontResumeTemplates, setFrontResumeTemplates] = useState<
    resume_examples[]
  >([]);
  const [selectedCatName, setSelectedCatName] = useState<string>("");
  const [selectedCatDesc, setSelectedCatDesc] = useState<string>("");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    OldAPI.get("template-categories")
      .then((res) => {
        // console.log(res);
        setCategories(res.data.categories);
        set_top_categories(res.data.top_categories);
        setExp_img(res.data.image_url);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  }, []);

  const chk_temp = (cat_id: number, cat_name: string, cat_des: string) => {
    setIsfilter(true);
    setShowLoader(true);
    OldAPI.get("front-resume-templates", { category_id : cat_id })
      .then((res) => {
        // console.log(res);
        setFrontResumeTemplates(res.data.resume_examples);
        setSelectedCatName(cat_name);
        setSelectedCatDesc(cat_des);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  };

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          {showLoader ? (
            <CustomLoader
              size={50}
              color="#9885FF"
              text="Fetching Resume Examples..."
            />
          ) : (
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Tabs */}
              <div className="w-full h-full xl:w-1/4 border-2 border-white bg-indigo-200/20 rounded-xl p-4 xl:sticky overflow-y-auto top-32 z-0">
                <div className="divide-y-[1.5px] divide-[#ffffff]">
                  <h1 className="text-2xl py-4 px-4 text-hamzaPrimary">
                    Categories
                  </h1>
                  {Categories?.sort((a, b) => a.name.localeCompare(b.name)).map(
                    (category, index) => (
                      <div
                        key={index}
                        id={category.id}
                        onClick={() => {
                          chk_temp(
                            category.id,
                            category.name,
                            category.short_description
                          );
                        }}
                        className={`flex gap-2 font-Lexend justify-start items-center p-2 text-slate-900 cursor-pointer  hover:text-hamzaPrimary my-2`}
                      >
                        <p className="font-Lexend text-lg pl-2">
                          {category.name}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full xl:w-3/4">
                {!isfilter ? (
                  top_categories?.map((top_categories, index) => {
                    if (top_categories.resume_examples.length === 0) return;
                    return (
                      <div key={index}>
                        <div className="px-2 lg:px-8">
                          <h1 className="text-xl lg:text-2xl text-hamzaPrimary">
                            {top_categories.name}
                          </h1>
                        </div>
                        {top_categories.resume_examples.length < 4 ? (
                          <div className="flex flex-col md:flex md:flex-row justify-start items-start gap-2">
                            {top_categories.resume_examples.map(
                              (resume_examples, idx) => (
                                <div
                                  key={idx}
                                  className="w-full sm:w-1/2 xl:w-1/3 p-2 box-border"
                                >
                                  <div className="flex flex-col items-center justify-center cursor-pointer mt-2 w-full rounded">
                                    <Image
                                      src={
                                        exp_img +
                                        "/" +
                                        resume_examples.preview_image
                                      }
                                      alt="example_image"
                                      width={300}
                                      height={300}
                                    />
                                    <p className="text-md font-semibold text-black text-center truncate mt-2 w-full">
                                      {resume_examples.resume_name}
                                    </p>

                                    <div className="w-full flex flex-col items-center mt-2 gap-2">
                                      {resume_examples.job_positions.map(
                                        (position, posIdx) => (
                                          <div
                                            key={posIdx}
                                            className="bg-PrimaryDark text-white text-xs font-semibold px-4 py-1 rounded w-[250px] truncate text-center"
                                          >
                                            {position.name}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <AutoPlaySlider
                            wrapperClasses=""
                            options={{ slidesToScroll: 1 }}
                            arrows={true}
                            arrowPosition="justify-end"
                          >
                            {top_categories.resume_examples.map(
                              (resume_examples, idx) => (
                                <div
                                  key={idx}
                                  className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5 min-w-[90%] sm:min-w-[50%] md:min-w-[33%] box-border"
                                >
                                  <div className="flex items-center justify-center cursor-pointer flex-wrap mt-2">
                                    <Image
                                      src={
                                        exp_img +
                                        "/" +
                                        resume_examples.preview_image
                                      }
                                      alt="example_image"
                                      width={300}
                                      height={300}
                                    />
                                    <div className="relative w-full">
                                      <p className="text-md font-semibold text-black text-center truncate mt-2 mx-auto">
                                        {resume_examples.resume_name}
                                      </p>
                                      <div className="w-full flex flex-col items-center mt-2 gap-2">
                                        {resume_examples.job_positions.map(
                                          (position, posIdx) => (
                                            <div
                                              key={posIdx}
                                              className="bg-PrimaryDark text-white text-xs font-semibold px-4 py-1 rounded w-[250px] truncate text-center"
                                            >
                                              {position.name}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </AutoPlaySlider>
                        )}

                        <br />
                        <br />
                      </div>
                    );
                  })
                ) : (
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
                        frontResumeTemplates?.length === 0
                          ? ""
                          : "grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10"
                      } `}
                    >
                      {frontResumeTemplates?.length !== 0 ? (
                        frontResumeTemplates?.map((template, idx) => {
                          return (
                            <div key={idx} className="w-full mt-2">
                              <Image
                                src={exp_img + "/" + template.preview_image}
                                alt="template_image"
                                width={300}
                                height={300}
                                className=""
                              />
                              <p className="text-md text-black font-semibold text-center mt-2 mx-auto">
                                {template?.resume_name}
                              </p>
                              {template?.job_positions.map(
                                (position, posIdx) => (
                                  <div
                                    key={posIdx}
                                    className="bg-PrimaryDark text-white flex items-center justify-center text-xs font-semibold px-4 py-1 rounded mt-2"
                                  >
                                    <span className="max-w-[160px] truncate mx-auto">
                                      {position.name}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <h1 className="my-2 text-xl font-bold px-6">
                          No results
                        </h1>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
