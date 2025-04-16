import { Faq, InnerBanner } from "@/components";
import React from "react";
import { BannerData, faqs } from "./data";

import PricingCard from "./PricingCard";
import CoinsPurchaseSection from "./CoinsPurchaseSection";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <PricingCard/>
      <CoinsPurchaseSection/>
      <Faq data={faqs} />
    </>
  );
}
