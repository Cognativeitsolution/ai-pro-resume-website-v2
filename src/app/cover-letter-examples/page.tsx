import { Faq, IconSlider, InnerBanner, CoverLetterCategories,} from "@/components";
import { BannerData, faqs, IconData } from "./data";
// =================

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <CoverLetterCategories />
      <Faq data={faqs} />
    </>
  );
}
