import standOut from "media/summaryGenerator/stand-out.gif";
import summary from "media/summaryGenerator/summary.gif";
import tailord from "media/summaryGenerator/tailord.gif";
import upload from "media/summaryGenerator/upload.webp";
import analyze from "media/summaryGenerator/analyze.webp";
import get from "media/summaryGenerator/get.webp";
import arrow1 from "media/resume_parser/goals-arrow-left.webp";
import arrow2 from "media/resume_parser/top-arrow.webp";
import arrow3 from "media/resume_parser/goals-arrow-right.webp";
// =============

export const BannerData = {
  title: (
    <>
      Generate Your Resume <br className="hidden lg:block" /> Summary in Seconds
    </>
  ),
  subtitle: "AI Resume Summary Generator",
  description: "Tired of spending hours writing the perfect summary? This free AI resume summary generator will get this done for you completely for free. Upload your resume and get a professional summary tailored to the job posting in a matter of seconds.",
};
// ==========================
export const ResumeEditorData =
{
  title: (<> Resume editor that saves <br className="hidden lg:block" /> you time </>),
  list: [
    "14+ fully-customizable resume templates",
    "Your logo on every resume you create",
    "Unlimited resumes & cover letters",
    "Import any resume to your template in seconds",
  ],
}
// ==========================
export const SummaryFeaturesData = [
  {
    video: "https://ik.imagekit.io/matrz1mbp/Stand%20Out.mp4?updatedAt=1746513054024",
    // video: standOut,
    title: "Highlight the best from your experience",
    description:
      "The summary generator analyzes your resume in order to extract the most impressive parts of your experience and make you stand out from the crowd.",
    list: [
      "Coins: you can earn or purchase coins through the platform.",
      "PayPal: Log in to your PayPal account at checkout for smooth payment.",
      "Card Payments: Enter your card details securely to make a purchase.",
    ],
    arrow: arrow1,
  },
  {
    video: "https://ik.imagekit.io/matrz1mbp/Always%20concise..mp4?updatedAt=1746515132247",
    // video: summary,
    title: "Always concise. Even for large resumes",
    description:
      "Have you ever wondered how to write a summary for a 3-page resume? The Enhancv resume summary generator creates the perfect size summary, even for long resumes.",
    list: [
      "Coins: you can earn or purchase coins through the platform.",
      "PayPal: Log in to your PayPal account at checkout for smooth payment.",
      "Card Payments: Enter your card details securely to make a purchase.",
    ],
    reverse: true,
    arrow: arrow2,
  },
  {
    video: "https://ik.imagekit.io/matrz1mbp/MicrosoftTeams-video.mp4?updatedAt=1746515100221",
    // video: tailord,
    title: "Tailored to the job posting",
    description: "Your resume summary is tailored to any job posting using Enhancv’s resume builder. Pass ATS systems and impress recruiters with a focused, custom resume.",
    list: [
      "Coins: you can earn or purchase coins through the platform.",
      "PayPal: Log in to your PayPal account at checkout for smooth payment.",
      "Card Payments: Enter your card details securely to make a purchase.",
    ],
    arrow: arrow3,
  },
];
// ==========================
export const WorkData = [
  {
    image: upload,
    number: "1",
    title: "Upload your resume",
    description: "Drop or click to upload your most recent resume to the AI summary generator. ",
  },
  {
    image: analyze,
    number: "2",
    title: "Let the AI analyze",
    description: "The AI resume summary generator will analyze your experience in details",
  },
  {
    image: get,
    number: "3",
    title: "Get your summary",
    description: "You’ll have your professional resume summary ready in a matter of seconds",
  },
];
// ==========================
const ResumeExamplesPagefaqsList = [
  {
    question: "What Makes Us The Best Resume Maker In The Market?",
    answer:
      "Our unique features, such as AI-based suggestions, professional resume writing, professional cover letter writing, professional resume review, professional cover letter review, free resume and cover letter templates, pre-written examples, and referral rewards, make us the top and most creative resume builder.",
  },
  {
    question: "How Fast Can I Create My Resume?",
    answer:
      "You can create your resume in under 30 minutes using our ready-made templates and intuitive editor.",
  },
  {
    question: "Are The Resume Templates Customizable?",
    answer:
      "Yes, all our resume templates are fully customizable — fonts, layout, colors, and content.",
  },
  {
    question: "Do You Offer Cover Letter Services?",
    answer:
      "Yes, we offer cover letter writing and review services with multiple revisions for perfection.",
  },
];

export const faqs = {
  title: "FREQUENTLY ASKED QUESTIONS",
  faqlist: ResumeExamplesPagefaqsList,
};
