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
  alt?: string | undefined;
};

type TemplateData = {
  subTitle?: string;
  title: string | ReactNode;
  description: string | ReactNode;
  templateList?: TemplateItem[];
  fullWidth?: string | boolean;
  descriptionBottom?: any
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
        <div className={"container"}>
          <div className={`${data.fullWidth === true ? "" : "bg-indigo-200/20 backdrop-blur-none border-2 border-white rounded-lg px-4 md:px-0 py-10"}`}>
            <div className={data.fullWidth === true ? "pb-4" : ""}>
              <h4 className={`font-normal text-[16px] md:text-[20px] text-center  from-[#3358c3] via-[#5548db] to-[#7d26e7] bg-gradient-to-r bg-clip-text text-transparent`}>
                {data.subTitle}
              </h4>
              <h3 className={`text-[24px] md:text-[32px] font-semibold text-center`}>
                {data.title}
              </h3>
              <p className={`font-normal  text-[16px] text-center px-0 lg:px-40`}>
                {data.description}
              </p>
            </div>


            <div className="mt-0 md:mt-5 relative">
              <AutoPlaySlider
                options={{ align: "start" }}
                arrowPosition={"!mt-2 mb-5 md:mb-8"}
              >
                {templates?.map((template, index) => {
                  const isPurchased = userPurchasedTemplates.some(
                    (purchasedTemplate) => purchasedTemplate.id === template.id
                  );
                  return (
                    <div key={index} className={`grow-0 shrink-0 ${data.fullWidth === true ? "basis-[100%] md:basis-[50%] xl:basis-1/5 pl-4" : "basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5"} "`}>
                      <div className="ring-2 ring-zinc-500/20 rounded-lg overflow-hidden relative m-3 group">
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

                        {/* Templates Before */}
                        <div className="flex items-center justify-center w-full h-full bg-slate-800/90 absolute top-0 left-0 z-40 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                          <div className="translate-y-56 group-hover:-translate-y-0 transition-all duration-1000">
                            <CTA
                              btn
                              text="Use This Template"
                              bgColor="bg-PrimaryDark hover:bg-transparent"
                              txtColor="text-white"
                              border="border border-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </AutoPlaySlider>

              <div className={"container"}>
                <div className="font-normal px-0 lg:px-40 text-[16px] text-center flex flex-col gap-2 mt-3">
                  {data?.descriptionBottom?.map((item: any, idx: any) => (
                    <React.Fragment key={idx}>
                      {item}
                    </React.Fragment>
                  ))}
                </div>
              </div>
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
