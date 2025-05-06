import { Faq, InnerBanner, UploadParser, } from "@/components";
import { BannerData, faqs, ResumeEditorData, SummaryFeaturesData, WorkData, } from "./data";
import SummaryFeatures from "@/components/summaryGenerator/SummaryFeatures";
import Work from "@/components/summaryGenerator/Work";
import ResumeEditor from "@/components/summaryGenerator/ResumeEditor";

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
