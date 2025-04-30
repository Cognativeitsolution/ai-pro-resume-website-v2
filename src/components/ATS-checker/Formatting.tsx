import React from "react";
import { CTA } from "@/components";
import Image from "next/image";
import formatting from "../../../public/images/formatting.svg";
import formatting_2 from "../../../public/images/formatting_2.svg";
import short_resume from "../../../public/images/short_resume.svg";
import short_resume_2 from "../../../public/images/short_resume_2.png";
import resume_length_3 from "../../../public/images/resume_length_3.svg";
import good_job from "../../../public/images/good_job.svg";

const Formatting = () => {
  return (
    <>
      <div className="bg-[#ece9fe] p-4 rounded-2xl shadow-md w-full mt-2">
        {/* heading */}
        <div className="flex items-center gap-2">
          <Image src={formatting} alt="evaluation" />
          <h2 className="text-[20px] font-semibold text-gray-800">
            Formatting
          </h2>
        </div>
        {/* file format and size */}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                File Format & Size
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              When you’re uploading your resume in platforms like Indeed, you’re
              likely to meet a file size limit. Ideally, your resume should be
              less than 2MB in size. Anything larger will most likely not be
              accepted on majority of platforms.
            </p>

            <p className="text-gray-500 text-[15px]">
              Your file type also plays an important role in ATS screening. PDF
              files are preferred as the text can be easily read by the
              applicant tracking system. Avoid DOCX, PNG or JPG files.
            </p>
            <Image className="mx-auto" src={formatting_2} alt="formatting_2" />
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center">
              Create a professional PDF resume using{" "}
              <span className="font-bold">AI Pro Resume.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex sm:flex-row gap-3 mt-5 items-center justify-center">
            <CTA
              link
              text="Fix with AI"
              href="/"
              bgColor="bg-primary"
              txtColor="text-white"
              border="border-2 border-white"
            />
            <CTA
              link
              text="Edit & Fix Resume"
              href="/"
              bgColor="bg-primary"
              txtColor="text-white"
              border="border-2 border-white"
            />
          </div>
        </div>

        {/* resume length */}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Resume Length
              </h3>
            </div>
            <div className="border p-5 rounded-xl flex flex-col items-center justify-center gap-2">
              <Image src={short_resume} alt="short_resume" />
              <p className="font-medium text-[16px] text-center">
                Oh, No! <br />
                Your Resume Is Too Short.
              </p>
              <p className="text-[15px] text-center">
                The ideal resume size is between 400 and 800 words, anything
                below 400 is considered too short. Think of other relevant
                sections and experiences you may include.
              </p>
            </div>

            <div className="w-full bg-[#6B4BB8] rounded-xl py-6 px-4 text-center text-white">
              <h2 className="text-sm sm:text-base mb-6">
                Here's A Longer Version Of Your Resume We've Generated For You:
              </h2>

              <div className="relative max-w-3xl mx-auto">
                <Image
                  src={short_resume_2}
                  alt="Resume Preview"
                  className="w-full rounded-md"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 w-[80%] sm:w-[70%] h-[70%] md:h-[40%] mx-auto bg-[#6B4BB8]/70 flex flex-col items-center justify-center px-4 text-white text-center top-[20px] lg:top-[170px]">
                  <p className="text-sm md:text-lg font-medium mb-3 hidden sm:block">
                    Automatically Create A Longer Version Of My{" "}
                    <br className="hidden sm:block" /> Resume With AI PRO Resume
                  </p>
                  <CTA
                    link
                    text="Create Extra Content"
                    href="/"
                    bgColor="bg-primary"
                    txtColor="text-white"
                    border=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6 rounded-lg max-w-5xl mx-auto">
              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  With AI PRO Resume report, you get:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>A complete professional-grade resume checker report</li>
                  <li>Ready to use suggestions for improving your resume</li>
                  <li>
                    Over 1000 industry-leading resume templates and samples
                  </li>
                  <li>Enhancv’s resume and cover letter builder</li>
                  <li>Resume tailoring based on a job ad you provide</li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="flex-1 bg-gray-50">
                <Image
                  src={resume_length_3}
                  alt="Resume Preview"
                  className="w-[300px] h-auto mx-auto rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* long bullet points */}
        <div className="bg-white p-5 rounded-2xl mt-[10px]">
          <div className="flex-1 space-y-2 w-full">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[8px] h-[30px] rounded-xl bg-[#ece9fe]"></div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                Long Bullet Points
              </h3>
            </div>
            <p className="text-gray-500 text-[15px]">
              Using bullet points to communicate experience and achievements on
              your resume is a sure way to grab the hiring manager’s attention.
              Bullet points improve the structure of your resume and make your
              point easily.
            </p>
            <p className="text-gray-500 text-[15px]">
              That’s why bullet point length is crucial for a good resume. Using
              no more than 50 words is a must if you want to make
              your resume easy to read.
            </p>
            <Image className="mx-auto" src={good_job} alt="formatting_2" />
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              Good Job!
            </p>
            <p className="text-gray-500 text-[16px] mx-auto flex items-center justify-center font-bold">
              All bullet points in your resume fit within the length limit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formatting;
