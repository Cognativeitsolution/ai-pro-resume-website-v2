"use client"

import React, { useState } from "react";
import { categories } from "./ResumeCategories";

  type TabsProps = {
    categories: categories[];
    onCategoryClick: (id: number, name: string, description: string) => void;
  };

const CategoriesTab: React.FC<TabsProps> = ({categories,onCategoryClick}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (id: number, name: string, description: string) => {
    setSelectedCategoryId(id); // Set the clicked category's ID
    onCategoryClick(id, name, description); // Call the parent function
  };
  return (
    <>
      <div className="w-full h-full xl:w-1/4 border-2 border-white bg-indigo-200/20 rounded-xl p-4 xl:sticky overflow-y-auto top-32 z-0">
        <div className="divide-y-[1.5px] divide-[#ffffff]">
          <h1 className="text-2xl py-4 px-4 text-hamzaPrimary">Categories</h1>
          {categories
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((category, index) => (
              <div
                key={index}
                id={category.id.toString()}
                onClick={() =>
                  onCategoryClick(
                    category.id,
                    category.name,
                    category.short_description
                  )
                }
                className={`flex gap-2 bg-white/30 hover:bg-primary rounded-xl font-Lexend justify-start items-center p-2 text-slate-900 cursor-pointer hover:text-white my-2`}
              >
                <p className="font-Lexend text-[16px] pl-2">{category.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesTab;
