"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
// =============
import { OldAPI } from "@/services/oldService";
import CustomLoader from "../loader/CustomLoader";
import CategoriesTab from "./CategoriesTab";
import SliderTemplates from "./SliderTemplates";
import StaticTemplates from "./StaticTemplates";
import FilteredCategoryTemplates from "./FilteredCategoryTemplates";
import SearchBar from "../custom/searchBar/SearchBar";

export type categories = {
  id: number;
  name: string;
  short_description: string;
};

export type resume_examples = {
  id: number;
  job_title: string;
  preview_image: string;
  resume_name: string;
  template_id: number;
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
  resume_examples: resume_examples[];
};

type job_positions = {
  id: number;
  name: string;
};

const ResumeCategories = () => {
  // State variables
  const [Categories, setCategories] = useState<categories[]>([]);
  const [top_categories, setTopCategories] = useState<TopCategories[]>([]);
  const [isfilter, setIsfilter] = useState(false);
  const [exp_img, setExpImg] = useState<any>([]);
  const [frontResumeTemplates, setFrontResumeTemplates] = useState<resume_examples[]>([]);
  const [selectedCatName, setSelectedCatName] = useState<string>("");
  const [selectedCatDesc, setSelectedCatDesc] = useState<string>("");
  const [showLoader, setShowLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchJob, setSearchJob] = useState<string>("");
  const [allJobPositions, setAllJobPositions] = useState<job_positions[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  // Fetch categories and templates on component mount
  useEffect(() => {
    OldAPI.get("template-categories")
      .then((res) => {
        // Update states with the fetched data
        setCategories(res.data.categories);
        setTopCategories(res.data.top_categories);
        setExpImg(res.data.image_url);
        setShowLoader(false);
      })
      .catch(() => {
        setShowLoader(false);
      });
  }, []);

  // Fetch templates for the selected category
  const chkTemp = (cat_id: number, cat_name: string, cat_desc: string) => {
    setIsfilter(true);
    // setShowLoader(true);
    OldAPI.get("front-resume-templates", { category_id: cat_id })
      .then((res) => {
        // Set templates for the selected category
        setFrontResumeTemplates(res.data.resume_examples);
        setSelectedCatName(cat_name);
        setSelectedCatDesc(cat_desc);
        setShowLoader(false);
      })
      .catch(() => {
        setShowLoader(false);
      });
  };

  // ========Set All Job Positions========
  useEffect(() => {
    if (top_categories.length > 0) {
      const jobMap: { [key: string]: job_positions } = {};

      top_categories.forEach((cat) => {
        cat.resume_examples.forEach((ex) => {
          ex.job_positions.forEach((job) => {
            jobMap[job.name] = job; // deduplicate
          });
        });
      });

      setAllJobPositions(Object.values(jobMap));
    }
  }, [top_categories]);
  
  // ========Handle Job Positon Click========
  const handleJobPositionClick = (jobName: string) => {
    setSearchJob(jobName);
    setIsfilter(true);

    const matched: resume_examples[] = [];
    top_categories.forEach((cat) => {
      cat.resume_examples.forEach((ex) => {
        const hasJob = ex.job_positions.some(
          (pos) => pos.name.toLowerCase() === jobName.toLowerCase()
        );
        if (hasJob) matched.push(ex);
      });
    });

    setFrontResumeTemplates(matched);
    setSelectedCatName(jobName);
    setSelectedCatDesc("Filtered By Job Position");
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
            <CustomLoader
              size={50}
              color="#9885FF"
              text="Fetching Resume Examples..."
            />
          ) : (
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Categories Tab */}
              <CategoriesTab
                categories={Categories}
                onCategoryClick={(id, name, description) =>
                  chkTemp(id, name, description)
                }
                resetActiveTab={!isfilter}
              />

              {/* Content */}
              <div className="w-full xl:w-3/4">
                {isfilter ? (
                  <>
                    <div
                      className="flex items-center gap-2 cursor-pointer text-hamzaPrimary mb-4"
                      onClick={() => {
                        setIsfilter(false);
                        setActiveCategoryId(null);
                      }}
                    >
                      <FaArrowLeft size={16} />
                      <span className="text-lg font-semibold">
                        Back to Top Categories
                      </span>
                    </div>
                    <FilteredCategoryTemplates
                      selectedCatName={selectedCatName}
                      selectedCatDesc={selectedCatDesc}
                      templates={frontResumeTemplates}
                      exp_img={exp_img}
                    />
                  </>
                ) : (
                  top_categories.map((category, index) => {
                    if (category.resume_examples.length === 0) return null;

                    return (
                      <div key={index} className="mt-5">
                        <div className="px-2 ">
                          <h1 className="text-xl lg:text-2xl text-hamzaPrimary">
                            {category.name}
                          </h1>
                          <hr />
                          <div
                            className="text-sm sm:text-lg my-2 text-start"
                            dangerouslySetInnerHTML={{
                              __html: category.short_description,
                            }}
                          />
                        </div>
                        {category.resume_examples.length < 4 ? (
                          <StaticTemplates
                            examples={category.resume_examples}
                            exp_img={exp_img}
                          />
                        ) : (
                          <SliderTemplates
                            examples={category.resume_examples}
                            exp_img={exp_img}
                          />
                        )}
                      </div>
                    );
                  })
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
