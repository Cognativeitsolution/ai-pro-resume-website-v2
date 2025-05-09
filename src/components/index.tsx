import dynamic from "next/dynamic";
// ===================
const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const Loader = dynamic(() => import("./loader/MainLoader"));
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
const ResumeCategories = dynamic(() => import("./resume-and-cover-letter-examples/ResumeCategories"));
const CoverLetterCategories = dynamic(() => import("./resume-and-cover-letter-examples/CoverLetterCategories"));
const IconSlider = dynamic(() => import("./iconSlider/IconSlider"));
const ShowAllTemplates = dynamic(() => import("./showAllTemplates/ShowAllTemplates"));
const DynMainDiv = dynamic(() => import("./dynamic-pages/DynMainDiv"));
const HowToWriteResume = dynamic(() => import("./how-to-write-resume-format/HowToWriteResume"));
const HowToWriteCoverLetter = dynamic(() => import("./how-to-write-cover-letter-format/HowToWriteCoverLetter"));
const CoverLetterFormatComp = dynamic(() => import("./cover-letter-format/CoverLetterFormatComp"));
const ResumeFormatComp = dynamic(() => import("./resume-format/ResumeFormatComp"));
const InterviewQuestionsSeo = dynamic(() => import("./interview-questions-seo/InterviewQuestionsSeo"));
const YourScore = dynamic(() => import("./ATS-checker/YourScore"));
const Evaluation = dynamic(() => import("./ATS-checker/Evaluation"));
const BuildATSfriendlyResume = dynamic(() => import("./ATS-checker/BuildATSfriendlyResume"));
const ParsedResumeOverview = dynamic(() => import("./ATS-checker/ParsedResumeOverview"));
const ParserBanner = dynamic(() => import("./resume-parser/banner/ParserBanner"));
const UploadParser = dynamic(() => import("./resume-parser/upload/UploadParser"));
const ParserFeatures = dynamic(() => import("./resume-parser/features/ParserFeatures"));
const ParserFeatureCard = dynamic(() => import("./resume-parser/features/parserFeatureCard/ParserFeatureCard"));
const ParserGoals = dynamic(() => import("./resume-parser/goals/ParserGoals"));
const ParserContent = dynamic(() => import("./resume-parser/content/ParserContent"));
const Formatting = dynamic(() => import("./ATS-checker/Formatting"));
const IssuesFound = dynamic(() => import("./ATS-checker/IssuesFound"));
const ConcisenessAndImpact = dynamic(() => import("./ATS-checker/ConcisenessAndImpact"));
const GrammerAndSpelling = dynamic(() => import("./ATS-checker/GrammerAndSpelling"));
const Clarity = dynamic(() => import("./ATS-checker/Clarity"));
const JobWinningResume = dynamic(() => import("./ATS-checker/JobWinningResume"));
const RelevanceOfContent = dynamic(() => import("./ATS-checker/RelevanceOfContent"));
const CoverLetterSections = dynamic(() => import("./builderSection/coverLetterSections/CoverLetterSections"));
const DynBreadCrumbs = dynamic(() => import("./dynamic-pages/DynBreadCrumbs"));
const DynamicSection = dynamic(() => import("./dynamicSection/DynamicSection"));
const DynamicContent = dynamic(() => import("./dynamicSection/DynamicContent"));
const DynamicTabs = dynamic(() => import("./dynamicSection/DynamicTabs"));
const Tailor = dynamic(() => import("./dynamicSection/Tailor"));
const InterviewQuestionsCard = dynamic(() => import("./cards/InterviewQuestionsCard"));
const SummaryFeatures = dynamic(() => import("./summaryGenerator/SummaryFeatures"));
const Work = dynamic(() => import("./summaryGenerator/Work"));
const ResumeEditor = dynamic(() => import("./summaryGenerator/ResumeEditor"));
const TabSection = dynamic(() => import("./sideTab/SideTab"));
const BuilderFeatures = dynamic(() => import("./Features/BuilderFeatures"));

export {
  AutoPlaySlider,
  AutoScrollSlider,
  Loader,
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
  TemplatePoint,
  ResumeCategories,
  CoverLetterCategories,
  IconSlider,
  ShowAllTemplates,
  DynMainDiv,
  HowToWriteResume,
  HowToWriteCoverLetter,
  CoverLetterFormatComp,
  ResumeFormatComp,
  InterviewQuestionsSeo,
  YourScore,
  Evaluation,
  ParsedResumeOverview,
  BuildATSfriendlyResume,
  ParserBanner,
  UploadParser,
  ParserFeatures,
  ParserFeatureCard,
  ParserGoals,
  ParserContent,
  Formatting,
  RelevanceOfContent,
  JobWinningResume,
  IssuesFound,
  Clarity,
  GrammerAndSpelling,
  ConcisenessAndImpact,
  CoverLetterSections,
  DynBreadCrumbs,
  DynamicSection,
  DynamicContent,
  DynamicTabs,
  Tailor,
  InterviewQuestionsCard,
  SummaryFeatures,
  Work,
  ResumeEditor,
  TabSection,
  BuilderFeatures,
};
