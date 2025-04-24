"use client"

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleKeyUp = (event: any) => {
        setSearchTerm(event.target.value);
    };
    console.log(searchTerm);
    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container">
                    <div className="flex lg:justify-between items-center bg-white ring-1 ring-indigo-500 w-[90%] sm:w-[70%] lg:w-[665px] mx-auto shadow-md rounded-full p-2 my-5">
                        <input
                            type="text"
                            id="search"
                            onKeyUp={handleKeyUp}
                            className="text-[16px] font-medium text-hamzaPrimary w-[90%] pl-2 border-0 outline-none "
                            placeholder="Search with Creative, Modern, Professional etc"
                        />
                        <span className='bg-indigo-700/20 rounded-full p-1'>
                            <BiSearch size={32} className="text-indigo-700/80 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchBar