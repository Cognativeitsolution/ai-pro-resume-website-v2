import { Faq, IconSlider, InnerBanner, PrivacyFeatures, Search, ShowAllTemplates, Welcome } from "@/components";
import { BannerData, faqs, FeaturesData, IconData, WelcomeData } from "./data";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <IconSlider {...IconData} />
      <Search />
      <ShowAllTemplates />
      <Welcome data={WelcomeData} />
      <PrivacyFeatures data={FeaturesData} />
      <Faq data={faqs} />
    </>
  );
}
