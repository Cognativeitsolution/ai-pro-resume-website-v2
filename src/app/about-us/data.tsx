import grammer from "../../../public/images/grammer.svg";
import tailored from "../../../public/images/tailored.svg";
import professional from "../../../public/images/20+professionally.svg";
import resume_parser from "../../../public/images/resume_parser.svg";
import aboutVideo from "../../../public/images/about-video.svg";
import aboutCounter from "../../../public/images/about-counter.svg";

export const BannerData = {
    user: { token: "exampleToken" },
    title: (
        <>
            Turning Job Applications into
            <br className="hidden lg:block" /> Opportunities
        </>
    ),
    subtitle: "About us",
    description: (
        <>
            AI Pro Resume is an all-in-one platform offering everything a job hunter needs. From easy resume format
            <br className="hidden lg:block" /> to expert tips, we have all that assist you in landing your dream interview.
        </>
    ),
};

export const FeaturesData = [
    {
        image: aboutVideo,
        title: "Our Story",
        description:
            "AI Pro Resume started with a single aim: to make global job search easier for everyone. We understand that getting noticed can be tough due to excessive competition. Therefore, we developed a platform that caters to all your requirements and permits you to find your desired jobs easily. As a smart resume builder, our core mission is to combine AI technology with creative features that save time and make your professional profile incredible. Our focus is not just creating an ATS-friendly resume builder platform; we want to empower job seekers with professional resumes and cover letters that truly represent them and help them get the job they deserve. Join us for a successful career journey. ",
        buttonText: "Create Resume",
    },
    {
        image: aboutCounter,
        title: "What we offer﻿",
        description:
            "We provide everything you need to stand out in the job market. Our certified resume writers make your application process smooth and stress-free. With our best AI job application tool, you can generate your ideal resumes and cover letters in seconds. If you are not in the mood to create a resume or cover letter manually, let our experts help you. AI Pro Resume is your AI resume assistant that offers captivating templates that easily pass ATS scanners. You can use our resume parser, which accurately fetches your data to reduce your manual efforts. With us, you can customize your resume and cover letter template smoothly. ",
        buttonText: "Create Resume",
        reverse: true
    },

];