import aboutVideo from "media/about_us/about-video.svg";
import aboutCounter from "media/about_us/about-counter.svg";
import aboutCounter1 from "media/images/about-counter-1.svg";
import aboutCounter2 from "media/images/about-counter-2.svg";
import aboutCounter3 from "media/images/about-counter-3.svg";
import Client1 from "media/images/client-1.svg";
import Client2 from "media/images/client-2.svg";
import Client3 from "media/images/client-3.svg";
import Client4 from "media/images/client-4.svg";
import Client5 from "media/images/client-5.svg";
import Client6 from "media/images/client-6.svg";
import Client7 from "media/images/client-7.svg";
import Client8 from "media/images/client-8.svg";
import Client9 from "media/images/client-9.svg";
import Client10 from "media/images/client-10.svg";
import Client11 from "media/images/client-11.svg";



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

const CounterList = [
    {
        icon: aboutCounter1.src,
        count: "2359+",
        label: "Resumes Made",
    },
    {
        icon: aboutCounter2.src,
        count: "471+",
        label: "Cover Letters Created",
    },
    {
        icon: aboutCounter3.src,
        count: "15+",
        label: "AI FEATURES",
    },
];

export const CounterData = {
    title: "Start your journey toward your dream job with AI Pro Resume.",
    description: (
        <>
            We help you create customized, ATS-friendly resumes that stand out to recruiters. we have already assisted millions of job hunters in landing <br className="hidden xl:block" /> their perfect jobs. Become a successful professional with the smart resume builder today.
        </>
    ),
    counterlist: CounterList

}

const stepperList = [
    {
        title: "Our Mission",
        description:
            "Our mission is your empowerment, a dynamic partnership extending beyond a typical service. With us, it's about more than templates; it's about a collaborative journey. We're here to enlighten your skills, unfold your story, and place your aspirations center stage.",
    },
    {
        title: "Our Vision",
        description:
            "Our vision is to be the bundle of innovation in the world of professional development. In our vision, inclusivity is key. AI resume builder pictures a landscape where cutting-edge technology seamlessly integrates with individual stories, making personalized career services accessible to all. AI Pro Resume is not merely a tool; it's a vibrant community encouraging innovation, authenticity, and adaptability.",
    },
    {
        title: "Our Process",
        description:
            "Transform your professional journey with AI Pro Resume. Kick start your professional journey by engaging with our user-friendly interface that welcomes you to AI-driven career elevation, where you make a resume by inputting your details to create your unique narrative. Our advanced AI algorithms then analyze this information, crafting a professional masterpiece that authentically represents your skills and experiences.",
    },
];

export const StepperData = {
    title: "Our Goal",
    description: (
        <>
            We have seen fresh graduates struggle to create their Resumes and fail to pass the initial screening tests due to poorly made CVs. Thus, AI Pro Resume aims to provide you with recruiter-approved resumes so you can land the job you have been dreaming of. We have also been working hard to improve and explore creative ways to help you get the best features for creating your resumes.
        </>
    ),
    stepperList: stepperList

}

const clientList = [
    { image: Client1, alt: "our-client 1" },
    { image: Client2, alt: "our-client 2" },
    { image: Client3, alt: "our-client 3" },
    { image: Client4, alt: "our-client 4" },
    { image: Client5, alt: "our-client 5" },
    { image: Client6, alt: "our-client 6" },
    { image: Client7, alt: "our-client 7" },
    { image: Client8, alt: "our-client 8" },
    { image: Client9, alt: "our-client 9" },
    { image: Client10, alt: "our-client 10" },
    { image: Client11, alt: "our-client 11" },
];

export const ClientData = {
    title: "Our Valuable Clients",
    description: (
        <>
            Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
        </>
    ),
    clientList: clientList

}

export const blogsData = [
    {
        title: "Our Valuable Clients",
        description: (
            <>
                Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
            </>
        ),
        date: '10 Nov 2025',
        author_name: 'Rabia Shahwaiz',
        author_designation: 'Mern Stack Developer',
    },
    {
        title: "Our Valuable Clients",
        description: (
            <>
                Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
            </>
        ),
        date: '10 Nov 2025',
        author_name: 'Farooq Lead',
        author_designation: 'Sr. React Developer',
    },
    {
        title: "Our Valuable Clients",
        description: (
            <>
                Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
            </>
        ),
        date: '10 Nov 2025',
        author_name: 'Rimsha Naeem',
        author_designation: 'Frontend Developer',
    },
]

