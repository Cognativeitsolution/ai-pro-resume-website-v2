import { Faq, InnerBanner, UploadParser, } from "@/components";
import { BannerData, faqs, FeaturesData, } from "./data";
import SummaryFeatures from "@/components/summaryGenerator/SummaryFeatures";

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <UploadParser progress={true} />
      <SummaryFeatures data={FeaturesData} />
      <Faq data={faqs} />
    </>
  );
}
