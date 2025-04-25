import React from "react";
import { ResumeCategories, Faq, IconSlider, InnerBanner } from "@/components";
import { BannerData, faqs, IconData } from "./data";


export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <ResumeCategories />
      <Faq data={faqs} />
    </>
  );
}
