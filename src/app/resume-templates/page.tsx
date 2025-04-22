import { Faq, IconSlider, InnerBanner, ShowAllTemplates } from "@/components";
import { BannerData, faqs, IconData } from "./data";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <ShowAllTemplates />
      <Faq data={faqs} />
    </>
  );
}
