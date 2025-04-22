// ======================
import Temp1 from 'media/resume_template_images/Template_16.webp'
import Temp3 from 'media/resume_template_images/Template_18.webp'
import Temp5 from 'media/resume_template_images/template_8.webp'
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';


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
        id: 'head0',
        title: "3 Most Popular Resume Formats",
    },
    {
        id: 'head1',
        title: "Reverse-Chronological Resume Format ",
    },
    {
        id: 'head2',
        title: "Functional Resume Format s",
    },
    {
        id: 'head3',
        title: "Combination Resume Format",
    },
    {
        id: 'head4',
        title: "3 Most Popular Resume Formats",
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
    description: [
        "With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
        "With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
        "With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
        "With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
    ],
    // description: `Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history.`,
}

const consItems = {
    icon: cons,
    title: "Cons",
    description: [
        `With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  `,
        `Job seekers entering a completely new industry can take advantage of this generic resume format as it will assist them in shedding light on the relevant skills and experience from their past work. `,
        `If you've had a diverse career path or have crucial gaps in your employment, this format can help downplay those and divert employers' attention toward your actual capabilities.`,
        `You can customize the skills section to focus on the abilities most relevant to the target job, increasing your chances of getting noticed.`,
        `The work history section provides context and concrete examples of how you've used your skills in previous roles.`,

    ],

}

const CollapseTabData = [
    {
        heading: "Reverse-Chronological Resume Forma",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        image: Temp5,
        list: [
            "Candidates who have a steady working history and have not taken any long breaks  ",
            "Job seekers with a consistent and progressive work history, particularly those in traditional careers where experience is valued, such as managerial-level skills or a specialist in a particular field.  ",
            "This perfect format emphasizes your work experiences, which is perfect for candidates who want to progress to a higher-level position.",
            "This format is best for ATS. The chronological resume format is friendly with ATS software, which can help you in getting your resume selected for a second screening. ",
        ]
    },
    {
        heading: "Functional Resume Forma",
        description: "This format shows your skills rather than your previous working experience and qualifications. It focuses on your abilities rather than your career background. ",
        image: Temp3,
        list: [
            "Candidates who have a steady working history and have not taken any long breaks  ",
            "Job seekers with a consistent and progressive work history, particularly those in traditional careers where experience is valued, such as managerial-level skills or a specialist in a particular field.  ",
            "This perfect format emphasizes your work experiences, which is perfect for candidates who want to progress to a higher-level position.",
            "This format is best for ATS. The chronological resume format is friendly with ATS software, which can help you in getting your resume selected for a second screening. ",
        ]
    },
    {
        heading: "Combination Resume Format",
        description: "It is evident by the name that this format is a mix of reverse-chronological and functional resume format.  This template has a skills summary section and work experience, and equally accentuates both.  ",
        image: Temp1,
        list: [
            "Candidates who have a steady working history and have not taken any long breaks  ",
            "Job seekers with a consistent and progressive work history, particularly those in traditional careers where experience is valued, such as managerial-level skills or a specialist in a particular field.  ",
            "This perfect format emphasizes your work experiences, which is perfect for candidates who want to progress to a higher-level position.",
            "This format is best for ATS. The chronological resume format is friendly with ATS software, which can help you in getting your resume selected for a second screening. ",
        ]
    },
]

const TemplatePointTabData = [
    {
        heading: "Reverse-Chronological",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        titlePro: "PRO TIP",
        descriptionPro: ["This format is the most popular one out of all formats. Most job seekers start with this one."],
        TemplatePointTab: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: Temp5,
                list: [
                    "Contact Information",
                    "Resume summary ",
                    "Skills summary ",
                    "Work History",
                    "Optional Sections",
                ]
            }
        ],
        prosItemsData: prosItems,
        consItemsData: consItems,
    },
    {
        heading: "Reverse-Chronological",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        titlePro: "PRO TIP",
        descriptionPro: ["This format is the most popular one out of all formats. Most job seekers start with this one."],
        TemplatePointTab: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: Temp5,
                list: [
                    "Contact Information",
                    "Resume summary ",
                    "Skills summary ",
                    "Work History",
                    "Optional Sections",
                ]
            }
        ],
        prosItemsData: prosItems,
        consItemsData: consItems,
    },
    {
        heading: "Reverse-Chronological",
        description: "This format shows your work history or experience in a reverse chronological format. For instance, you need to mention your recent work experience. ",
        titlePro: "PRO TIP",
        descriptionPro: ["This format is the most popular one out of all formats. Most job seekers start with this one."],
        TemplatePointTab: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume: ",
                image: Temp5,
                list: [
                    "Contact Information",
                    "Resume summary ",
                    "Skills summary ",
                    "Work History",
                    "Optional Sections",
                ]
            }
        ],
        prosItemsData: prosItems,
        consItemsData: consItems,
    },

]

export const resumeFormatData = {

    // breadCrumbsItems: breadCrumbsItems,
    CollapseTab: CollapseTabData,
    DynVerticalTabsData: VerticalTabsData,
    TemplatePointTab: TemplatePointTabData
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



