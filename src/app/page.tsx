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
import React from "react";

export default function Page() {
  return (
    <>
      <Banner />
      <ExploreTemplates />
      <VideoSection />
      <Steps />
      <Ats />
      <ResumeFeatures />
      <FindResumeTemplates />
      <ServiceSection />
      <Reviews />
      <Faq />
    </>
  );
}
