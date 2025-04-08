"use client";

import React, { useState } from "react";
import creativeinfusion from "/public/images/Creativeinfusion.svg";
import innovativeedge from "/public/images/Creativeinfusion.svg";
import fresherresume from "/public/images/fresherResume.svg";
import sleeksimplicity from "/public/images/SleekSimplicity.svg";
import brightfuture from "/public/images/BrightFuture.svg";
import Image from "next/image";

type TabKey = "creative" | "food" | "management" | "it";

const ExploreTemplates = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("creative");

  const tabDisplayMap: { [key in TabKey]: string } = {
    creative: "Creative & Cultural Fields",
    food: "Food Service",
    management: "Management",
    it: "Information Technology",
  };

  const imagesData: Record<TabKey, { id: number; src: any }[]> = {
    creative: [
      { id: 1, src: creativeinfusion },
      { id: 2, src: innovativeedge },
      { id: 3, src: fresherresume },
      { id: 4, src: sleeksimplicity },
      { id: 5, src: brightfuture },
    ],
    food: [
      { id: 6, src: creativeinfusion },
      { id: 7, src: innovativeedge },
      { id: 8, src: fresherresume },
      { id: 9, src: sleeksimplicity },
      { id: 10, src: brightfuture },
    ],
    management: [
      { id: 11, src: creativeinfusion },
      { id: 12, src: innovativeedge },
      { id: 13, src: fresherresume },
      { id: 14, src: sleeksimplicity },
      { id: 15, src: brightfuture },
    ],
    it: [
      { id: 16, src: creativeinfusion },
      { id: 17, src: innovativeedge },
      { id: 18, src: fresherresume },
      { id: 19, src: sleeksimplicity },
      { id: 20, src: brightfuture },
    ],
  };

  return (
    <>
      <section className="py-10">
        <div className="container">
          <p className="text-[25px] md:text-[56px] font-semibold text-center">
            Explore professional Resume templates
          </p>
          <p className="font-normal text-[16px] text-center">
            Our professional resume templates are based on what employers look
            for in a candidate.
          </p>

          <div className="p-5">
            {/* Tabs */}
            <div className="flex mb-5 items-center justify-center gap-[50px] flex-wrap">
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

            {/* Tab Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-5">
              {imagesData[activeTab].map((image) => (
                <div key={image.id} className="w-full">
                  <Image
                    src={image.src}
                    alt={`Image ${image.id}`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
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

export default ExploreTemplates;
