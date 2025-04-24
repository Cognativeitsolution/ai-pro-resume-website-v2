// ======================
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';
import TemplateImage2 from 'media/resume_template_images/template_2.webp'
import TemplateImage3 from 'media/resume_template_images/template_3.webp'
import TemplateImage1 from 'media/resume_template_images/template_1.webp'

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
        title: "Some Professional Resume Examples For You To Check Out",
    },
    {
        id: 'head6',
        title: "Final Thoughts",
    },
    {
        id: 'head7',
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
    { id: 4, point: 'An AI-powered tool to create a resume quickly' },
    { id: 14, point: 'How to Write a Resume: Step-By-Step Guide' },
    { id: 24, point: 'Tips on how to write a good resume' }
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
        img: TemplateImage1,
        includedFieldsRight: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: TemplateImage1,
                list: [
                    "Full Name",
                    "Phone Number",
                    "Professional email address",
                    "LinkedIn profile (optional) "
                ]
            }
        ],
    },
    {
        id: 2,
        title: "Professional Summary or Career Objective ",
        desc: "The second and most important element of a resume is a professional summary or career objective that goes right on top of your resume. It is short and direct and tells the recruiter in quick snippets. Thus, make sure it is creative and includes all the right characteristics of an appealing resume; let's talk about both separately, how it should be, and who it is best for: ",
        img: TemplateImage1,
        includedSections: [
            {
                id: 1,
                title: "Professional Summary",
                innerDesc: "This is a quick overview of your experience as well as your skills. It's excellent for experienced professionals who like to underline their accomplishments.",
                img: TemplateImage1,
            },
            {
                id: 2,
                title: "Career Objective",
                innerDesc: "If you're new to the workforce or switching careers, an objective statement can outline your goals and how you can contribute to the company.",
                img: TemplateImage1,
            }
        ]
    },
    {
        id: 3,
        title: "Work Experience",
        desc: "The third most important section of a resume is obviously your work experience. This section should show your career progression and what you've achieved in each role. You can use bullet points to make the work experience clear and easy to read.",
        img: TemplateImage1,

        includedFieldsRight: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: TemplateImage1,
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
        img: TemplateImage1,
        includedFieldsRight: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: TemplateImage1,
                list: [
                    "Degree",
                    "Institution name",
                    "Graduation year",
                ]
            }
        ],
        proTip: true,
    },
    {
        id: 5,
        title: "Skills",
        desc: "Another important section of your resume is the skills section. It is a quick way for the recruiter to know what you are capable of. This section can be a really good element if you don't have much work experience, are fresher, or are looking to switch your industry. The skills section is often divided into two categories, as you already know: ",
        img: TemplateImage1,
        hardSoftSkills: [
            {
                id: 1,
                title: "Hard Skills:",
            },
            {
                id: 2,
                title: "Soft Skills:",
                // skillImg: TemplateImage1,
            }
        ],
        proTip: true,
    },
    {
        id: 6,
        title: "Certifications and Awards",
        desc: "Sometimes, people don't consider adding or putting extra effort into putting their certificates or awards. However, it can be a great section and add value to your resume that a recruiter might find compelling, which can ultimately boost your chances of getting an interview.",
        img: TemplateImage1,
        includedFieldsRight: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: TemplateImage1,
                list: [
                    "Certifications (e.g., Google Analytics, Certified Scrum Master)",
                    "Awards (e.g., 'Top Sales Performer 2022')",
                ]
            }
        ],
        proTip: true,
    },
]


