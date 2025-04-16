import React from "react";
// =============
import { Content, Faq, InnerBanner, ServicesSection } from "@/components";
import { BannerData } from "./data";
import { faqs } from "../data";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <ServicesSection />
      <Content />
      <Faq data={faqs} />
    </>
  );
}
