"use client";

import { OldAPI } from "@/services/oldService";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

type JobPosition = {
  created_at: string;
  deleted_at: any;
  description: string;
  id: number;
  keywords: string;
  name: string;
  similar_names: string;
  updated_at: string;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [listOfJobPositions, setListOfJobPositions] = useState<JobPosition[]>(
    []
  );
  const [jobPositionDetails, setJobPositionDetails] = useState();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    OldAPI.get("show-job-positions", { type: "resume_example" })
      .then((res) => {
        // console.log("job positions of resume examples", res.data);
        setListOfJobPositions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchByJob = (JobName: any) => {
    OldAPI.get("search-resume-examples", { search: JobName })
      .then((res) => {
        console.log(res);
        if (res.data.job_position) {
          setJobPositionDetails(res.data.job_position);
        }
        //  setSelectedCatName(param);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-white border border-1 border-hamzaPrimary w-[90%] sm:w-[70%] lg:w-[665px] m-auto flex lg:justify-between items-center shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] rounded-full text-hamzaPrimary p-2 my-5">
        <BiSearch
          size={32}
          className="cursor-pointer hover:scale-125 duration-300 transition-all mr-2"
        />
        <div className="flex-1 relative w-full">
          <input
            type="text"
            id="search"
            autoComplete="off"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="border-slate-200 relative w-[90%] outline-none lg:font-[20px] font-[12px] text-sm lg:text-lg text-[rgba(184, 184, 184, 1)]"
            placeholder="Search By Job Title"
            value={searchTerm}
            onFocus={() => setIsSearch(true)}
          />
          <div
            ref={dropdownRef}
            className={`absolute top-full left-0 right-0 bottom-0 bg-white shadow-md  h-[300px] flex-col overflow-y-scroll p-4 rounded-b-lg z-[9999] ${
              isSearch ? "flex" : "hidden"
            }
                `}
          >
            {listOfJobPositions.map((job, idx) => {
              return (
                <span
                  key={idx}
                  className="hover:bg-primary hover:text-white hover:font-bold py-2 px-2 cursor-pointer select-none "
                  onClick={() => {
                    setSearchTerm(job.name);
                    searchByJob(job.name);
                    setIsSearch(false);
                  }}
                >
                  {job.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
