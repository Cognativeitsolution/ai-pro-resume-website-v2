import React from "react";
import {
  Ats,
  Banner,
  ExploreTemplates,
  Faq,
  FindResumeTemplates,
  ResumeFeatures,
  Reviews,
  ServiceSection,
  Steps,
  VideoSection,
} from "@/components";
import { bannerData, exploreTemplatesData, videoSectionData, stepsData, atsData, featuresData, findResumeData, serviceSectionData, reviewData, faqs } from "./data";

export default function Page() {
  return (
    <>
      <Banner {...bannerData} />
      <ExploreTemplates data={exploreTemplatesData} />
      <VideoSection data={videoSectionData} />
      <Steps data={stepsData} />
      <Ats data={atsData} />
      <ResumeFeatures data={featuresData} />
      <FindResumeTemplates data={findResumeData} />
      <ServiceSection data={serviceSectionData} />
      <Reviews data={reviewData} />
      <Faq data={faqs} />
    </>
  );
}
