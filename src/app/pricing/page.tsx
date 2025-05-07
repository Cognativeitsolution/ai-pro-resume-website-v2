import { CoinsPurchaseSection, Faq, InnerBanner, PricingCard } from "@/components";
import { BannerData, faqs } from "./data";
// =================

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
