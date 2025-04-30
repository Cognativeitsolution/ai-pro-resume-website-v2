import Skills from "media/resume_parser/skills.webp";
import Experience from "media/resume_parser/experience.webp";
import Achievements from "media/resume_parser/archievements.webp";
import Location from "media/resume_parser/location.webp";
import Education from "media/resume_parser/employment.webp";
import Contacts from "media/resume_parser/alignment.webp";
import Language from "media/resume_parser/language.webp";
import Certifications from "media/resume_parser/certification.webp";
import Screening from "media/resume_parser/screening.webp";
import DataBase from "media/resume_parser/database.webp";

export const BannerData = {
    title: (
        <>
            Say Hello to Effortless Resume Upload
        </>
    ),
    subtitle: "Upload. Relax. Let AI handle the rest.",
    description: (
        <>
            With AI Pro Resume, uploading your resume is just the beginning. Our advanced parser instantly pulls out your key info and places it perfectly—saving you time and effort while giving your resume a professional edge.
        </>
    ),
};

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


const ParserGoalList = [
    {
        icon: Screening,
        title: (
            <>
                Reduce Time on <br className="hidden lg:block" /> Manual Work
            </>
        ),
        description:
            "Automate the extraction and structuring of candidate data to eliminate tedious manual entry. Let your team focus on strategic hiring while AI handles the heavy lifting—saving hours per week.",
    },
    {
        icon: DataBase,
        title: (
            <>
                Candidate Database <br className="hidden lg:block" /> Enrichment
            </>
        ),
        description:
            "Automatically build detailed, up-to-date candidate profiles with every resume upload. Keep your talent pool rich, organized, and ready for future hiring needs without the extra effort.",
    },

];


export const ParserGoalData = {
    title: (
        <>
            Driven by Purpose, Designed for Impact
        </>
    ),
    subTitle: "Our Goals",
    description: (
        <>
            Our mission is simple: to simplify recruitment through smart automation. We help you spend less time on admin tasks  and  more  <br className="hidden lg:block" />  time building connections with the right talent—quickly, efficiently, and with confidence.
        </>
    ),
    list: ParserGoalList
};

// const ParserGoalList = [

// ]

export const ParserContentData = {
    title: (
        <>
            Smart Resume Data Extraction Made Easy
        </>
    ),
    subTitle: "What is?",
    description: (
        <>
            A resume parser automatically pulls out key details from resumes—like skills, experience, and education—so recruiters can review <br className="hidden lg:block" /> candidates faster and more efficiently.
        </>
    ),
    // tabs: tabsList
};

