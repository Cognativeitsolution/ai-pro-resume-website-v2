"use client";

import React, { useCallback, useEffect, useState } from "react";
import creativeinfusion from "/public/images/Creativeinfusion.svg";
import innovativeedge from "/public/images/Creativeinfusion.svg";
import fresherresume from "/public/images/fresherResume.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const FindResumeTemplates = () => {
  const imagesData = [
    { id: 1, src: creativeinfusion },
    { id: 2, src: innovativeedge },
    { id: 3, src: fresherresume },
    { id: 4, src: creativeinfusion },
    { id: 5, src: innovativeedge },
    { id: 6, src: fresherresume },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1, // scroll one at a time
    align: "center", // align first image to start
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

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

          <div className="p-3 ">
            {/* Embla Viewport */}
            <div className="overflow-hidden px-2 py-5" ref={emblaRef}>
              <div className="flex">
                {imagesData.map((image, index) => (
                  <div
                    key={image.id}
                    className="embla__slide flex-shrink-0 w-[90%] sm:w-1/2 md:w-1/3 px-2 flex justify-center"
                  >
                    <Image
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className={`w-[300px] h-auto rounded-lg cursor-pointer ${
                        index === selectedIndex ? "scale-110" : "scale-75"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center justify-center gap-4 text-xl mt-3 text-gray-700">
              <button
                onClick={scrollPrev}
                className="hover:text-black transition"
              >
                <IoArrowBack />
              </button>
              <button
                onClick={scrollNext}
                className="hover:text-black transition"
              >
                <IoArrowForward />
              </button>
            </div>

            {/* View All Button */}
            <div className="mt-5 text-center">
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
