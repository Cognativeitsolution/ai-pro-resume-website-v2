// ===============
import icon1 from "media/customerIcons/saudi.webp";
import icon2 from "media/customerIcons/aerotek.webp";
import icon3 from "media/customerIcons/geti.webp";
import icon4 from "media/customerIcons/ladders.webp";
import icon5 from "media/customerIcons/snagajob.webp";
import icon6 from "media/customerIcons/alison.webp";
// ===============

export const BannerData = {
  title: (
    <>
      Find the Perfect Resume
      Example <br className="hidden lg:block" />
      for Your Field
    </>
  ),
  subtitle: "Resume Examples",
  description: "AI Pro Resume is your ultimate destination for creating professional resumes and cover letters. To save you time and effort, we have introduced creative resume examples. These great resume examples are pre-written. You just have to click on them and add minor details to make your resume more personalized. We offer professional resume templates that assist you in landing the interview. Whether you are starting your career or a seasoned professional, AI Pro Resume ensures your resume shines in the crowd.",
  subdesc: true,
  linkText: "Cover letter Examples",
  href: "/cover-letter-examples",
};

// ==========================
const customerIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon1, icon2, icon3, icon4, icon5, icon6];

export const IconData = {
  title: "Our customers were hired by:",
  icons: customerIcons
};
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

