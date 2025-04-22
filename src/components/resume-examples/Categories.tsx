"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ResumeCategories } from "../../app/resume-examples/data";
import { AutoPlaySlider } from "@/components";
import { OldAPI } from "@/services/oldService";
import axios from "axios";

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
  const [activeCategory, setActiveCategory] = useState(Categories[0]);
  const [isfilter, setIsfilter] = useState<any>(false);

  useEffect(() => {
    OldAPI.get("template-categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data.categories);
        set_top_categories(res.data.top_categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chk_temp = (cat_id: number, cat_name: string, cat_des: string) => {
    setIsfilter(true);

    // axios
    //   .get(global.baseurl + "/front-resume-templates?category_id=" + cat_id)
    //   .then((response) => {
    //     set_templates(response.data.data.resume_examples);

    //     setSelectedCatName(cat_name);
    //     setSelectedCatDesc(cat_des);
    //     setJobPositionDetails();
    //     setIsloading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tabs */}
            <div className="w-full h-full lg:w-1/4 border-2 border-white bg-indigo-200/20 rounded-xl p-4">
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
            <div className="w-full lg:w-3/4">
              {!isfilter ? (
                top_categories?.map((top_categories, index) => {
                  if (top_categories.resume_examples.length === 0) return;
                  return (
                    <div key={index}>
                      <div className="flex justify-between items-center flex-wrap ">
                        <div className="px-2 lg:px-8">
                          <h1 className="font-Lexend text-md lg:text-2xl text-[#0072b1]">
                            {top_categories.name}
                          </h1>
                        </div>
                      </div>
                      {top_categories.resume_examples.length ? (
                        <div className="flex justify-start items-start flex-wrap ">
                          {top_categories.resume_examples?.map(
                            (resume_examples, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className="w-full sm:w-[50%] md:w-[33%]"
                                >
                                  <div
                                    className="dd_btn4 flex justify-normal items-start px-6 py-8 lg:p-2 text-slate-600 cursor-pointer flex-wrap mt-2 "
                                    id={
                                      "bborder_box3_" + resume_examples.id + idx
                                    }
                                  >
                                    <div className="cl_hover2 lg:m-4  ">
                                      <div className="relative">
                                        <div
                                          className="relative bborder_box"
                                          id={
                                            "bborder_box_" +
                                            resume_examples.id +
                                            idx
                                          }
                                        >
                                          <div
                                            className="absolute border border-solid border-[#01B2AC] rounded-xl w-full h-full z-10"
                                            id={
                                              "bborder_box2_" +
                                              resume_examples.id +
                                              idx
                                            }
                                          ></div>
                                        </div>

                                        <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-black text-center mt-4 max-w-[160px] truncate mx-auto">
                                          {resume_examples.resume_name}
                                        </p>
                                        <span className="mt-2">
                                          {resume_examples?.job_positions.map(
                                            (position, posIdx) => (
                                              <div
                                                key={posIdx}
                                                className="bg-[#0072b1] flex items-center justify-center text-white text-xs font-semibold px-4 py-1 rounded mt-2"
                                              >
                                                <span className="max-w-[160px] truncate mx-auto">
                                                  {position.name}
                                                </span>
                                              </div>
                                            )
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      ) : (
                        ""
                      )}

                      <br />
                      <br />
                    </div>
                  );
                })
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4">
                    {activeCategory?.name}
                  </h2>
                  <p
                    className="text-black mb-4"
                    dangerouslySetInnerHTML={{
                      __html: activeCategory?.short_description || "",
                    }}
                  ></p>
                </>
              )}

              {/* <AutoPlaySlider
                options={{ align: "start" }}
                arrowPosition="!mt-2 mb-5 md:mb-8"
              >
                {activeCategory.images.map((img, index) => (
                  <div
                    key={index}
                    className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5"
                  >
                    <div key={index} className="rounded-lg w-full sm:w-[300px]">
                      <Image
                        key={index}
                        src={img}
                        priority
                        alt={`${activeCategory.name} Template ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </AutoPlaySlider> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
