"use client";

import React, { useState } from "react";
import Image from "next/image";
// ===============
import { AutoPlaySlider, CTA } from "@/components";
// ===============
import Template1 from "media/resume_template_images/template_3.webp";
import Template2 from "media/resume_template_images/template_2.webp";
import Template3 from "media/resume_template_images/template_3.webp";
import brand from "media/images/brand.webp";
import premium from "media/images/premium.webp";

type Template = {
  id: number;
  image: any;
  is_paid: number;
};

const FindResumeTemplates = () => {

  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
  ]);
  const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<
    Template[]
  >([]);


  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="border-2 border-white rounded-2xl py-10 bg-white/50">
            <p className="text-[24px] md:text-[32px] font-semibold text-center">
              Find the Perfect Resume Example for Your Field
            </p>
            <p className="font-normal px-0 lg:px-40 text-[16px] text-center">
              To save you time and effort, we have introduced creative resume
              examples. These great resume examples are pre-written. You just have
              to click on them and add minor details to make your resume more
              personalized.
            </p>

            <div className="mt-5">
              <AutoPlaySlider
                options={{ align: "center" }}
                arrowPosition="mt-0 mb-8"
              >
                {templates.map((template, index) => {
                  const isPurchased = userPurchasedTemplates.some(
                    (purchasedTemplate) => purchasedTemplate.id === template.id
                  );
                  return (
                    <div
                      key={index}
                      className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5"
                    >
                      <div className="relative flex items-center justify-center my-6" key={index}>
                        {isPurchased ? (
                          <div
                            className="flex bg-gradient-to-r from-[#00caa5] to-[#01B2AC] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                            style={{
                              clipPath:
                                "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                            }}
                          >
                            <Image src={brand} alt="purchased icon" />
                            <span>Own</span>
                          </div>
                        ) : (
                          template.is_paid === 1 && (
                            <div
                              className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                              style={{
                                clipPath:
                                  "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                              }}
                            >
                              <Image src={premium} alt="premium icon" />
                              <span>Premium</span>
                            </div>
                          )
                        )}

                        <Image
                          src={template.image}
                          alt="My Image"
                          className="shadow-[0px_0px_3px_rgba(0,0,0,1)] rounded-xl w-[100%] sm:w-[90%] p-2 lg:p-0"
                        />
                      </div>
                    </div>
                  );
                })}
              </AutoPlaySlider>
              {/* View All Button */}
              <div className="mt-5 flex justify-center">
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
        </div>
      </section>
    </>
  );
};

export default FindResumeTemplates;
