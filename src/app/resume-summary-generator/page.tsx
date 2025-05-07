import { Faq, InnerBanner, ResumeEditor, SummaryFeatures, UploadParser, Work, } from "@/components";
import { BannerData, faqs, ResumeEditorData, SummaryFeaturesData, WorkData, } from "./data";
// =================

export default function Page() {
  return (
    <>
      <InnerBanner {...BannerData} />
      <UploadParser progress={true} />
      <SummaryFeatures data={SummaryFeaturesData} />
      <ResumeEditor data={ResumeEditorData} />
      <Work data={WorkData} />
      <Faq data={faqs} />
    </>
  );
}
