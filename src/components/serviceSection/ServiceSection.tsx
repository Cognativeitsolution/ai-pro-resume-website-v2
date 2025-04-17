import React from "react";
// ===============
import ServiceCard from "./ServiceCard";
import { CTA } from "@/components";
// ===============
import prof_cover_writing from "../../../public/images/prof_cover_writing.webp";
import prof_cover_review from "../../../public/images/prof_cover_review.webp";
import prof_resume_writing from "../../../public/images/prof_resume_writing.webp";
import prof_resume_review from "../../../public/images/prof_resume_review.webp";

const ServiceSection = () => {
  const ServiceData = [
    {
      image: prof_cover_writing,
      title: "Professional Cover Letter Writing",
      services: [
        "Create A Tailored Cover Letter For Specific Roles.",
        "Use Persuasive Language To Highlight Your Value.",
        "Ensure A Polished And Professional Tone.",
        "2 Revisions.",
      ],
    },
    {
      image: prof_resume_review,
      title: "Professional Resume Review",
      services: [
        "Assess Format, Content, And ATS Compatibility.",
        "Suggest Best Resume Formats And Improvements To Display Achievements.",
        "Our Expert Resume Writers Offer Feedback To Improve Structure And Clarity.",
        "2 Revisions.",
      ],
    },
    {
      image: prof_resume_writing,
      title: "Professional Resume Writing",
      services: [
        "Our Professional Resume Writers Design Resumes That Stand Out.",
        "Modify Content For ATS And Role-Specific Requirements.",
        "Highlight Skills And Achievements With Clear Language.",
        "2 Revisions.",
      ],
    },
    {
      image: prof_cover_review,
      title: "Professional Cover Letter Review",
      services: [
        "Highlight Changes To Make It Concise And Impactful.",
        "Suggest The Best Cover Letter Formats For Job Relevance And Tone.",
        "Guide To Align With Industry Standards.",
        "2 Revisions.",
      ],
    },
  ];
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <h3 className="font-normal text-[18px] md:text-[22px] text-center">
          Services
        </h3>
        <h4 className="font-semibold text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] text-center mt-4">
          Let’s Perfect Your Resume &<br /> Cover Letter Together
        </h4>
        <p className="font-normal text-[16px] lg:text-[18px] text-center mt-4">
          Writing a professional cover letter and resume can be a hectic task,
          and it will not guarantee you will pass the ATS checkers. AI Pro
          Resume is here to cater to all your needs by offering top-notch
          professional cover letter writing service and resume writing services.
          We also provide cover letter review and professional resume review
          services to assist you in creating out-class resumes and cover
          letters. Our experts analyze your documents and provide suggestions
          based on your job positions and career.
        </p>
        <div className="mt-5 flex justify-center">
          <CTA
            btn
            text="Explore All Services"
            bgColor="bg-primary hover:bg-PrimaryDark"
            txtColor="text-white"
            border="border-0"
          />
        </div>
        {/* service cards */}
        <div className="mt-8">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ServiceData.map((item, idx) => (
              <ServiceCard
                key={idx}
                image={item.image}
                title={item.title}
                services={item.services}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
