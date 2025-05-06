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
import image1 from "media/privacyPolicy/image-1.webp";
import image2 from "media/privacyPolicy/image-2.webp";
import image3 from "media/privacyPolicy/image-3.webp";
import image4 from "media/privacyPolicy/image-4.webp";
import image5 from "media/privacyPolicy/image-5.webp";
import image6 from "media/privacyPolicy/image-6.webp";
import image7 from "media/privacyPolicy/image-7.webp";
import image8 from "media/privacyPolicy/image-8.webp";
import image9 from "media/privacyPolicy/image-9.webp";


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


export const FeaturesData = [
    {
        isBuilder: true,
        title: "Professional Resume Templates for Every Career",
        description: [
            "Choose from 11 fully customizable templates tailored by industry, seniority level, and company culture.",
            "Stand out with sleek, modern, or classic designs suited to your job search."
        ],
        reverse: true,
        builderImg: [
            {
                img: image3,
            },
            {
                img: image4,
            },
        ]
    },
    {
        isBuilder: true,
        title: "Flexible Drag & Drop Resume Builder",
        description: [
            "You’re not limited to a fixed layout. Rearrange sections easily to spotlight your strengths.",
            "Add, remove, or re-order sections like Work Experience, Skills, Education, and more.",
            "Customize your resume your way – no design skills needed."
        ],
        builderImg: [
            {
                img: image1,
            },
            {
                img: image2,
            }
        ]
    },
    {
        isBuilder: true,
        title: "Smart Content Suggestions to Guide Your Writing",
        description: [
            "Access over 10,000 bullet point suggestions by job title and experience level.",
            "Receive live prompts to refine weak or vague statements for a stronger impact.",
            "Turn generic phrases into achievement-driven results."
        ],
        reverse: true,
        builderImg: [
            {
                img: image5,
            },
            {
                img: image6,
            }
        ]
    },
    {
        isBuilder: true,
        title: "Download Your Resume as PDF or TXT",
        description: [
            "Create a professional PDF resume that recruiters love with just one click.",
            "Export a plain text version for easy editing or job portal uploads.",
            "All formatting stays clean and consistent – no extra effort needed."
        ],
        builderImg: [
            {
                img: image3,
            },
            {
                img: image4,
            },
        ]
    },
    {
        isBuilder: true,
        title: "Import Your Old Resume or LinkedIn Profile",
        description: [
            "Save time by uploading your existing resume or linking your LinkedIn profile.",
            "We’ll automatically extract your experience, education, and skills into editable fields.",
            "Start building your new resume in seconds without starting from scratch."
        ],
        reverse: true,
        builderImg: [
            {
                img: image1,
            },
            {
                img: image2,
            }
        ]
    },
    {
        isBuilder: true,
        title: "One-Click Job Targeting",
        description: [
            "Tailor your resume to specific job descriptions with intelligent keyword highlighting.",
            "Match industry-relevant phrases to get through Applicant Tracking Systems (ATS)."
        ],
        builderImg: [
            {
                img: image5,
            },
            {
                img: image6,
            }
        ]
    },
    {
        isBuilder: true,
        title: "Built-In Spell Checker and Formatting Assistant",
        description: [
            "Avoid typos and formatting mistakes with our real-time spell check.",
            "Stay focused with clear alerts and formatting guidance as you type."
        ],
        reverse: true,
        builderImg: [
            {
                img: image3,
            },
            {
                img: image4,
            },
        ]
    }

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

