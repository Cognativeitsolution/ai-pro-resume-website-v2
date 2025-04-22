"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ResumeCategories } from "../../app/resume-examples/data";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(ResumeCategories[0]);
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="w-full h-full md:w-1/4 border-2 border-white bg-indigo-200/20 rounded-xl p-4">
              <div className="divide-y-[1.5px] divide-[#ffffff]">
                {ResumeCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`block w-full text-left px-4 py-3 font-medium transition-all ${
                      activeCategory.id === cat.id
                        ? "bg-PrimaryDark text-white rounded-lg"
                        : ""
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl font-bold mb-4">{activeCategory.name}</h2>
              <p className="text-black mb-4">
                {activeCategory.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.images.map((img, index) => (
                  <div key={index} className="rounded-lg w-[300px]">
                    <Image
                      key={index}
                      src={img}
                      priority
                      alt={`${activeCategory.name} Template ${index + 1}`}
                      className="transition-transform transform hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
