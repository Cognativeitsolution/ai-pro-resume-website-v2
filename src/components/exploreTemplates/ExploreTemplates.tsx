"use client";
import React, { useState } from "react";
import Image from "next/image";
// ===============
import { CTA } from "@/components";


type TemplateImage = {
  id: number;
  src: any;
};

type TabKey = "creative" | "food" | "management" | "it";

type TemplatesData = {
  title: string;
  description: string;
  templates: Record<TabKey, TemplateImage[]>;
  tabDisplayMap: Record<TabKey, string>;
};

type ExploreTemplatesProps = {
  data: TemplatesData;
};

const ExploreTemplates = ({ data }: ExploreTemplatesProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("creative");



  return (
    <>
      <section className="py-5 md:pb-10 md:pt-0 lg:py-10">
        <div className="container">
          <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-center">
            {data.title}
          </h2>
          <p className="font-normal text-center mt-5 text-[16px] lg:text-[18px]">
            {data.description}
          </p>

          <div className="mt-6 md:mt-8">
            {/* Tabs */}
            <div className="flex items-center justify-center gap-3 md:gap-[12px] lg:gap-[50px] flex-wrap mb-5">
              {(Object.keys(data.tabDisplayMap) as TabKey[]).map((tabId) => (
                <button
                  key={tabId}
                  className={`px-4 py-2 border-b-2 transition-colors ${activeTab === tabId
                    ? "border-[#6A55DD] text-[#6A55DD] font-bold"
                    : "border-transparent text-black font-semibold"
                    }`}
                  onClick={() => setActiveTab(tabId)}
                >
                  {data.tabDisplayMap[tabId]}
                </button>
              ))}
            </div>

            {/* Tab Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-5 md:my-10">
              {data.templates[activeTab].map((image) => (
                <div key={image.id} className="w-full shadow-xl rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.08]">
                  <Image
                    src={image.src}
                    alt={`Image ${image.id}`}
                    width={500}
                    height={300}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-10 flex justify-center">
              <CTA
                btn
                text="View All"
                bgColor="bg-white hover:bg-primary"
                txtColor="text-hamzaPrimary hover:text-white"
                border="border-2 border-hamzaPrimary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreTemplates;
