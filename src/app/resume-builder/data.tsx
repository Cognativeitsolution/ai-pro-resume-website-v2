// ==========================
// import BannerImage from "media/resume_builder/resume-builder.gif";

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
import secImg1 from 'media/coverLetterBuilder/secImg1.webp';
import secImg1Inner from 'media/coverLetterBuilder/secImg1Inner.webp';

import secImg2 from 'media/coverLetterBuilder/secImg2.webp';
import secImg2Inner from 'media/coverLetterBuilder/secImg2Inner.webp';

import secImg3 from 'media/coverLetterBuilder/secImg3.webp';
import secImg3Inner1 from 'media/coverLetterBuilder/secImg3Inner1.webp';
import secImg3Inner2 from 'media/coverLetterBuilder/secImg3Inner2.webp';


import secImg4 from 'media/coverLetterBuilder/secImg4.webp';
import secImg4Inner1 from 'media/coverLetterBuilder/secImg4Inner1.webp';
import secImg4Inner2 from 'media/coverLetterBuilder/secImg4Inner2.webp';
import secImg4Inner3 from 'media/coverLetterBuilder/secImg4Inner3.webp';
// ==========================
import FeaturesImage1 from "media/resume_builder/check/contentimg-1.webp";
import FeaturesImage2 from "media/resume_builder/check/contentimg-2.webp";
import FeaturesImage3 from "media/resume_builder/check/contentimg-3.webp";
import FeaturesImage4 from "media/resume_builder/check/contentimg-4.webp";
import FeaturesImage5 from "media/resume_builder/check/contentimg-5.webp";
import FeaturesImage6 from "media/resume_builder/check/contentimg-6.webp";
import FeaturesImage7 from "media/resume_builder/check/contentimg-7.webp";
import FeaturesImage8 from "media/resume_builder/check/contentimg-8.webp";

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
    breadCrumbsData: "text-white",
    // bannerImg: BannerImage
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
const includedSections = [
    {
        title: "Fill in your details.",
        secImg: secImg1,
        PositionImg1: secImg1Inner,
    },
    {
        title: "Tailor to your needs.",
        secImg: secImg2,
        PositionImg1: secImg2Inner,
    },
    {
        title: "Customize your design.",
        secImg: secImg3,
        PositionImg1: secImg3Inner1,
        PositionImg2: secImg3Inner2,
    },
    {
        title: "Check for errors and download.",
        secImg: secImg4,
        PositionImg1: secImg4Inner1,
        PositionImg2: secImg4Inner2,
        PositionImg3: secImg4Inner3
    },
]
export const includedSecCoverLetter = {
    title: (
        <>
            Get a cover letter to be proud of!
        </>
    ),
    subTitle: "Included Sections",
    description: (
        <>
            Our system intelligently analyzes and categorizes key Cover Letter data—such as skills, experience, and achievements—giving you a <br className="hidden lg:block" /> detailed   and structured profile overview to help streamline hiring decisions.
        </>
    ),
    list: includedSections
}

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
    title: (<>Find the Perfect Resume Example for Your Field</>),
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
export const FeaturesData = [
    {
        isBuilder: true,
        title: "Flexible Drag & Drop Resume Builder",
        description: [
            "You’re not limited to a fixed layout. Rearrange sections easily to spotlight your strengths.",
            "Add, remove, or re-order sections like Work Experience, Skills, Education, and more.",
            "Customize your resume your way – no design skills needed.",
        ],
        builderImg: [
            {
                img: FeaturesImage1,
                className: "sm:absolute lg:top-[5%] sm:left-0 z-20 w-full sm:max-w-[70%]",
                isShadow: true,
            },
            {
                img: FeaturesImage2,
                className: "sm:absolute bottom-[0%] sm:bottom-[5%] sm:right-[5%] z-20 mx-auto max-w-[95%] sm:max-w-[70%]",
            },
        ],
    },
    {
        isBuilder: true,
        title: "Smart Content Suggestions to Guide Your Writing",
        description: [
            "Access over 10,000 bullet point suggestions by job title and experience level.",
            "Receive live prompts to refine weak or vague statements for a stronger impact.",
            "Turn generic phrases into achievement-driven results.",
        ],
        reverse: true,
        builderImg: [
            {
                img: FeaturesImage3,
                className: "sm:absolute top-[40%] right-0 z-20 w-full sm:max-w-[70%]",
            },
            {
                img: FeaturesImage4,
                className: "sm:absolute top-[25%] left-[20%] z-10 mx-auto max-w-[90%] sm:max-w-[70%]",
            },
        ],
    },
    {
        isBuilder: true,
        title: "Download Your Resume as PDF or TXT",
        description: [
            "Create a professional PDF resume that recruiters love with just one click.",
            "Export a plain text version for easy editing or job portal uploads.",
            "All formatting stays clean and consistent – no extra effort needed.",
        ],
        builderImg: [
            {
                img: FeaturesImage5,
                className: "absolute right-0 sm:right-[20%] lg:right-[30%] -top-[5%] sm:top-auto z-20 max-w-[250px] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[50%]",
            },
            {
                img: FeaturesImage6,
                className: "absolute top-[22%] sm:top-[25%] left-0 sm:left-[20%] lg:left-[10%] z-10 max-w-[250px] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[50%]",
            },
        ],
    },
    {
        isBuilder: true,
        title: "Import Your Old Resume or LinkedIn Profile",
        description: [
            "Save time by uploading your existing resume or linking your LinkedIn profile.",
            "We’ll automatically extract your experience, education, and skills into editable fields.",
            "Start building your new resume in seconds without starting from scratch.",
        ],
        reverse: true,
        builderImg: [
            {
                img: FeaturesImage7,
                className: "absolute top-0 right-0 sm:right-[20%] lg:right-[2%]  z-10 max-w-[250px] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[50%] ",
            },
            {
                img: FeaturesImage8,
                className: "absolute top-[50%] sm:top-[35%] lg:top-[40%] sm:left-[10%] lg:left-[20%] 2xl:left-[25%] z-20 max-w-[50%] max-w-[200px] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[50%] ",
            },
        ],
    },
];

// ==========================
const tabSectionList = [
    {
        id: 1,
        image: Template1,
        title: "Modern Resume",
        semiTitle: "Sleek",
    },
    {
        id: 2,
        image: Template2,
        title: "Classic Resume",
        semiTitle: "Timeless",
    },
    {
        id: 3,
        image: Template3,
        title: "Creative Resume",
        semiTitle: "Artistic",
    },
    {
        id: 4,
        image: Template4,
        title: "Modern Resume",
        semiTitle: "Bold Edition",
    },
    {
        id: 5,
        image: Template5,
        title: "Classic Resume",
        semiTitle: "Professional Touch",
    },
    {
        id: 6,
        image: Template6,
        title: "Creative Resume",
        semiTitle: "Stylish Layout",
    }
]
export const tabSectionData = {
    subTitle: "Examples",
    title: "Resume Examples for Inspiration",
    description: "Explore professionally designed resume examples to inspire your own. Whether you're starting out or advancing your career, these samples offer layouts and content ideas for various roles and industries.",
    list: tabSectionList
};

// ==========================
const faqsList = [
    {
        question: "What is the best format for cover letter 2025? ",
        answer:
            "In 2025, cover letters are likely to be modern with a professional format that emphasizes key skills and experiences. Of course, visual elements will come into play a bit more than in earlier formats, but clarity and readability above everything else. ",
    },
    {
        question: "What is the top rated cover letter format? ",
        answer:
            "The best generic cover letter format can be different for every person, but what is often most recommended is a reverse chronological format, which shows the work experience in descending order so that the employer can see the latest achievements more easily.  ",
    },
    {
        question: "What is the biodata format for 2025? ",
        answer:
            "The biodata format includes all the important personal info, professional experience related to the job applied for, educational background, skills, and achievements presented as concisely as possible. The biodata format should match the type of job being applied for and the specific career stage of the candidate. ",
    },
    {
        question: "What is the best cover letter format for 15 years experience?",
        answer:
            "For a candidate who has nearly 15 years of work experience, reverse chronological and combined cover letter formatting will be the best format for cover letter. This style of cover letter emphasizes skills and accomplishments, followed by a detailed work history, which allows more senior professionals to highlight their vast experience effectively. ",
    },
];

export const faqs = {
    title: "Frequently Asked Questions (FAQs) ",
    faqlist: faqsList
}

