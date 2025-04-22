import React from "react";
import {  Categories, Faq, InnerBanner, Search } from "@/components";
import { BannerData, faqs } from "./data";


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
