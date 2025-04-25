"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// ===============
import { BiSearch } from 'react-icons/bi';

type SearchBarProps = {
    placeholder?: string;
    showDropdown?: boolean;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    listOfJobPositions?: { name: string }[];
    onJobSelect?: (jobName: string) => void;
};

const SearchBar = ({ placeholder, showDropdown, onSearchChange, value, listOfJobPositions = [], onJobSelect }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // Local state to store selected job title
    const [isSearch, setIsSearch] = useState(false); // Controls dropdown visibility

    const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown to detect outside clicks

    useEffect(() => {
        // Close dropdown when clicking outside the component
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

    return (
        <section className="py-5 md:py-10">
            <div className="container">
                {/* Search input container */}
                <div className="">
                    <div className="flex lg:justify-between items-center w-[90%] sm:w-[70%] lg:w-[665px] mx-auto bg-white ring-1 ring-indigo-500 shadow-md rounded-xl p-[6px] my-5 relative">
                        {/* Input Field */}
                        <input
                            type="text"
                            id="search"
                            placeholder={placeholder}
                            className="text-[18px] font-medium text-hamzaPrimary w-[90%] h-[40px] pl-2 border-0 outline-none"
                            autoComplete="off"
                            onChange={onSearchChange}
                            value={value}
                            onFocus={() => setIsSearch(true)} // Show dropdown on focus
                        />

                        {/* Search & Clear Icon */}
                        <span
                            className="bg-indigo-700/20 rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                if (value.length > 0) {
                                    // Clear search
                                    onSearchChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
                                    setIsSearch(false); // Hide dropdown
                                }
                            }}
                        >
                            {value.length > 0 ? (
                                <AiOutlineClose size={20} className="text-indigo-700/80" />
                            ) : (
                                <BiSearch size={30} className="text-indigo-700/80" />
                            )}
                        </span>

                        {/* Drop Down */}
                        {showDropdown && (
                            <div ref={dropdownRef} className={`w-[99%] h-[300px] p-2 bg-white absolute left-1 top-[112%] z-20 ring-2 ring-zinc-500/20 rounded-md shadow-md ${isSearch ? "block" : "hidden"}`}>
                                <div className="flex flex-col gap-1 pr-2 h-full divide-y overflow-y-scroll 
                                    [&::-webkit-scrollbar]:w-2 
                                    [&::-webkit-scrollbar-track]:bg-gray-100 
                                    [&::-webkit-scrollbar-track]:rounded-full 
                                    [&::-webkit-scrollbar-thumb]:bg-gray-500 
                                    [&::-webkit-scrollbar-thumb]:rounded-full 
                                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
                                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400"
                                >
                                    {/* Job suggestions list */}
                                    {listOfJobPositions.map((job, idx) => (
                                        <span key={idx} className="text-[18px] text-zinc-800 font-medium hover:text-hamzaPrimary hover:bg-indigo-600/20 hover:rounded-md h-[40px] pl-2 py-1 cursor-pointer"
                                            onClick={() => {
                                                setSearchTerm(job.name); // optional, only for local state
                                                onSearchChange({ target: { value: job.name } } as React.ChangeEvent<HTMLInputElement>); // <-- this is important
                                                onJobSelect?.(job.name);
                                                setIsSearch(false);
                                            }}
                                        >
                                            {job.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;
