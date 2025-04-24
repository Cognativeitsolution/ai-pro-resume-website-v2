import React from "react";
import { Categories, Faq, IconSlider, InnerBanner } from "@/components";
import { BannerData, faqs, IconData } from "./data";


export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <Categories />
      <Faq data={faqs} />
    </>
  );
}
