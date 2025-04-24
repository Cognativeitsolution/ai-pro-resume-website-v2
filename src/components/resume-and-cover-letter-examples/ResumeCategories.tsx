"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AutoPlaySlider } from "@/components";
import { OldAPI } from "@/services/oldService";
import CustomLoader from "../loader/CustomLoader";
import { LiaAwardSolid } from "react-icons/lia";
import { FaCrown } from "react-icons/fa";
import CategoriesTab from "./CategoriesTab";
import SliderTemplates from "./SliderTemplates";
import StaticTemplates from "./StaticTemplates";
import FilteredCategoryTemplates from "./FilteredCategoryTemplates";

export type categories = {
  cover_letter_description: string;
  icon: string;
  id: any;
  name: string;
  parent_id: number;
  short_description: string;
  top: number;
};

export type job_positions = {
  id: number;
  name: string;
};

export type template = {
  id: number;
  is_paid: number;
  name: string;
};

export type resume_examples = {
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
  template: template;
  template_id: number;
  updated_at: string;
};

export type TopCategories = {
  cover_letter_description: string;
  icon: string;
  id: number;
  name: string;
  parent_id: number;
  resume_examples: resume_examples[];
  short_description: string;
  top: number;
};

const ResumeCategories = () => {
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
        console.log("resume examples",res);
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
    OldAPI.get("front-resume-templates", { category_id: cat_id })
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
              <CategoriesTab
                categories={Categories}
                onCategoryClick={(id, name, description) =>
                  chk_temp(id, name, description)
                }
              />

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
                          <div
                            className="text-gray-800 text-base leading-[20px]"
                            dangerouslySetInnerHTML={{
                              __html: top_categories.short_description,
                            }}
                          />
                        </div>
                        {top_categories.resume_examples.length < 4 ? (
                         <StaticTemplates
                         examples={top_categories.resume_examples}
                         exp_img={exp_img}
                       />
                        ) : (
                          <SliderTemplates
                            examples={top_categories.resume_examples}
                            exp_img={exp_img}
                          />
                        )}

                        <br />
                        <br />
                      </div>
                    );
                  })
                ) : (
                  <FilteredCategoryTemplates
                  selectedCatName={selectedCatName}
                  selectedCatDesc={selectedCatDesc}
                  templates={frontResumeTemplates}
                  exp_img={exp_img}
                />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ResumeCategories;
