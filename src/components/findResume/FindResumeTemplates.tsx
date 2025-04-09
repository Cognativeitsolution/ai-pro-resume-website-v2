"use client";

import React, { useState } from "react";
import creativeinfusion from "/public/images/Creativeinfusion.svg";
import innovativeedge from "/public/images/Creativeinfusion.svg";
import fresherresume from "/public/images/fresherResume.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type TabKey = "creative" | "food" | "management" | "it" | "office";

const FindResumeTemplates = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("creative");

  const tabDisplayMap: { [key in TabKey]: string } = {
    creative: "Creative & Cultural Fields",
    food: "Food Service",
    management: "Management",
    it: "Information Technology",
    office: "Office & Administrative",
  };

  const imagesData: Record<TabKey, { id: number; src: any }[]> = {
    creative: [
      { id: 1, src: creativeinfusion },
      { id: 2, src: innovativeedge },
      { id: 3, src: fresherresume },
    ],
    food: [
      { id: 6, src: creativeinfusion },
      { id: 7, src: innovativeedge },
      { id: 8, src: fresherresume },
    ],
    management: [
      { id: 11, src: creativeinfusion },
      { id: 12, src: innovativeedge },
      { id: 13, src: fresherresume },
    ],
    it: [
      { id: 16, src: creativeinfusion },
      { id: 17, src: innovativeedge },
      { id: 18, src: fresherresume },
    ],
    office: [
      { id: 16, src: creativeinfusion },
      { id: 17, src: innovativeedge },
      { id: 18, src: fresherresume },
    ],
  };

  return (
    <>
      <section className="py-10">
        <div className="container border-2 border-white rounded-2xl py-10 bg-white/50">
          <p className="text-[24px] md:text-[32px] font-semibold text-center">
            Find the Perfect Resume Example for Your Field
          </p>
          <p className="font-normal px-0 lg:px-40 text-[16px] text-center">
            To save you time and effort, we have introduced creative resume
            examples. These great resume examples are pre-written. You just have
            to click on them and add minor details to make your resume more
            personalized. 
          </p>

          <div className="p-5">
            {/* Tabs */}
            <div className="flex mb-5 items-center justify-center gap-[20px] sm:gap-[50px] flex-wrap">
              {(Object.keys(tabDisplayMap) as TabKey[]).map((tabId) => (
                <button
                  key={tabId}
                  className={`px-4 py-2 border-b-2 transition-colors ${
                    activeTab === tabId
                      ? "border-[#6A55DD] text-[#6A55DD] font-bold"
                      : "border-transparent text-black font-semibold"
                  }`}
                  onClick={() => setActiveTab(tabId)}
                >
                  {tabDisplayMap[tabId]}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center text-center">
              <button className="px-4 py-1 text-[#6A55DD] font-medium rounded flex items-center justify-center gap-2">
                <span> View All Examples</span> <ArrowRight />
              </button>
            </div>

            {/* Tab Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
              {imagesData[activeTab].map((image) => (
                <div key={image.id} className="w-full flex justify-center">
                  <Image
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="w-[300px] h-auto rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-6 text-center">
              <button className="px-4 py-1 bg-white text-[#6A55DD] border border-[#6A55DD] font-medium rounded">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindResumeTemplates;
