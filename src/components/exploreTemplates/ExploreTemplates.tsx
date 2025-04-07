"use client";

import React, { useState } from "react";
import creativeinfusion from "/public/images/Creativeinfusion.svg";
import innovativeedge from "/public/images/Creativeinfusion.svg";
import fresherresume from "/public/images/fresherResume.svg";
import sleeksimplicity from "/public/images/SleekSimplicity.svg";
import brightfuture from "/public/images/BrightFuture.svg";
import Image from "next/image";

const ExploreTemplates = () => {
  const tabs = [
    "Creative & Cultural Fields",
    "Food Service",
    "Management",
    "Information Technology",
  ];
  const [activeTab, setActiveTab] = useState("Creative & Cultural Fields");
  const [sliderPositions, setSliderPositions] = useState({
    tab1: 0,
    tab2: 0,
    tab3: 0,
    tab4: 0,
  });
  const [activeImages, setActiveImages] = useState({
    tab1: 0,
    tab2: 0,
    tab3: 0,
    tab4: 0,
  });

  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, src: creativeinfusion },
    { id: 2, src: innovativeedge },
    { id: 3, src: fresherresume },
    { id: 4, src: sleeksimplicity },
    { id: 5, src: brightfuture },
  ];

  const openTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  const nextSlide = (tabId: string) => {
    setSliderPositions((prev: any) => ({
      ...prev,
      [tabId]: (prev[tabId] + 1) % images.length,
    }));
  };

  const prevSlide = (tabId: string) => {
    setSliderPositions((prev: any) => ({
      ...prev,
      [tabId]: (prev[tabId] - 1 + images.length) % images.length,
    }));
  };

  const setActiveImage = (tabId: string, index: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [tabId]: index,
    }));
  };

  return (
    <>
      <section className="container mt-10">
        <p className="text-[56px] font-semibold text-center">
          Explore professional Resume templates
        </p>
        <p className="font-normal text-[18px] text-center">
          Our professional resume templates are based on what employers look for
          in a candidate.
        </p>

        <div className="p-5">
          {/* Tabs */}
          <div className="flex mb-5 items-center justify-center gap-[70px]">
            {tabs.map((tabId) => (
              <button
                key={tabId}
                className={`px-4 py-2 mr-2 border-b-2 ${
                  activeTab === tabId
                    ? "border-b-[#6A55DD] text-[#6A55DD] font-bold"
                    : "border-b-black text-black font-semibold"
                }`}
                onClick={() => openTab(tabId)}
              >
                {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tabs.map((tabId) => (
            <div
              key={tabId}
              className={`${activeTab === tabId ? "block" : "hidden"}`}
            >
              <div className="relative overflow-hidden">
                {/* Slider */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      sliderPositions[tabId as keyof typeof sliderPositions] *
                      20
                    }%)`,
                  }}
                >
                  {images?.length &&
                    images?.map(
                      (image: { id: number; src: any }, index: number) => (
                        <div
                          key={image?.id}
                          className="min-w-[20%] p-2 box-border"
                        >
                          <Image
                            src={image.src ? image?.src : null}
                            alt={`Image ${image.id}`}
                            width={500}
                            height={300}
                            className={`w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
                              activeImages[
                                tabId as keyof typeof activeImages
                              ] === index
                                ? "scale-110 shadow-lg"
                                : "scale-100"
                            }`}
                            onClick={() => setActiveImage(tabId, index)}
                          />
                        </div>
                      )
                    )}
                </div>
              </div>

              {/* Slider Navigation */}
              <div className="mt-4 text-center">
                <button
                  className="px-3 py-1 mx-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => prevSlide(tabId)}
                >
                  Previous
                </button>
                <button
                  className="px-3 py-1 mx-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => nextSlide(tabId)}
                >
                  Next
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreTemplates;
