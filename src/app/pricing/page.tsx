import { Faq, InnerBanner } from "@/components";
import React from "react";
import { BannerData } from "./data";
import { faqs } from "../data";
import PricingCard from "./PricingCard";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <PricingCard
        content={{
          title: "",
          para: "",
        }}
      />
      <Faq data={faqs} />
    </>
  );
}
