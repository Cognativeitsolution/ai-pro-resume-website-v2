"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import footer_bg from "/public/images/Footer_bg.svg";
import footer_logo from "/public/images/footer_logo.svg";
import { IoCaretForwardOutline } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      heading: "Quick Links",
      items: [
        { name: "Services", href: "/services" },
        { name: "Create a resume", href: "/create-resume" },
        { name: "Create a Cover Letter", href: "/create-cover-letter" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { name: "Resume Templates", href: "/resume-templates" },
        { name: "Resume Examples", href: "/resume-examples" },
        { name: "Cover Letter Templates", href: "/cover-letter-templates" },
        { name: "Cover Letter Examples", href: "/cover-letter-examples" },
        { name: "Resume Parser", href: "/resume-parser" },
      ],
    },
    {
      heading: "Learn",
      items: [
        { name: "Career Blogs", href: "/blogs" },
        { name: "Resume Format", href: "/resume-format" },
        { name: "Create a Cover Format", href: "/cover-format" },
        { name: "How to write resume", href: "/how-to-write-resume" },
        {
          name: "How to write Cover Letter",
          href: "/how-to-write-cover-letter",
        },
      ],
    },
    {
      heading: "Support",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Terms & Conditions", href: "/terms" },
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
      <footer className="relative text-white mt-4 md:mt-10">
        {/* Background Image */}
        <Image
          src={footer_bg}
          alt="Footer Background"
          fill={true}
          className="block -z-10 object-cover object-bottom"
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-24">
          {/* Newsletter Box */}
          <form onSubmit={handleSubmit(onSubscribe)}>
            <div className="bg-primary container rounded-xl p-6 md:flex justify-between items-center mb-10 relative bottom-[60px]">
              <div className="mb-4 md:mb-0">
                <h3 className="text-[22px] md:text-[36px] font-bold leading-tight text-white">
                  Keep Up to date with <br />
                  <span className="text-white">Latest News</span>
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="py-2 outline-none bg-transparent text-white border-b-[2px] border-white w-full md:w-52 placeholder-white"
                    />
                  )}
                />

                <button className="bg-white text-[#9885FF] px-4 py-2 rounded font-semibold hover:bg-blue-100">
                  Subscribe
                </button>
              </div>
            </div>
          </form>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container text-sm">
            {/* Logo and Socials */}
            <div className="flex flex-col items-start justify-between gap-5 sm:gap-0">
              <div className="">
                <Image
                  src={footer_logo}
                  alt="footer_logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex gap-6 text-lg text-white">
                <FaFacebookF className="hover:animate-float" size={30} />
                <FaInstagram className="hover:animate-float" size={30} />
                <FaLinkedinIn className="hover:animate-float" size={30} />
                <FaPinterest className="hover:animate-float" size={30} />
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
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
          <div className="text-center mt-10 text-[16px] border-t-[1px] pt-2 text-gray-200">
            © 2005 & 2023 Resume Builder. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
