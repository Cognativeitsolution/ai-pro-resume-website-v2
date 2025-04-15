import React from "react";
import Image from "next/image";
import styles from "./pricing.module.css";
import check_1 from "../../../public/images/check_1.svg";

const packages = [
  {
    name: "Free",
    price: "Life Time Access",
    backgroundColor: "#2f2f2fd1",
    tickImage: "",
    color: "text-black",
    ctaColor: "text-black",
    titleColor: "text-black",
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
    buttons: [
      {
        text: "012-345-6789",
        color: "bg-prime text-white border-0",
        image: "",
        href: "tel:012-345-6789",
        imgColor:
          "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1",
      },
      {
        text: "Live Chat",
        color: "bg-black text-white border border-white",
        image: "",
        href: "javascript:$zopim.livechat.window.show();",
      },
    ],
  },
  {
    name: "Most Popular",
    price: "1-MONTH/ $ 15.59",
    backgroundColor: "#262626",
    color: "text-white",
    tickImage: "",
    mblSpc: "my-10 md:my-0",
    ctaColor: "text-white",
    titleColor: "text-white",
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
    buttons: [
      {
        text: "012-345-6789",
        color: "bg-white text-black font-semibold border-0",
        image: "",
        href: "tel:012-345-6789",
        imgColor:
          "bg-black w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-[8.5px] rotate-[90deg]",
      },
      {
        text: "Live Chat",
        color: "bg-black text-white border border-white",
        image: "",
        href: "javascript:$zopim.livechat.window.show();",
      },
    ],
  },
  {
    name: "Premium",
    price: "$6-MONTHS / $ 29.99",
    backgroundColor: "#2f2f2fd1",
    color: "text-black",
    tickImage: "",
    ctaColor: "text-black",
    titleColor: "text-black",
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
    buttons: [
      {
        text: "012-345-6789",
        color: "bg-prime text-white border-0",
        image: "",
        href: "tel:012-345-6789",
        imgColor:
          "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1",
      },
      {
        text: "Live Chat",
        color: "bg-black text-white border border-white",
        image: "",
        href: "javascript:$zopim.livechat.window.show();",
      },
    ],
  },
];

type PricingCardProps = {
  content: {
    title: string;
    para: string;
  };
};

const PricingCard: React.FC<PricingCardProps> = ({ content }) => {
  const { title, para } = content;

  return (
    <section className="py-5 md:py-10">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className={styles.cardsMainDiv}>
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative ${pkg.mblSpc ?? ""} h-full ${
                    styles.cards
                  }`}
                >
                  <div
                    className={`relative flex flex-col justify-center py-5 h-auto rounded-[35px] border-2 border-white bg-indigo-200/20 backdrop-blur-none`}
                  >
                    <div className={`px-6 pb-4`}>
                      <h3
                        className={`text-[30px] font-bold leading-tight mb-2`}
                      >
                        {pkg.name}
                      </h3>
                      <h4 className={`text-[20px] font-bold`}>{pkg.price}</h4>
                    </div>
                    <div className="flex-wrap flex items-center justify-between mt-[10px] w-[90%] mx-auto">
                      <button
                        className={`flex items-center justify-center text-[11px] xl:text-[15px] font-semibold py-[12px] px-[10px] lg:px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] w-full bg-PrimaryDark text-white hover:animate-float hover:bg-primary`}
                      >
                        Get Started
                      </button>
                    </div>
                    <ul
                      className={`pt-4 px-6 max-h-[320px] overflow-y-scroll ${styles.redscrollbar}`}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
