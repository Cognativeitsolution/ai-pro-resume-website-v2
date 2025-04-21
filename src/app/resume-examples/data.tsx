import Link from "next/link";
import template_1 from "../../../public/resume_template_images/template_1.webp";
import template_2 from "../../../public/resume_template_images/template_2.webp";
import template_3 from "../../../public/resume_template_images/template_3.webp";
import template_4 from "../../../public/resume_template_images/template_4.webp";
import template_5 from "../../../public/resume_template_images/template_5.webp";
import template_6 from "../../../public/resume_template_images/template_6.webp";
import template_7 from "../../../public/resume_template_images/template_7.webp";
import template_8 from "../../../public/resume_template_images/template_8.webp";
import template_9 from "../../../public/resume_template_images/template_9.webp";
import template_10 from "../../../public/resume_template_images/template_10.webp";
import template_11 from "../../../public/resume_template_images/template_11.webp";
import template_12 from "../../../public/resume_template_images/template_12.webp";
import template_13 from "../../../public/resume_template_images/template_13.webp";
import template_14 from "../../../public/resume_template_images/template_14.webp";
import template_15 from "../../../public/resume_template_images/template_15.webp";

export const BannerData = {
  title: (
    <>
      Find The Perfect Resume Example
      <br className="hidden lg:block" /> for Your Field
    </>
  ),
  subtitle: "Resume Examples",
  description: (
    <>
      AI Pro Resume is your ultimate destination for creating professional
      resumes and cover letters. To save you time and effort, we have introduced
      creative resume examples. These great resume examples are pre-written. You
      just have to click on them and add minor details to make your resume more
      personalized. We offer professional resume templates that assist you in
      landing the interview. Whether you are starting your career or a seasoned
      professional, AI Pro Resume ensures your resume shines in the crowd.
    </>
  ),
  subdesc: (
    <>
      Click here to check our{" "}
      <Link className="font-semibold" href={"/"}>
        Cover Letter Examples
      </Link>
    </>
  ),
  button: "Import Resume",
};

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

export const ResumeCategories = [
  {
    id: "#head1",
    name: "Creative",
    description: (
      <>
        These creative resume examples are ideal for designers, animators, and
        UI UX designers. The essence of these resume examples reflects the blend
        of innovation with creativity...
      </>
    ),
    images: [template_2, template_3, template_4],
  },
  {
    id: "#head2",
    name: "Creative & Cultural Fields",
    description: (
      <>
        Use these professional resume templates if you want to keep your resume
        simple and career-oriented...
      </>
    ),
    images: [template_9, template_10],
  },
  {
    id: "#head3",
    name: "Food Service",
    description: (
      <>
        These creative resume examples are ideal for designers, animators, and
        UI UX designers. The essence of these resume examples reflects the blend
        of innovation with creativity...
      </>
    ),
    images: [template_5, template_6, template_7],
  },
  {
    id: "#head4",
    name: "Management",
    description: (
      <>
        Use these professional resume templates if you want to keep your resume
        simple and career-oriented...
      </>
    ),
    images: [template_15, template_14, template_13],
  },
  {
    id: "#head5",
    name: "Creative",
    description: (
      <>
        These creative resume examples are ideal for designers, animators, and
        UI UX designers. The essence of these resume examples reflects the blend
        of innovation with creativity...
      </>
    ),
    images: [
      template_2,
      template_3,
      template_4,
      template_5,
      template_6,
      template_7,
    ],
  },
  {
    id: "#head6",
    name: "Creative & Cultural Fields",
    description: (
      <>
        Use these professional resume templates if you want to keep your resume
        simple and career-oriented...
      </>
    ),
    images: [template_9, template_10],
  },
  {
    id: "#head7",
    name: "Food Service",
    description: (
      <>
        These creative resume examples are ideal for designers, animators, and
        UI UX designers. The essence of these resume examples reflects the blend
        of innovation with creativity...
      </>
    ),
    images: [template_5, template_6, template_7],
  },
  {
    id: "#head8",
    name: "Management",
    description: (
      <>
        Use these professional resume templates if you want to keep your resume
        simple and career-oriented...
      </>
    ),
    images: [template_1, template_12, template_7],
  },
];
