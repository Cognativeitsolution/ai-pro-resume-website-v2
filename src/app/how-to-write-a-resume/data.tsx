// ======================
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';
import TemplateImage2 from 'media/resume_template_images/template_2.webp'
import TemplateImage3 from 'media/resume_template_images/template_3.webp'
import TemplateImage1 from 'media/resume_template_images/template_1.webp'

import CertificationsSec from 'media/images/CertificationsSec.webp'
import WorkExp from 'media/images/WorkExp.webp'
import EducationSec from 'media/images/EducationSec.webp'
import CareerObjective from 'media/images/CareerObjective.webp'
import ContactInfoSec from 'media/images/ContactInfoSec.webp'
import ProfessionalSummary from 'media/images/ProfessionalSummary.webp'
import SkillsSec from 'media/images/SkillsSec.webp'
import TipPro from 'media/images/TipPro.webp'

export const BannerData = {
    title: (
        <>
            Tips & Templates 2025
        </>
    ),
    subtitle: "Top Resume Formats:",
    description: (
        <>
            The three top resume formats for 2025 will help you grab employers' attention  <br className="hidden lg:block" />  and enrich your chances of securing your dream job.
        </>
    ),
};

const VerticalTabsData = [
    {
        id: 'head1',
        title: "How To Write A Good Resume in 2025?",
    },
    {
        id: 'head2',
        title: "This blog will include",
    },
    {
        id: 'head3',
        title: "How to Write a Resume: Step-By-Step Guide",
    },
    {
        id: 'head4',
        title: "How To Write A Good Resume: 6 Steps",
    },
    {
        id: 'head5',
        title: "Final Thoughts",
    },
    {
        id: 'head6',
        title: "Frequently Asked Questions (FAQs)",
    },
]

// const breadCrumbsItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Blog', href: '/blog' },
//     { label: 'Cover Letter Template' }
// ]

const prosItems = {
    icon: pros,
    title: "Pros",
    description: [`Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history.`],
    isPro: true,

}

const consItems = {
    icon: cons,
    title: "Cons",
    description: [`Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history.`],
    isPro: false,
}
export const BlogIncludedPoints = [
    { id: 1, point: 'How to Write a Resume: Step-By-Step Guide ' },
    { id: 2, point: 'Tips on how to write a good resume' },
    { id: 3, point: 'Examples of a job-winning resume' },
    { id: 4, point: 'An AI-powered tool to create a resume quickly' }
]
export const ResumeIncludedSixPoints = [
    { id: 1, point: 'Identifying your audience ' },
    { id: 2, point: 'Fetch important skills ' },
    { id: 3, point: 'Different Resume formats And Choosing the right one ' },
    { id: 4, point: 'Sections every resume must include ' },
    { id: 5, point: 'Writing tips for a winning resume ' },
    { id: 6, point: 'A quick word about the AI-powered resume builder ' }
]
export const LookInToKeyWords = [
    { id: 1, point: 'How to Write a Resume: Step-By-Step Guide', subHead: 'Action Verbs' },
    { id: 2, point: 'Tips on how to write a good resume', subHead: 'Keywords' },
    { id: 3, point: 'Examples of a job-winning resume', subHead: 'Core skills' },
    { id: 4, point: 'An AI-powered tool to create a resume quickly', subHead: 'Niche skills' }
]
export const LookInToTemplates = [
    { id: 1, title: "Chronological", templateImages: TemplateImage3 },
    { id: 2, title: "Functional", templateImages: TemplateImage2 },
    { id: 3, title: "Combination", templateImages: TemplateImage1 },

]
export const resumeFormatData = {
    // prosItemsData: prosItems,
    // consItemsData: consItems,
    // breadCrumbsItems: breadCrumbsItems,
    DynVerticalTabsData: VerticalTabsData,
}

export const LookInTo5Points = [
    { id: 1, point: 'Tailor your resume to make it fit for the job you are applying for', subHead: 'Positioning' },
    { id: 2, point: 'present your unique and memorable identity', subHead: 'Personal branding:' },
    { id: 3, point: 'a quick summary of what you want and offer.', subHead: 'Pitch:' },
    { id: 4, point: 'visual design and structure of your resume. It should be concise and clear.', subHead: 'Presentation:' },
    { id: 5, point: 'accurate information, as well as proofreading of the resume.', subHead: 'Professionalism:' }
]
const faqsList = [
    {
        question: "What is the best format for resume 2025? ",
        answer:
            "In 2025, resumes are likely to be modern with a professional format that emphasizes key skills and experiences. Of course, visual elements will come into play a bit more than in earlier formats, but clarity and readability above everything else. ",
    },
    {
        question: "What is the top rated resume format? ",
        answer:
            "The best generic resume format can be different for every person, but what is often most recommended is a reverse chronological format, which shows the work experience in descending order so that the employer can see the latest achievements more easily.  ",
    },
    {
        question: "What is the biodata format for 2025? ",
        answer:
            "The biodata format includes all the important personal info, professional experience related to the job applied for, educational background, skills, and achievements presented as concisely as possible. The biodata format should match the type of job being applied for and the specific career stage of the candidate. ",
    },
    {
        question: "What is the best resume format for 15 years experience?",
        answer:
            "For a candidate who has nearly 15 years of work experience, reverse chronological and combined resume formatting will be the best format for resume. This style of resume emphasizes skills and accomplishments, followed by a detailed work history, which allows more senior professionals to highlight their vast experience effectively. ",
    },
];

export const faqs = {
    title: "Frequently Asked Questions (FAQs) ",
    faqlist: faqsList
}
export const resumeIncludedSection = [
    {
        id: 1,
        title: "Contact Information",
        desc: "his is the simplest yet most crucial part of your resume. Make sure it's clear and easy to find.",
        includedFieldsRight: [
            {
                description: "What to Include:",
                list: [
                    "Full Name",
                    "Phone Number",
                    "Professional email address",
                    "LinkedIn profile (optional) "
                ],
                image: ContactInfoSec,

            }
        ],
    },
    {
        id: 2,
        title: "Professional Summary or Career Objective ",
        desc: "The second and most important element of a resume is a professional summary or career objective that goes right on top of your resume. It is short and direct and tells the recruiter in quick snippets. Thus, make sure it is creative and includes all the right characteristics of an appealing resume; let's talk about both separately, how it should be, and who it is best for: ",
        includedSections: [
            {
                id: 1,
                title: "Professional Summary",
                innerDesc: "This is a quick overview of your experience as well as your skills. It's excellent for experienced professionals who like to underline their accomplishments.",
                img: ProfessionalSummary,
            },
            {
                id: 2,
                title: "Career Objective",
                innerDesc: "If you're new to the workforce or switching careers, an objective statement can outline your goals and how you can contribute to the company.",
                img: CareerObjective,
            }
        ]
    },
    {
        id: 3,
        title: "Work Experience",
        desc: "The third most important section of a resume is obviously your work experience. This section should show your career progression and what you've achieved in each role. You can use bullet points to make the work experience clear and easy to read.",
        includedFieldsRight: [
            {
                description: "What to Include for Each Job:",
                image: WorkExp,
                list: [
                    "Job title",
                    "Employer name ",
                    "Employment dates",
                    "Key responsibilities and achievements"

                ]
            }
        ],
    },
    {
        id: 4,
        title: "Education",
        desc: "The 'Education' section of your resume is extremely important as it can be a great point to stand out from your competitors. It is important when you don't have much experience in the field, and it can work wonders for you when it comes to getting a job. Thus, you need to have your academic qualifications in reverse order, starting with the most recent degree or course.",
        includedFieldsRight: [
            {
                description: "What to Include:",
                image: EducationSec,
                list: [
                    "Degree",
                    "Institution name",
                    "Graduation year",
                ]
            }
        ],
        proTip: {
            icon: TipPro,
            title: "PRO TIP",
            description: [`If you're a recent graduate, you can also add relevant coursework or projects.`],
            isPro: true,
        }
    },
    {
        id: 5,
        title: "Skills",
        desc: "Another important section of your resume is the skills section. It is a quick way for the recruiter to know what you are capable of. This section can be a really good element if you don't have much work experience, are fresher, or are looking to switch your industry. The skills section is often divided into two categories, as you already know: ",
        includedSections: [
            {
                id: 1,
                title: "Hard Skills:",
                innerDesc: "Technical skills include data analysis, coding, or graphic design",
            },
            {
                id: 2,
                title: "Soft Skills:",
                innerDesc: "This category includes your interpersonal qualities like teamwork, problem-solving, and time management.",
                img: SkillsSec,

            }
        ],
        proTip: {
            icon: TipPro,
            title: "PRO TIP",
            description: [`Match your skills to the ones mentioned in the job description, as it can help the recruiter find your resume relevant. Plus, it can be a great way to pass the ATS system because it passes your resume by detecting relevant keywords and phrases from the job description.`],
            isPro: true,
        }

    },
    {
        id: 6,
        title: "Certifications and Awards",
        desc: "Sometimes, people don't consider adding or putting extra effort into putting their certificates or awards. However, it can be a great section and add value to your resume that a recruiter might find compelling, which can ultimately boost your chances of getting an interview.",
        img: TemplateImage1,
        includedFieldsRight: [
            {
                description: "What to Include:",
                image: CertificationsSec,
                list: [
                    "Certifications (e.g., Google Analytics, Certified Scrum Master)",
                    "Awards (e.g., 'Top Sales Performer 2022')",
                ]
            }
        ],
    },
]



export const HowToWriteResumeFormateTips = [
    {
        heading: "Keep It Relevant:",
        description: "Tailor your resume for each job application. Highlight experiences and skills that match the role.",
    },
    {
        heading: "Use Keywords:",
        description: `Many businesses employ applicant tracking systems (ATS) to scan resumes. Adding related keywords will help you pass this filter.`,
    },
    {
        heading: "Quantify Achievements:",
        description: `Numbers make your accomplishments more tangible and credible.`,
    },
    {
        heading: "Be Honest:",
        description: `Don't stretch or lie about your skills or experience.`,
    },
    {
        heading: "Proofread your resume:",
        description: `The most important thing after you are done making your resume is to check for grammar and spelling mistakes; otherwise, you might leave a bad impression on your employers.`,
    },
    {
        heading: "Add a cover letter:",
        description: `To give further details about your experience to help hiring managers understand how your skills align with the job role.`,
    }
]

export const HowToWriteResmTemplateData = [
    {
        heading: "Creative Infusion Template",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage1,
    },
    {
        heading: "Professional Polished Resume Template",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage2,
    },
    {
        heading: "Classic Professional",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage3,
    },
];

export const tipListItems = [
    { id: 1, point: 'Use professional fonts like Arial, Calibri, or Times New Roman', subHead: 'Font:' },
    { id: 2, point: 'TUse 10–12 points for body text and slightly larger for headings.', subHead: 'Font Size:' },
    { id: 3, point: 'Keep plenty of white space to make it easy to read.', subHead: 'Spacing:' },
    { id: 4, point: 'Use these for lists to improve clarity', subHead: 'Bullet Points:' }
]
export const consListItems = [
    { id: 1, point: 'Double-check everything, especially contact details.', subHead: 'Spelling Errors:' },
    { id: 2, point: 'Stick to 1–2 pages', subHead: 'Too Much Information:' },
    { id: 3, point: 'Ensure everything aligns neatly and looks polished.', subHead: 'Unprofessional Formatting:' },
    { id: 4, point: 'Avoid personal information like your age, photo, or hobbies unless requested.', subHead: 'Irrelevant Details:' }
]
