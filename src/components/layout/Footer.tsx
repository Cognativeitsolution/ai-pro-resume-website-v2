"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
// ================
import { CTA } from "@/components";
// ================
import { IoCaretForwardOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
// ================
import footer_bg from "media/images/Footer_bg.webp";
import footer_logo from "media/images/footer_logo.webp";


const Footer = () => {
  const footerSections = [
    {
      heading: "Quick Links",
      items: [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Create a resume", href: "/create-resume" },
        { name: "Create a Cover Letter", href: "/create-cover-letter" },
        { name: "ATS Checker", href: "/ats-checker" },
        { name: "Resume Parser", href: "/resume-parser" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { name: "Resume Templates", href: "/resume-templates" },
        { name: "Resume Examples", href: "/resume-examples" },
        { name: "Cover Letter Templates", href: "/cover-letter-templates" },
        { name: "Cover Letter Examples", href: "/cover-letter-examples" },
        { name: "Resume Builder", href: "/resume-builder" },
        { name: "Cover Letter Builder", href: "/cover-letter-builder" },
        { name: "Resume Summary Generator", href: "/resume-summary-generator" },
      ],
    },
    {
      heading: "Learn",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Resume Format", href: "/resume-format" },
        { name: "Cover Letter Format", href: "/cover-letter-format" },
        { name: "How to write a Resume", href: "/how-to-a-write-resume" },
        { name: "How to write a Cover Letter", href: "/how-to-write-a-cover-letter"},
        { name: "Interview Preparation Seo & Marketing", href: "/interview-preparation-seo-and-marketing"},
        { name: "Tools And Tips To Prepare For Interviews", href: "/tools-and-tips-to-prepare-for-interviews"},
      ],
    },
    {
      heading: "Support",
      items: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Careers", href: "/careers" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubscribe = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <footer className="relative text-white mt-0 lg:mt-10">
        {/* Background Image */}
        <Image
          src={footer_bg}
          alt="Footer Background"
          fill={true}
          priority
          className="block -z-10 object-cover object-top"
        />

        {/* Content */}
        <div className="relative z-10 px-5 xl:px-0 pt-20">
          {/* Newsletter Box */}
          <form onSubmit={handleSubmit(onSubscribe)}>
            <div className="bg-primary container rounded-xl px-8 md:px-12 py-8 md:flex justify-between items-center mb-0 xl:mb-10 relative bottom-[50px]">
              <div className="mb-4 md:mb-0">
                <h3 className="text-[24px] lg:text-[30px] font-semibold leading-tight text-white">
                  Keep Up to date with <br />
                  <span className="text-white">Latest News</span>
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="w-full lg:w-60 h-[40px] p-[5px] outline-none bg-transparent text-white border-b-[2px] border-white placeholder-white"
                    />
                  )}
                />
                <CTA
                  btn
                  text="Subscribe"
                  bgColor="bg-white hover:bg-black"
                  txtColor="text-zinc-800 hover:text-white"
                  border="border-0"
                />
              </div>
            </div>
          </form>

          {/* Footer Links */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-y-10 gap-5 container text-sm">
            {/* Logo and Socials */}
            <div className="flex flex-col md:flex-row xl:flex-col items-start md:items-center xl:items-start justify-between gap-6 md:gap-5 sm:gap-0">
              <div className="w-[125px] xl:w-[150px]">
                <Image
                  src={footer_logo}
                  alt="footer_logo"
                />
              </div>
              <div className="flex gap-6 text-lg text-white">
                <FaFacebookF className="text-[25px] xl:text-[30px] hover:scale-110 transition-all duration-300 cursor-pointer" />
                <FaInstagram className="text-[25px] xl:text-[30px] hover:scale-110 transition-all duration-300 cursor-pointer" />
                <FaLinkedinIn className="text-[25px] xl:text-[30px] hover:scale-110 transition-all duration-300 cursor-pointer" />
                <FaPinterest className="text-[25px] xl:text-[30px] hover:scale-110 transition-all duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="col-span-1">
                <h4 className="font-bold text-xl mb-4">{section.heading}</h4>
                <ul className="space-y-3 text-base">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2"
                      >
                        <IoCaretForwardOutline size={16} />
                        <span className="hover:ml-2 transition-all">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-10 text-[16px] border-t-[1px] py-2 text-gray-200">
            © 2005 & 2023 Resume Builder. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
