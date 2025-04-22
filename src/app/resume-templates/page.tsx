import { Faq, InnerBanner } from "@/components";
import { BannerData, faqs } from "./data";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />

      <Faq data={faqs} />
    </>
  );
}
