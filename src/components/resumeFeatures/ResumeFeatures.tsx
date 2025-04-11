import React from "react";
import ResumeFeaturesCard from "./ResumeFeaturesCard";
import grammer from "../../../public/images/grammer.svg";
import tailored from "../../../public/images/tailored.svg";
import professional from "../../../public/images/20+professionally.svg";
import resume_parser from "../../../public/images/resume_parser.svg";

const ResumeFeatures = () => {
  const featuresData = [
    {
      image: grammer,
      title: "Check Your Resume For Grammatical And Punctuation Errors",
      description:
        "A built-in content checker tool helping you stay on top of grammar errors and clichés",
      features: [
        "Wording and readability analysis",
        "Eliminate typos and grammatical errors",
        "Content suggestions based on your job and experience",
      ],
      buttonText: "Create Resume",
    },
    {
      image: tailored,
      title: "Resume Tailoring Based On The Job You’re Applying For",
      description:
        "Quickly ensure that your resume covers key skills and experiences by pasting the job ad you’re applying for",
      features: [
        "Wording and Skills and experience section analysis analysis",
        "Actionable checklist of what else to add to your resume",
        "Instant comparison between your resume and the job posting",
      ],
      buttonText: "Create Resume",
    },
    {
      image: professional,
      title: "20+ Professionally Designed Resume Sections",
      description:
        "Express your professional history without limitations or worry about how your resume looks",
      features: [
        "Professional sections like Experience, Skills, Summary and Education",
        "Personal sections like Strengths, Quotes, Books, Interests and My Time",
        "Other sections like Certifications, Awards, Achievements, Languages and References",
      ],
      buttonText: "Create Resume",
    },
    {
      image: resume_parser,
      title: "Resume Parser Based On The Resume You Already Have",
      description:
        "Quickly ensure that your resume covers key skills and experiences by pasting the job ad you’re applying for",
      features: [
        "Wording and Skills and experience section analysis analysis",
        "Actionable checklist of what else to add to your resume",
        "Instant comparison between your resume and the job posting",
      ],
      buttonText: "Create Resume",
    },
  ];

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-4 space-y-8">
          {featuresData.map((item, index) => (
            <ResumeFeaturesCard
              key={index}
              {...item}
              reverse={index % 2 === 1} // alternate layout
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ResumeFeatures;
