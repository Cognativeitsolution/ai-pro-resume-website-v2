"use client";

import React, { useEffect, useState } from "react";
import { categories } from "./ResumeCategories";
import { FaAnglesRight } from "react-icons/fa6";

type TabsProps = {
  categories: categories[];
  onCategoryClick: (id: number, name: string, description: string) => void;
  resetActiveTab?: boolean;
};

const CategoriesTab: React.FC<TabsProps> = ({
  categories,
  onCategoryClick,
  resetActiveTab
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (id: number, name: string, description: string) => {
    setActiveCategoryId(id); // Set the active category ID
    onCategoryClick(id, name, description); // Trigger the parent callback
  };

  useEffect(() => {
    if (resetActiveTab) {
      setActiveCategoryId(null);
    }
  }, [resetActiveTab]);
  return (
    <>
     <div className="w-full h-full xl:w-1/4 border-2 border-white bg-indigo-200/20 rounded-xl p-4 xl:sticky overflow-y-auto top-32 z-0">
      <div className="divide-y-[1.5px] divide-[#ffffff]">
        <h1 className="text-2xl p-2 text-hamzaPrimary">Categories</h1>
        {categories
          ?.sort((a, b) => a.name.localeCompare(b.name))
          .map((category) => (
            <div
              key={category.id}
              id={category.id.toString()}
              onClick={() =>
                handleCategoryClick(
                  category.id,
                  category.name,
                  category.short_description
                )
              }
              className={`flex gap-2 bg-white/30 hover:bg-white/40 rounded-xl font-Lexend justify-start items-center p-2 cursor-pointer my-2 ${
                activeCategoryId === category.id ? "bg-PrimaryDark text-white font-semibold ml-2" : ""
              }`}
            >
              <FaAnglesRight size={12} />
              <p className="font-Lexend text-[15px]">{category.name}</p>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default CategoriesTab;
