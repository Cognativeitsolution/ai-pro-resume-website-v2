"use client";

import React, { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProConsCard from "../blog/blogDetailComponents/ProConsCard";
import TipPro from 'media/images/TipPro.webp'

type FaqItem = {
  question: string | ReactNode;
  answer: string | ReactNode;
};

type FaqData = {
  title: string;
  description?: ReactNode;
  faqlist: FaqItem[];
  titlePro?: string;
  descriptionPro?: string;
};

type propsType = {
  data: FaqData;
};

const Faq = (props: propsType) => {
  const { data } = props
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="p-4 md:p-10 mx-auto rounded-2xl bg-indigo-200/20 backdrop-blur-none border-2 border-white">
            <h3 className="text-center uppercase text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-10">
              {data.title}
            </h3>

            <div className="flex flex-col items-center justify-center gap-5">
              {data?.faqlist?.map((faq: any, index: any) => (
                <div
                  key={index}
                  className="border-2 border-white bg-white/60 backdrop-blur-none p-4 cursor-pointer rounded-2xl w-full lg:w-[75%]"
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggle(index)}
                  >
                    <h4 className="font-semibold text-md sm:text-lg text-black">
                      {faq.question}
                    </h4>
                    <IoIosArrowDown
                      className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </div>

                  <div
                    className={`transition-all duration-300 overflow-hidden text-sm text-black ${openIndex === index
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="py-2 px-1 text-[16px] lg:text-[18px">
                      {faq.answer}
                    </div>
                    {faq?.titlePro && faq?.descriptionPro &&
                      <div className="mb-6">
                        <ProConsCard
                          title={faq?.titlePro}
                          icon={TipPro}
                          description={faq?.descriptionPro}
                          isTip={true}
                        />
                      </div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
