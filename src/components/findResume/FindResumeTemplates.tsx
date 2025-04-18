"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
// ===============
import { AutoPlaySlider, CTA } from "@/components";
// ===============
import brand from "media/images/brand.webp";
import premium from "media/images/premium.webp";

type TemplateItem = {
  id: number;
  image: any;
  is_paid?: number;
  alt?: string | undefined
};

type TemplateData = {
  title: string;
  description: string | ReactNode;
  templateList?: TemplateItem[];
};

type propsType = {
  data: TemplateData;
};

const FindResumeTemplates = ({ data }: propsType) => {

  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<TemplateItem[]>([]);

  // Initialize templates from props
  useEffect(() => {
    if (data.templateList && data.templateList.length > 0) {
      setTemplates(data.templateList);
    }
  }, [data.templateList]);


  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="border-2 border-white rounded-2xl px-4 md:px-0 py-10 bg-white/50">
            <p className="text-[24px] md:text-[32px] font-semibold text-center">
              {data.title}
            </p>
            <p className="font-normal px-0 lg:px-40 text-[16px] text-center">
              {data.description}
            </p>

            <div className="mt-0 md:mt-5">
              <AutoPlaySlider
                options={{ align: "start" }}
                arrowPosition="!mt-2 mb-5 md:mb-8"
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
                              className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] sm:left-[-11px] top-6 text-white -rotate-45 justify-center items-center z-50"
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
                          alt={template.alt || "resume template"}
                          className="shadow-[0px_0px_3px_rgba(0,0,0,1)] bg-white rounded-xl w-[98%] sm:w-[90%] sm:p-2 lg:p-0"
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
