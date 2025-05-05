// ==========================
import Template1 from "media/resume_template_images/template_1.webp";
import Template2 from "media/resume_template_images/template_2.webp";
import Template3 from "media/resume_template_images/template_3.webp";
import Template4 from "media/resume_template_images/template_4.webp";
import Template5 from "media/resume_template_images/template_5.webp";
import Template6 from "media/resume_template_images/template_6.webp";
// ==========================
import Skills from "media/resume_parser/skills.webp";
import Experience from "media/resume_parser/experience.webp";
import Achievements from "media/resume_parser/archievements.webp";
import Location from "media/resume_parser/location.webp";
import Education from "media/resume_parser/employment.webp";
import Contacts from "media/resume_parser/alignment.webp";
import Language from "media/resume_parser/language.webp";
import Certifications from "media/resume_parser/certification.webp";
// ==========================

export const BannerData = {
    title: (
        <>
            Build Your Perfect Standout
            <br className="hidden lg:block" /> Resume Online
        </>
    ),
    // subtitle: "About us",
    description: "Create a modern, memorable resume that showcases your skills, achievements, and personality. AiPro Resume makes it easy and free to design a resume that gets noticed!",
    breadCrumbsData: "text-white"
};

// ==========================
const ParserFeatureList = [
    {
        icon: Skills,
        title: "Skills",
        description:
            "Identifies and classifies technical, soft, and industry-specific skills to create a complete skills profile.",
    },
    {
        icon: Experience,
        title: "Experience",
        description:
            "Calculates total professional experience by analyzing job titles, durations, and career progression.",
    },
    {
        icon: Achievements,
        title: "Achievements",
        description:
            "Highlights key milestones and contributions from your career to showcase impact and success.",
    },
    {
        icon: Location,
        title: "Location",
        description:
            "Detects your current or preferred work location to assist with talent mapping and relocation analysis.",
    },
    {
        icon: Education,
        title: "Education",
        description:
            "Summarizes educational background, degrees, institutions, and academic achievements for a complete academic overview.",
    },
    {
        icon: Contacts,
        title: "Contacts",
        description:
            "Collects essential contact details like email, phone, and LinkedIn to enable easy communication.",
    },
    {
        icon: Language,
        title: "Language Proficiency",
        description:
            "Lists language skills and rates your proficiency level in each for accurate representation.",
    },
    {
        icon: Certifications,
        title: "Certifications",
        description:
            "Identifies professional certifications and training to highlight continuous learning and development.",
    },

];

export const ParserFeatureData = {
    title: (
        <>
            Say Hello to Effortless Resume Upload
        </>
    ),
    subTitle: "Features",
    description: (
        <>
            Our system intelligently analyzes and categorizes key resume data—such as skills, experience, and achievements—giving you a <br className="hidden lg:block" /> detailed   and structured profile overview to help streamline hiring decisions.

        </>
    ),
    list: ParserFeatureList
};

// ==========================
const findResumeTemplates = [
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
    { id: 1, image: Template4, is_paid: 0 },
    { id: 2, image: Template5, is_paid: 1 },
    { id: 3, image: Template6, is_paid: 0 },
]

export const findResumeData = {
    subTitle: "Templates",
    title: "Find the Perfect Resume Example for Your Field",
    description: `To save you time and effort, we have introduced creative resume
    examples. These great resume examples are pre-written. You just have
    to click on them and add minor details to make your resume more
    personalized.`,
    templateList: findResumeTemplates,
    fullWidth: true,
    descriptionBottom: [
        `Our resume builder is crafted with one goal in mind — to help you walk into your next job interview feeling confident . With professionally designed layouts and customizable sections, our tool lets you create a resume that reflects your true self — your mindset, personality, and professional strengths`,
        (
            <>
                <p>But we go beyond the basics. With <span className=" text-hamzaPrimary font-medium">AI Pro Resume</span>, you’re encouraged to explore more than just your education and work history. Our smart builder helps you showcase your passions, values, and what truly drives you, giving employers a complete picture of who you are.</p>
            </>
        ),
        `Not sure which style fits you best? Browse our collection of modern templates and find the one that tells your story best. `,
    ]
}

// ==========================
// export const FeaturesData = [
//     {
//         // image: aboutVideo,
//         video: "https://ik.imagekit.io/matrz1mbp/AI%20PRO%200001%20-%20Made%20with%20Clipchamp%20(1)%20(1).mp4?updatedAt=1718177027956",
//         title: "Our Story",
//         description:
//             "AI Pro Resume started with a single aim: to make global job search easier for everyone. We understand that getting noticed can be tough due to excessive competition. Therefore, we developed a platform that caters to all your requirements and permits you to find your desired jobs easily. As a smart resume builder, our core mission is to combine AI technology with creative features that save time and make your professional profile incredible. Our focus is not just creating an ATS-friendly resume builder platform; we want to empower job seekers with professional resumes and cover letters that truly represent them and help them get the job they deserve. Join us for a successful career journey. ",
//         buttonText: "Create Resume",
//     },
//     {
//         image: aboutCounter,
//         title: "What we offer﻿",
//         description:
//             "We provide everything you need to stand out in the job market. Our certified resume writers make your application process smooth and stress-free. With our best AI job application tool, you can generate your ideal resumes and cover letters in seconds. If you are not in the mood to create a resume or cover letter manually, let our experts help you. AI Pro Resume is your AI resume assistant that offers captivating templates that easily pass ATS scanners. You can use our resume parser, which accurately fetches your data to reduce your manual efforts. With us, you can customize your resume and cover letter template smoothly. ",
//         buttonText: "Create Resume",
//         reverse: true
//     },

// ];

// ==========================
// const CounterList = [
//     {
//         icon: aboutCounter1.src,
//         count: "2359+",
//         label: "Resumes Made",
//     },
//     {
//         icon: aboutCounter2.src,
//         count: "471+",
//         label: "Cover Letters Created",
//     },
//     {
//         icon: aboutCounter3.src,
//         count: "15+",
//         label: "AI FEATURES",
//     },
// ];

// export const CounterData = {
//     title: "Start your journey toward your dream job with AI Pro Resume.",
//     description: (
//         <>
//             We help you create customized, ATS-friendly resumes that stand out to recruiters. we have already assisted millions of job hunters in landing <br className="hidden xl:block" /> their perfect jobs. Become a successful professional with the smart resume builder today.
//         </>
//     ),
//     counterlist: CounterList
// }

// ==========================
// const stepperList = [
//     {
//         title: "Our Mission",
//         description:
//             "Our mission is your empowerment, a dynamic partnership extending beyond a typical service. With us, it's about more than templates; it's about a collaborative journey. We're here to enlighten your skills, unfold your story, and place your aspirations center stage.",
//     },
//     {
//         title: "Our Vision",
//         description:
//             "Our vision is to be the bundle of innovation in the world of professional development. In our vision, inclusivity is key. AI resume builder pictures a landscape where cutting-edge technology seamlessly integrates with individual stories, making personalized career services accessible to all. AI Pro Resume is not merely a tool; it's a vibrant community encouraging innovation, authenticity, and adaptability.",
//     },
//     {
//         title: "Our Process",
//         description:
//             "Transform your professional journey with AI Pro Resume. Kick start your professional journey by engaging with our user-friendly interface that welcomes you to AI-driven career elevation, where you make a resume by inputting your details to create your unique narrative. Our advanced AI algorithms then analyze this information, crafting a professional masterpiece that authentically represents your skills and experiences.",
//     },
// ];

// export const StepperData = {
//     title: "Our Goal",
//     description: (
//         <>
//             We have seen fresh graduates struggle to create their Resumes and fail to pass the initial screening tests due to poorly made CVs. Thus, AI Pro Resume aims to provide you with recruiter-approved resumes so you can land the job you have been dreaming of. We have also been working hard to improve and explore creative ways to help you get the best features for creating your resumes.
//         </>
//     ),
//     stepperList: stepperList

// }

// ==========================
// export const ClientData = {
//     title: "Our Valuable Clients",
//     description: (
//         <>
//             Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
//         </>
//     ),
// }

