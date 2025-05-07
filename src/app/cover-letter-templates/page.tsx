import { Faq, IconSlider, InnerBanner, PrivacyFeatures, ShowAllTemplates, Welcome } from "@/components";
import { BannerData, faqs, FeaturesData, IconData, WelcomeData } from "./data";
// =================

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <ShowAllTemplates />
      <Welcome data={WelcomeData} />
      <PrivacyFeatures data={FeaturesData} />
      <Faq data={faqs} />
    </>
  );
}
