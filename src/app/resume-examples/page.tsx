import React from "react";
import {  Faq, InnerBanner } from "@/components";
import { BannerData, faqs } from "./data";
import Categories from "./Categories";
import Search from "./Search";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <Search/>
      <Categories/>
      <Faq data={faqs} />
    </>
  );
}
