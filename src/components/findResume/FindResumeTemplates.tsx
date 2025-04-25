"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
// ===============
import { AutoPlaySlider, CTA } from "@/components";
// ===============
import { FaCrown } from 'react-icons/fa';
import { LiaAwardSolid } from "react-icons/lia";

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
          <div className="bg-indigo-200/20 backdrop-blur-none border-2 border-white rounded-lg px-4 md:px-0 py-10">
            <h3 className="text-[24px] md:text-[32px] font-semibold text-center">
              {data.title}
            </h3>
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
                    <div key={index} className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5">
                      <div className="ring-2 ring-zinc-500/20 rounded-lg overflow-hidden relative m-3">
                        {/* Templates Badge */}
                        {isPurchased ? (
                          <div className="absolute -right-[50px] -top-[40px] transform rotate-45 w-[100px] h-[80px] pb-2 flex justify-center items-end bg-PrimaryDark">
                            <LiaAwardSolid className="text-[22px] text-white" />
                          </div>
                        ) : (
                          template.is_paid === 1 && (
                            <div className="absolute -right-[50px] -top-[40px] transform rotate-45 w-[100px] h-[80px] pb-2 flex justify-center items-end bg-PrimaryDark">
                              <FaCrown className="text-[20px] text-yellow-500" />
                            </div>
                          )
                        )}

                        <Image
                          src={template.image}
                          alt={template.alt || "resume template"}
                          className="w-auto h-auto"
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
