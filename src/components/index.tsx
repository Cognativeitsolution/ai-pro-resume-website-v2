import dynamic from "next/dynamic";

const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const SliderArrows = dynamic(() => import("./slider/SliderArrows"));
const Header = dynamic(() => import("./layout/Header"));
const Banner = dynamic(() => import("./banner/Banner"));
const ExploreTemplates = dynamic(() => import("./exploreTemplates/ExploreTemplates"));
const VideoSection = dynamic(() => import("./videoSection/VideoSection"));
const Steps = dynamic(() => import("./steps/Steps"));
const Ats = dynamic(() => import("./ATS/Ats"));
const ResumeFeatures = dynamic(() => import("./resumeFeatures/ResumeFeatures"));
const FindResumeTemplates = dynamic(() => import("./findResume/FindResumeTemplates"));
const ServiceSection = dynamic(() => import("./serviceSection/ServiceSection"));
const Reviews = dynamic(() => import("./reviews/Reviews"));
const Faq = dynamic(() => import("./faq/Faq"));
const InnerBanner = dynamic(() => import("./innerBanner/InnerBanner"));
const Features = dynamic(() => import("./Features/Features"));
const Counter = dynamic(() => import("./counter/Counter"));

export {
  Header,
  Banner,
  ExploreTemplates,
  VideoSection,
  Steps,
  Ats,
  ResumeFeatures,
  FindResumeTemplates,
  ServiceSection,
  Reviews,
  Faq,
  AutoPlaySlider,
  AutoScrollSlider,
  SliderArrows,
  InnerBanner,
  Features,
  Counter
};
