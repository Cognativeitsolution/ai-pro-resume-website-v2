"use client";
import React, { useEffect, useState } from "react";
// =============
import { OldAPI } from "@/services/oldService";
import CustomLoader from "../loader/CustomLoader";
import CategoriesTab from "./CategoriesTab";
import SliderTemplates from "./SliderTemplates";
import StaticTemplates from "./StaticTemplates";
import FilteredCategoryTemplates from "./FilteredCategoryTemplates";
import SearchBar from "../custom/searchBar/SearchBar";

// Type definitions for the categories, resume examples, and top categories
export type categories = {
  id: number;
  name: string;
  short_description: string;
};

export type cover_examples = {
  id: number;
  job_title: string;
  preview_image: string;
  name: string;
  template: {
    id: number;
    is_paid: number;
    name: string;
  };
  job_positions: job_positions[];
};

export type TopCategories = {
  id: number;
  name: string;
  short_description: string;
  cover_examples: cover_examples[];
};

type job_positions = {
  id: number;
  name: string;
};


const CoverLetterCategories = () => {
  // State variables
  const [Categories, setCategories] = useState<categories[]>([]);
  const [top_categories, setTopCategories] = useState<TopCategories[]>([]);
  const [isfilter, setIsfilter] = useState(false);
  const [exp_img, setExpImg] = useState<any>([]);
  const [frontCoverTemplates, setFrontCoverTemplates] = useState<cover_examples[]>([]);
  const [selectedCatName, setSelectedCatName] = useState<string>("");
  const [selectedCatDesc, setSelectedCatDesc] = useState<string>("");
  const [showLoader, setShowLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchJob, setSearchJob] = useState<string>("");
  const [allJobPositions, setAllJobPositions] = useState<job_positions[]>([]);

  // Fetch categories data on component mount
  useEffect(() => {
    OldAPI.get("show-categories")
      .then((res) => {
        setCategories(res.data.categories);
        setTopCategories(res.data.top_categories);
        setExpImg(res.data.image_url);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  }, []);

  // Fetch templates for the selected category
  const chkTemp = (cat_id: number, cat_name: string, cat_desc: string) => {
    setIsfilter(true);
    setShowLoader(true);
    OldAPI.get("front-cover-templates", { category_id: cat_id })
      .then((res) => {
        setFrontCoverTemplates(res.data.cover_examples);
        setSelectedCatName(cat_name);
        setSelectedCatDesc(cat_desc);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  };

  useEffect(() => {
    if (top_categories.length > 0) {
      const jobMap: { [key: string]: job_positions } = {};

      top_categories.forEach((cat) => {
        cat.cover_examples.forEach((ex) => {
          ex.job_positions.forEach((job) => {
            jobMap[job.name] = job; // deduplicate
          });
        });
      });

      setAllJobPositions(Object.values(jobMap));
    }
  }, [top_categories]);


  const handleJobPositionClick = (jobName: string) => {
    setSearchJob(jobName);
    setIsfilter(true);

    const matched: cover_examples[] = [];
    top_categories.forEach((cat) => {
      cat.cover_examples.forEach((ex) => {
        const hasJob = ex.job_positions.some((pos) => pos.name.toLowerCase() === jobName.toLowerCase());
        if (hasJob) matched.push(ex);
      });
    });

    setFrontCoverTemplates(matched);
    setSelectedCatName(jobName);
    setSelectedCatDesc;
  };

  return (
    <>
      {/* Search Bar */}
      <SearchBar
        placeholder="Search by Job Position"
        showDropdown={true}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        listOfJobPositions={allJobPositions}
        onJobSelect={handleJobPositionClick}
      />
      {/* All Templates */}
      <section className="py-5 md:py-10">
        <div className="container">
          {showLoader ? (
            <CustomLoader size={50} color="#9885FF" text="Fetching Cover Letter Examples..." />
          ) : (
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Tabs for categories */}
              <CategoriesTab
                categories={Categories}
                onCategoryClick={(id, name, description) =>
                  chkTemp(id, name, description)
                }
              />

              {/* Content Section */}
              <div className="w-full xl:w-3/4">
                {!isfilter ? (
                  top_categories?.map((category, index) => {
                    if (category.cover_examples?.length === 0) return null;

                    return (
                      <div key={index}>
                        <div className="px-2 lg:px-8">
                          <h1 className="text-xl lg:text-2xl text-hamzaPrimary">{category.name}</h1>
                          <div
                            className="text-gray-800 text-base leading-[20px]"
                            dangerouslySetInnerHTML={{
                              __html: category.short_description,
                            }}
                          />
                        </div>
                        {category.cover_examples?.length < 4 ? (
                          <StaticTemplates examples={category.cover_examples} exp_img={exp_img} />
                        ) : (
                          <SliderTemplates examples={category.cover_examples} exp_img={exp_img} />
                        )}
                      </div>
                    );
                  })
                ) : (
                  <FilteredCategoryTemplates
                    selectedCatName={selectedCatName}
                    selectedCatDesc={selectedCatDesc}
                    templates={frontCoverTemplates}
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

export default CoverLetterCategories;
