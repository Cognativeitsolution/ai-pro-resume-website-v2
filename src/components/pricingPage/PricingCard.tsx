"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./pricing.module.css";
import check_1 from "media/images/check_1.webp";
import { CTA } from "@/components";

const packages = [
  {
    Pckgname: "Free",
    price: "Life Time Access",
    mblSpc: "my-10 md:my-0",
    features: [
      "Unlimited PDF Downloads",
      "Spell & Grammar Checker (5 Tries)",
      "Unlimited Editing and Sharing",
      "5 Resume & Cover Letter Templates",
      "Resume & Cover Letter Examples",
      "5 Resume Parser Tries",
      "Basic Resume Sections",
      "Basic AI Chat Support",
      "3 Fonts & 3 Color Themes",
      "Database-Sourced Suggestions",
      "Share/Download with AI Pro Resume Branding",
      "Manual Cover Letter Generation",
      { text: "Invisible Point", isVisible: true },
    ],
  },
  {
    Pckgname: "Most Popular",
    price: "1-MONTH/ $ 15.59",
    mblSpc: "my-10 md:my-0",
    features: [
      "Spell & Grammar Checker (20 Tries)",
      "6 Fonts & Color Themes",
      "Advanced AI-Based Chat Support",
      "2 Premium Resume Templates",
      "2 Premium Cover Letter Templates",
      "1 Premium Service with 2 Revisions",
      "10 Resume Parser Tries",
      "Custom Resume Section",
      "AI-Based Cover Letter Generation (5 tries)",
      "Duplicate Resume Option",
      "Share with AI Pro Resume Branding",
      "Unlimited downloads Without AI Pro Resume Branding",
    ],
  },
  {
    Pckgname: "Premium",
    price: "$6-MONTHS / $ 29.99",
    mblSpc: "my-10 md:my-0",
    features: [
      "5 Premium Resume & Cover Letter Templates",
      "Unlimited Resume & Cover Letter Examples",
      "Spell & Grammar Checker (50 tries)",
      "Unlimited PDF Downloads",
      "Premium Support + AI-Based Chat Support",
      "Access to Global Job Opportunities",
      "AI-Based Cover Letter Generator (20 Tries)",
      "Real-Time AI-Based Suggestions",
      "2 Premium Services with 2 Revisions Each",
      "20 Resume Parser Tries",
      "Unlimited Fonts & Themes",
      "One-Time Payment (No Need to Cancel)",
      "Share/Download Without AI Pro Resume Branding",
    ],
  },
];

const PricingCard = () => {
  const [packageDetailText, setPackageDetailText] = useState("");

  const handlePackageDetail = (Pckgname: any) => {
    if (Pckgname === "Free") {
      setPackageDetailText(
        "This package is perfect for those just starting and looking for essential tools to create or enhance their resumes and cover letters. Enjoy unlimited PDF downloads, 5 attempts at spell and grammar checks, and the ability to edit and share your documents. With access to basic resume sections, templates, examples, and manual cover letter generation, you can get started without any extra cost."
      );
    } else if (Pckgname === "Premium") {
      setPackageDetailText(
        "Our Premium Package offers the ultimate experience for job seekers. You’ll have access to 5 premium templates, unlimited examples, and 50 tries for spell and grammar checks. Enjoy the convenience of unlimited downloads, access to global job opportunities, and real-time AI suggestions. With 20 resume parser tokens, limitless customization options, and branding-free downloads, this plan ensures you stand out."
      );
    } else {
      setPackageDetailText(
        "It is ideal for professionals aiming to create standout resumes and cover letters with enhanced features. With spell and grammar check attempts and access to advanced AI chat support, you’ll have more tools to refine your documents. This package includes two premium templates and AI-based cover letter generation. Additionally, enjoy resume parser tokens that allow you to create tailored job applications easily."
      );
    }
  };
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <div className={`${styles.cardsMainDiv}`}>
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative ${pkg.mblSpc ?? ""} h-full ${styles.cards
                    }`}
                >
                  <div
                    className={`relative flex flex-col justify-center py-5 h-auto rounded-[20px] border-2 border-white bg-indigo-200/20 backdrop-blur-none`}
                  >
                    <div className={`px-6 pb-4`}>
                      <h3
                        className={`text-[30px] font-bold leading-tight mb-2`}
                      >
                        {pkg.Pckgname}
                      </h3>
                      <h4 className={`text-[20px] font-bold`}>{pkg.price}</h4>
                    </div>
                    <div className="flex items-center justify-center mt-[10px] w-[90%] mx-auto">
                      <CTA
                        btn
                        text="Get Started"
                        txtColor="text-white"
                        bgColor="bg-PrimaryDark hover:bg-primary"
                        border="border-0"
                        width="w-full"
                      />
                    </div>
                    <ul
                      className={`mt-4 px-6 max-h-[320px] overflow-y-scroll ${styles.redscrollbar}`}
                    >
                      {pkg.features.map((feature, i) =>
                        typeof feature === "string" ? (
                          <li
                            key={i}
                            className="flex items-center gap-3 my-2 xl:my-3 font-normal tracking-wider"
                          >
                            <Image
                              src={check_1}
                              className={`w-[3%]`}
                              alt="Tick"
                            />
                            <span className={`text-[15px] font-medium`}>
                              {feature}
                            </span>
                          </li>
                        ) : (
                          ""
                        )
                      )}
                    </ul>
                    <div className="flex items-center justify-center mt-[30px]">
                      <CTA
                        btn
                        text="View Details"
                        txtColor="text-white"
                        bgColor="bg-PrimaryDark hover:bg-primary"
                        border="border-0"
                        handleClick={() => handlePackageDetail(pkg.Pckgname)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {packageDetailText && (
          <div className="mt-8 text-black font-medium text-[15px] mx-auto text-center w-[100%] sm:w-[80%] bg-indigo-200/20 border-2 border-white rounded-xl p-2 tracking-wider">
            {packageDetailText}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCard;
