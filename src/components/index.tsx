import dynamic from "next/dynamic";

const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const Header = dynamic(() => import("./layout/Header"));
const MainHeader = dynamic(() => import("./layout/MainHeader"));
const ReferHeader = dynamic(() => import("./layout/ReferHeader"));
const Footer = dynamic(() => import("./layout/Footer"));
const CTA = dynamic(() => import("./custom/CTA"));
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
const Stepper = dynamic(() => import("./stepper/Stepper"));
const Client = dynamic(() => import("./client/Client"));
const Welcome = dynamic(() => import("./welcome/Welcome"));
const PrivacyFeatures = dynamic(() => import("./Features/PrivacyFeatures"));
const ContactUs = dynamic(() => import("./contactUs/CountactUs"));
const Content = dynamic(() => import("./servicepage/Content"));
const ServicesSection = dynamic(() => import("./servicepage/ServicesSection"));
const CareerJobs = dynamic(() => import("./careerJobs/CareerJobs"));
const BlogDetail = dynamic(() => import("./blog/BlogDetail"));
const CoinsPurchaseSection = dynamic(() => import("./pricingPage/CoinsPurchaseSection"));
const PaymentSection = dynamic(() => import("./pricingPage/PaymentSection"));
const PricingCard = dynamic(() => import("./pricingPage/PricingCard"));
const StripeSeperateComponent = dynamic(() => import("./pricingPage/StripeSeperateComponent"));
const Blogs = dynamic(() => import("./blog/Blogs"));
const ApplyNowForm = dynamic(() => import("./applyNowForm/ApplyNowForm"));
const ProConsCard = dynamic(() => import("./blog/blogDetailComponents/ProConsCard"));
const QuickTips = dynamic(() => import("./blog/blogDetailComponents/QuickTips"));
const BreadCrumbs = dynamic(() => import("./blog/blogDetailComponents/BreadCrumbs"));
const VerticalTabs = dynamic(() => import("./blog/blogDetailComponents/VerticalTabs"));
const CollapseTab = dynamic(() => import("./dynamic-pages/CollapseTab"));
const DynVerticalTabs = dynamic(() => import("./dynamic-pages/DynVerticalTabs"));
const TemplatePoint = dynamic(() => import("./dynamic-pages/TemplatePoint"));

export {
  AutoPlaySlider,
  AutoScrollSlider,
  Header,
  MainHeader,
  ReferHeader,
  Footer,
  CTA,
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
  InnerBanner,
  Features,
  Counter,
  Stepper,
  Client,
  PrivacyFeatures,
  ContactUs,
  Welcome,
  Content,
  ServicesSection,
  CareerJobs,
  Blogs,
  BlogDetail,
  ApplyNowForm,
  CoinsPurchaseSection,
  PricingCard,
  StripeSeperateComponent,
  PaymentSection,
  ProConsCard,
  QuickTips,
  BreadCrumbs,
  VerticalTabs,
  CollapseTab,
  DynVerticalTabs,
  TemplatePoint
};
