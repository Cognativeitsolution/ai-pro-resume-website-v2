import { Content, Faq, InnerBanner, ServicesSection } from "@/components";
import React from "react";
import { BannerData } from "./data";
import { faqs } from "../data";
import ServiceSection from "../../components/servicepage/ServicesSection";

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
