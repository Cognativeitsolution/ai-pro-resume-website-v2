// ======================
import TipPro from 'media/images/TipPro.webp'
import TipProComma from 'media/images/commaIcoon.webp'
import TemlateImage from "media/cover_template_images/template_23.webp"
import TemplateImage2 from 'media/cover_template_images/template_2.webp'
import TemplateImage3 from 'media/cover_template_images/template_3.webp'
import TemplateImage1 from 'media/cover_template_images/template_1.webp'

import CertificationsSec from 'media/images/CertificationsSec.webp'
import WorkExp from 'media/images/WorkExp.webp'
import EducationSec from 'media/images/EducationSec.webp'
import CareerObjective from 'media/images/CareerObjective.webp'
import ContactInfoSec from 'media/images/ContactInfoSec.webp'
import ProfessionalSummary from 'media/images/ProfessionalSummary.webp'
import SkillsSec from 'media/images/SkillsSec.webp'


export const BannerData = {
    title: (
        <>
            Tips & Templates 2025
        </>
    ),
    subtitle: "Top Cover Letter Formats:",
    description: (
        <>
            The three top cover letter formats for 2025 will help you grab employers' attention  <br className="hidden lg:block" />  and enrich your chances of securing your dream job.
        </>
    ),
};

const VerticalTabsData = [
    {
        id: 'head1',
        title: "How To Write A Good Cover Letter in 2025?",
    },
    {
        id: 'head2',
        title: "This blog will include",
    },
    {
        id: 'head3',
        title: "How to Write a Cover Letter: Step-By-Step Guide",
    },
    {
        id: 'head4',
        title: "How To Write A Good Cover Letter: 6 Steps",
    },
    {
        id: 'head5',
        title: "Final Thoughts",
    },
]

const TopSectionData = {
    heading: "How To Write A Good Cover Letter in 2025?",
    description: [
        "There are plenty of guides on how to write a cover letter online, but not all of them guarantee that your cover letter will make it to the second interview or even get any attention from the recruiter. But how can you figure out the best cover letter layouts to build your own?",
        "But you must be wondering which cover letter would work the best for you? In this guide, we will assist you in deciding the best generic cover letter format so you can have a roadmap to write your cover letter further"],
    description2: "So, to cater to that, we have brought you this straightforward guide with plenty of cover letter expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.",
    titlePro: "PRO TIP",
    descriptionPro: [" Selecting the correct cover letter formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start."],
    iconPro: TipPro,
    isTip: true
}

const FormatPointsList = [
    { id: 1, point: 'How to Write a Cover Letter: Step-By-Step Guide ' },
    { id: 2, point: 'Tips on how to write a good cover letter' },
    { id: 3, point: 'Examples of a job-winning cover letter' },
    { id: 4, point: 'An AI-powered tool to create a cover letter quickly' }
]

const FormatPointsData = {
    heading: "This blog will include",
    titlePro: "Speed up your cover letter creation!",
    descriptionPro: [" Our AI-powered cover letter builder is super fast with cover letter creation. It has more than 30+ cover letter templates and professional & free cover letter formats that you can quickly customize based on your industry."],
    iconPro: TipProComma,
    isTip: true,
    list: FormatPointsList
}

const StepGuideData = {
    heading: "How to Write a Cover Letter: Step-By-Step Guide",
    description: [
        "We have divided the cover letter creation process into steps to help you easily understand the process of creating a perfect cover letter without missing any important details that can lead to rejection.",
        "We have divided the cover letter creation process into steps to help you easily understand the process of creating a perfect cover letter without missing any important details that can lead to rejection.",
        "Also, this is how a flawless cover letter looks like:"],
    image: TemlateImage,
    list: [
        "Wording and readability analysis",
        "Eliminate typos and grammatical errors",
        "Content suggestions based on your job and experience",
        "Eliminate typos and grammatical errors",
        "Content suggestions based on your job and experience",
    ]
}

const LookInToKeyWords = [
    { id: 1, point: 'How to Write a Cover Letter: Step-By-Step Guide', subHead: 'Action Verbs' },
    { id: 2, point: 'Tips on how to write a good cover letter', subHead: 'Keywords' },
    { id: 3, point: 'Examples of a job-winning cover letter', subHead: 'Core skills' },
    { id: 4, point: 'An AI-powered tool to create a cover letter quickly', subHead: 'Niche skills' }
]

const LookInToTemplates = [
    { id: 1, title: "Chronological", templateImages: TemplateImage3 },
    { id: 2, title: "Functional", templateImages: TemplateImage2 },
    { id: 3, title: "Combination", templateImages: TemplateImage1 },

]

const IncludedSection = [
    {
        id: 1,
        title: "Contact Information",
        desc: "his is the simplest yet most crucial part of your cover letter. Make sure it's clear and easy to find.",
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
        desc: "The second and most important element of a cover letter is a professional summary or career objective that goes right on top of your cover letter. It is short and direct and tells the recruiter in quick snippets. Thus, make sure it is creative and includes all the right characteristics of an appealing cover letter; let's talk about both separately, how it should be, and who it is best for: ",
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
        desc: "The third most important section of a cover letter is obviously your work experience. This section should show your career progression and what you've achieved in each role. You can use bullet points to make the work experience clear and easy to read.",
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
        desc: "The 'Education' section of your cover letter is extremely important as it can be a great point to stand out from your competitors. It is important when you don't have much experience in the field, and it can work wonders for you when it comes to getting a job. Thus, you need to have your academic qualifications in reverse order, starting with the most recent degree or course.",
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
        desc: "Another important section of your cover letter is the skills section. It is a quick way for the recruiter to know what you are capable of. This section can be a really good element if you don't have much work experience, are fresher, or are looking to switch your industry. The skills section is often divided into two categories, as you already know: ",
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
            description: [`Match your skills to the ones mentioned in the job description, as it can help the recruiter find your cover letter relevant. Plus, it can be a great way to pass the ATS system because it passes your cover letter by detecting relevant keywords and phrases from the job description.`],
            isPro: true,
        }

    },
    {
        id: 6,
        title: "Certifications and Awards",
        desc: "Sometimes, people don't consider adding or putting extra effort into putting their certificates or awards. However, it can be a great section and add value to your cover letter that a recruiter might find compelling, which can ultimately boost your chances of getting an interview.",
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

const HowToWriteFormateTips = [
    {
        heading: "Keep It Relevant:",
        description: "Tailor your cover letter for each job application. Highlight experiences and skills that match the role.",
    },
    {
        heading: "Use Keywords:",
        description: `Many businesses employ applicant tracking systems (ATS) to scan cover letters. Adding related keywords will help you pass this filter.`,
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
        heading: "Proofread your cover letter:",
        description: `The most important thing after you are done making your cover letter is to check for grammar and spelling mistakes; otherwise, you might leave a bad impression on your employers.`,
    },
    {
        heading: "Add a cover letter:",
        description: `To give further details about your experience to help hiring managers understand how your skills align with the job role.`,
    }
]

const TemplateData = [
    {
        heading: "Creative Infusion Template",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage1,
    },
    {
        heading: "Professional Polished Cover Letter Template",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage2,
    },
    {
        heading: "Classic Professional",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: TemplateImage3,
    },
];

const SixStepDetailData = [
    {
        id: 1,
        title: "Identifying Your Audience",
        paragraphs: [
            "The first step is identifying your audience—the people and technologies that will read your cover letter.",
            "Your primary audience will probably be an Applicant Tracking System (ATS). ATS is a system that scans a candidate's cover letter and qualifies it for the second screening by the second audience. This human recruiter will review your application and decide whether to contact you for the interview.",
        ],
    },
    {
        id: 2,
        title: "Fetch Important Skills & Keywords",
        paragraphs: [
            "After establishing your first audience, the next step is finding the best way to pass the ATS and recruiter review. To do so, you need to understand how ATS works. ATS is like a human recruiter, but an electronic one. It manages the hiring process electronically and ranks the best cover letters by scanning for relevant keywords and skills mentioned in your cover letter that resonate with the job description.",
            "These are some of the best ways to find and use relevant keywords in your cover letter.",
        ],
        subheading: "You need to look for keywords such as",
        keywordList: LookInToKeyWords,
    },
    {
        id: 3,
        title: "Different Cover Letter Formats And Choosing The Right One",
        paragraphs: [
            "Before diving into the details, the very first part of the cover letter building is to decide which of the best cover letter layouts to opt for. There are three kinds of best cover letter formats that you can choose from. All three focus on different sections of a cover letter based on various situations.",
        ],
        subheading: "You need to look for keywords such as",
        templateCards: [
            { id: 1, title: "Chronological", templateImages: TemplateImage3 },
            { id: 2, title: "Functional", templateImages: TemplateImage2 },
            { id: 3, title: "Combination", templateImages: TemplateImage1 },

        ],
        proTips: [
            {
                paragraphs2: "Despite all three best cover letter layouts, reverse chronological is the most common format, and most recruiters prefer it. It lists your most recent job at the top and works backward, which is why most recruiters prefer it. It is also best for ATS because it makes it easy for the system to parse and show the progress in your career.",
                proTitle: "PRO TIP",
                proIcon: TipPro,
                proDescription: "This best layout for cover letter is perfect for people with consultant work history or professionals looking to show career growth.",
                isTip: true,
            },
            {
                paragraphs: "Here is what a reverse chronological cover letter format looks like:",
                image: TemlateImage,
                proTitle: "PRO TIP",
                proIcon: TipPro,
                proDescription: "On the other hand, a functional format will work best for individuals who recently graduated with a significant career break and want to focus more on skills rather than work experience.",
                isTip: true,
                paragraphs2: "However, the reverse chronological form is the most common one, which doesn't mean the other 2 formats are insignificant. If you are someone who explores different careers constantly and has a diverse work history, a combination will work the best for the candidate, as it will put equal focus on the varied and transferable skills that they gained from various job experiences.",
            },
        ],

        reverseChronoExample: TemlateImage,
    },
    {
        id: 4,
        title: "Sections Every Cover Letter Must Include",
        paragraphs: ["Regardless of the perfect cover letter format you choose, there are some sections every cover letter should have. Let's break them down one by one:"],
        IncludedSection: IncludedSection,
    },
    {
        id: 5,
        title: "Writing Tips for a Winning Cover Letter",
        tips: HowToWriteFormateTips,
        bottomTip: {
            proTitle: "How to craft a job-winning cover letter?",
            proIcon: TipProComma,
            proDescription: "Use AI Pro Cover Letter, which offers plenty of the best cover letter examples from which to take inspiration and start crafting yours.",
            isTip: true,
        },
    },
    {
        id: 6,
        title: "A Quick Word About Our AI-Powered Cover Letter Builder",
        paragraphs: [
            "If designing and formatting and learning how to write a cover letter for a job from scratch...",
            "The following are some of the best cover letters built on a robust tool...",
        ],
        resumeExamples: {
            title: "Some Professional Cover Letter Examples For You To Check Out",
            description: "The following are some of the best cover letters built on a robust tool, AI Pro Cover Letter, that offers ATS-friendly templates with the option of AI suggestions, cover letter examples​, and plenty of customization.",
            list: TemplateData
        },
        // cover letterExamples: HowToWriteResmTemplateData,
        bottomTip: {
            proTitle: "Pro Tip",
            proIcon: TipPro,
            proDescription: "To build your cover letter in these or similar templates, head towards AI Pro Cover Letter and boost your chances of getting your much-awaited job opportunity.",
            isTip: true,
        },
    },
]

const sixStepList = [
    { id: 1, point: 'Identifying your audience ' },
    { id: 2, point: 'Fetch important skills ' },
    { id: 3, point: 'Different Cover Letter formats And Choosing the right one ' },
    { id: 4, point: 'Sections every cover letter must include ' },
    { id: 5, point: 'Writing tips for a winning cover letter ' },
    { id: 6, point: 'A quick word about the AI-powered cover letter builder ' }
]

const SixStepData = {
    heading: " How To Write A Good Cover Letter: 6 Steps",
    description: "Before diving into each step individually on how to write a cover letter, we are listing down all the steps for an overview, so that you know what we are going to learn later in the guide:",
    // steptitle: "6 Steps",
    list: sixStepList,
    sixStepDetail: SixStepDetailData
}

const BottomSectionData = {
    heading: "Final Thoughts",
    description: [
        "It's not enough to simply state your qualifications in a well-organized format; a great cover letter tells a story of your achievements and prospects. With this detailed guide, you should have the tools and knowledge to create a great working cover letter.",
        "After all, your cover letter is your very first step towards getting your dream job. So, you better invest your time in it, pursue the steps mentioned in the blog on how to write a cover letter to get a job, along with that, use a professional cover letter template, and let your personality, experience, and skills do the talking."
    ],
}

export const FormatData = {
    DynVerticalTabs: VerticalTabsData,
    TopSection: TopSectionData,
    FormatPoints: FormatPointsData,
    StepGuide: StepGuideData,
    SixStep: SixStepData,
    BottomSection: BottomSectionData
}

const faqTip = [
    { id: 1, point: 'Use professional fonts like Arial, Calibri, or Times New Roman', subHead: 'Font:' },
    { id: 2, point: 'TUse 10–12 points for body text and slightly larger for headings.', subHead: 'Font Size:' },
    { id: 3, point: 'Keep plenty of white space to make it easy to read.', subHead: 'Spacing:' },
    { id: 4, point: 'Use these for lists to improve clarity', subHead: 'Bullet Points:' }
]

const faqsCons = [
    { id: 1, point: 'Double-check everything, especially contact details.', subHead: 'Spelling Errors:' },
    { id: 2, point: 'Stick to 1–2 pages', subHead: 'Too Much Information:' },
    { id: 3, point: 'Ensure everything aligns neatly and looks polished.', subHead: 'Unprofessional Formatting:' },
    { id: 4, point: 'Avoid personal information like your age, photo, or hobbies unless requested.', subHead: 'Irrelevant Details:' }
]

const faqsPoints = [
    { id: 1, point: 'Tailor your cover letter to make it fit for the job you are applying for', subHead: 'Positioning' },
    { id: 2, point: 'present your unique and memorable identity', subHead: 'Personal branding:' },
    { id: 3, point: 'a quick summary of what you want and offer.', subHead: 'Pitch:' },
    { id: 4, point: 'visual design and structure of your cover letter. It should be concise and clear.', subHead: 'Presentation:' },
    { id: 5, point: 'accurate information, as well as proofreading of the cover letter.', subHead: 'Professionalism:' }
]

const faqsList = [
    {
        question: "How to format a cover letter that stands out? ",
        answer:
            "A visually appealing cover letter grabs attention. However, don't go overboard with fancy fonts or colors.",
        // titlePro: "Here are some design tips",
        // listPro: faqTip,
        // iconPro: TipPro,
        // isTip: true
    },
    {
        question: "What are the common cover letter mistakes to avoid? ",
        answer: "here are some common mistakes that you should avoid",
        // titlePro: "Here are some design tips",
        // listPro: faqsCons,
        // iconPro: TipPro,
    },
    {
        question: "What are the 5 P's of a cover letter? ",
        answer: "The 5 P’s of a cover letter that highlight the important elements of a cover letter are as follows:",
        pointsHeading: "5 P's of a cover letter",
        points: faqsPoints
    },
];

export const faqs = {
    title: "Frequently Asked Questions (FAQs) ",
    faqlist: faqsList,
}