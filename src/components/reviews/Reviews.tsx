"use client";

import React, { useCallback } from "react";
import reviewImage from "../../../public/images/reviews.svg";
import useEmblaCarousel from "embla-carousel-react";

import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import reviewAvatar from "../../../public/images/reviewAvatar.svg";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import startQuotes from "../../../public/images/start_quotes.svg";
import endQuotes from "../../../public/images/end_quotes.svg";

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const reviews = [
    {
      text: "Beautiful templates and intuitive interface. Created my resume in under 30 minutes!,Beautiful templates and intuitive interface. Created my resume in under 30 minutes! Beautiful templates",
      author: "Josephine Alexander",
      role: "Marketing Specialist",
      avatar: reviewImage,
    },
    {
      text: "Easy to use and very customizable. Highly recommend it!",
      author: "Michael Roberts",
      role: "Product Manager",
      avatar: reviewAvatar,
    },
  ];

  return (
    <>
      <section className="py-10">
        <div className="container text-center px-4 relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Your Resume Is An Extension Of Yourself – Make One That’s Truly You
          </h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mb-6 hover:bg-indigo-600 transition">
            Create Resume
          </button>
          {/* Review stars */}
          <div className="flex justify-center items-center gap-2 my-5">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className="text-yellow-400 text-xl">
                <FaStar />
              </span>
            ))}
            <span className="text-sm text-black ml-2 font-semibold">
              Reviews
            </span>
          </div>
          <div className="relative">
            {/* Embla slider */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((rev, id) => (
                  <div key={id} className="min-w-full flex justify-center px-4">
                    <ReviewCard
                      id={id}
                      text={rev.text}
                      author={rev.author}
                      role={rev.role}
                      avatar={rev.avatar}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-48 top-[-1rem] w-10 h-10">
              <Image
                src={startQuotes}
                alt="Opening quote"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-48 bottom-[7rem] w-10 h-10">
              <Image
                src={endQuotes}
                alt="Closing quote"
                fill
                className="object-contain"
              />
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center gap-6 text-xl text-gray-700 mt-6">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
