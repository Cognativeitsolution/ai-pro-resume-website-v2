import icon1 from "media/customerIcons/saudi.webp";
import icon2 from "media/customerIcons/aerotek.webp";
import icon3 from "media/customerIcons/geti.webp";
import icon4 from "media/customerIcons/ladders.webp";
import icon5 from "media/customerIcons/snagajob.webp";
import icon6 from "media/customerIcons/alison.webp";
// ==========================

export const BannerData = {
  title: (
    <>
      Ready to Stand Out? <br className="hidden lg:block" /> Pick the Perfect Resume Template
    </>
  ),
  subtitle: "Resume Templates",
  description: "We have templates for all. Whether you are looking for a basic resume template, a simple modern resume template, a resume portfolio template, or an outdoor professional guiding resume template, we have got you covered. AI Pro Resumes offers the best professional resume templates that are ATS-friendly and customizable. Let’s now catch the recruiter's attention with a clean simple resume template!",
  subdesc: true,
  linkText: "Cover letter Templates",
  href: "/cover-letter-templates",
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
