"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const faqs = [
    {
      question: "What Makes Us The Best Resume Maker In The Market?",
      answer:
        "Our unique features, such as AI-based suggestions, professional resume writing, professional cover letter writing, professional resume review, professional cover letter review, free resume and cover letter templates, pre-written examples, and referral rewards, make us the top and most creative resume builder.",
    },
    {
      question: "How Fast Can I Create My Resume?",
      answer:
        "You can create your resume in under 30 minutes using our ready-made templates and intuitive editor.",
    },
    {
      question: "Are The Resume Templates Customizable?",
      answer:
        "Yes, all our resume templates are fully customizable — fonts, layout, colors, and content.",
    },
    {
      question: "Do You Offer Cover Letter Services?",
      answer:
        "Yes, we offer cover letter writing and review services with multiple revisions for perfection.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container p-4 md:p-10 mx-auto rounded-2xl bg-white/30 border-2 border-white">
          <h3 className="text-center text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-bold mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h3>

          <div className="flex flex-col items-center justify-center gap-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-white bg-white/60 p-4 cursor-pointer rounded-2xl w-full lg:w-[768px]"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  <h4 className="font-semibold text-md sm:text-lg text-black">
                    {faq.question}
                  </h4>
                  <IoIosArrowDown
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden text-sm text-black ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-2 px-1 text-[16px] lg:text-[18px">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
