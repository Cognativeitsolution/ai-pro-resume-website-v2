"use client";
import React, { useEffect, useState } from "react";
// =================
import { OldAPI } from "@/services/oldService";
import JobCards from "./JobCards";
import Pagination from "../custom/Pagination";
import CustomLoader from "../loader/CustomLoader";

type CareerProps = {
  title?: string | React.ReactNode;
  apply?: string | React.ReactNode;
};

type Job = {
  id: number;
  title: string;
  short_description: string;
  last_date_of_apply: string;
  slug: string;
};

type propsType = {
  data: CareerProps;
};

const CareerJobs = ({ data }: propsType) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const jobsPerPage = 9;

  useEffect(() => {
    OldAPI.get("show-jobs")
      .then((res) => {
        console.log(res, "res");
        setJobs(res.data);
        setShowLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setShowLoader(false);
      });
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (jobs.length > 0) {
      window.scrollTo({ top: 550, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <h2 className="text-center text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold">
            {data.title}
          </h2>
        </div>

        {/* Conditional Rendering for Loader, Data, or No Data */}
        <div className="mt-10 min-h-[200px] flex justify-center items-center">
          {showLoader ? (
            <CustomLoader size={50} color="#9885FF" text="Fetching Jobs..." />
          ) : jobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-[24px] leading-[34px] font-semibold text-hamzaPrimary">
                  {data.apply}
                </h3>
              </div>
              {/* Job Cards */}
              <JobCards jobs={currentJobs} />
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <p className="text-center text-xl font-semibold text-hamzaPrimary">
              No Data Found!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerJobs;
