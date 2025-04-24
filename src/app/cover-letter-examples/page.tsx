import React from "react";
import {
  Faq,
  IconSlider,
  InnerBanner,
  Search,
  CoverLetterCategories,
} from "@/components";
import { BannerData, faqs, IconData } from "./data";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <Search />
      <CoverLetterCategories />
      <Faq data={faqs} />
    </>
  );
}
