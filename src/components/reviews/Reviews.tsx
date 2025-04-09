"use client";

import Image from "next/image";
import React, { useState } from "react";
import reviewImage from "../../../public/images/reviews.svg";
import startQuotes from "../../../public/images/start_quotes.svg";
import EndQuotes from "../../../public/images/end_quotes.svg";
import { FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import reviewAvatar from "../../../public/images/reviewAvatar.svg";

const Reviews = () => {
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

  const [current, setCurrent] = useState(0);

  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir: any) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (dir: any) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const { text, author, role, avatar } = reviews[current];

  return (
    <>
      <section className="py-10">
        <div className="container text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Your Resume Is An Extension Of Yourself – Make One That’s Truly You
          </h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mb-6 hover:bg-indigo-600 transition">
            Create Resume
          </button>

          <div className="flex justify-center items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                <FaStar />
              </span>
            ))}
            <span className="text-sm text-black ml-2 font-semibold">
              Reviews
            </span>
          </div>

          <div className="relative max-w-3xl mx-auto text-gray-900 text-sm sm:text-base my-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={text}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                <div className="absolute left-[-20px] -top-6 w-10 h-10">
                  <Image
                    src={startQuotes}
                    alt="Opening quote"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="px-6">{text}</p>

                <div className="absolute right-[-20px] -bottom-6 w-10 h-10">
                  <Image
                    src={EndQuotes}
                    alt="Closing quote"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mb-3">
            <Image
              src={avatar}
              alt={author}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{author}</p>
              <p className="text-sm">{role}</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 text-xl text-gray-700">
            <button onClick={prev} className="hover:text-black transition">
              <IoArrowBack />
            </button>
            <button onClick={next} className="hover:text-black transition">
              <IoArrowForward />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
