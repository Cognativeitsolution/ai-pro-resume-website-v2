// ======================
import TipPro from 'media/images/TipPro.webp'
import TipProComma from 'media/images/commaIcoon.webp'


import Temp1 from 'media/resume_template_images/template_1.webp'
import Temp2 from 'media/resume_template_images/template_2.webp'
import Temp3 from 'media/resume_template_images/template_3.webp'
import Temp4 from 'media/resume_template_images/template_4.webp'
import Temp5 from 'media/resume_template_images/template_5.webp'
import Temp6 from 'media/resume_template_images/template_6.webp'
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
        id: 'head1',
        title: "Best Resume Formats to Impress in 2025 ",
    },
    {
        id: 'head2',
        title: "This blog will include",
    },
    {
        id: 'head3',
        title: "3 Most Popular Resume Formats",
    },
    {
        id: 'head4',
        title: "Reverse-Chronological Resume Format ",
    },
    {
        id: 'head5',
        title: "Functional Resume Formats",
    },
    {
        id: 'head6',
        title: "Combination Resume Format",
    },
    {
        id: 'head7',
        title: "Resume Formatting Tips For Writing A Perfect Resume ",
    },
    {
        id: 'head8',
        title: "Resume Templates That You Can Use To Grab an Employer’s Attention ",
    },
    {
        id: 'head9',
        title: "The Bottom Line",
    },

]

const TopSectionData = {
    heading: "Best Resume Formats to Impress in 2025",
    description: [
        "The first thing you choose when making a resume is a resume format. Selecting the resume format is important as it reflects the story of your professional experience to the employers.  This will also affect the chances of you getting your dream job.",
        "But you must be wondering which resume would work the best for you? In this guide, we will assist you in deciding the best generic resume format so you can have a roadmap to write your resume further"],
    titlePro: "PRO TIP",
    descriptionPro: [" Moreover, to grab the attention of your employers, you need to check all the elements of the best format for resume. These elements include a clear and well-structured resume. Such a resume will increase your chances of getting an interview."],
    iconPro: TipPro,
    isTip: true
}

const FormatPointsList = [
    { id: 1, point: '3 Common Resume Formats  ' },
    { id: 2, point: 'Pros & Cons of each format' },
    { id: 3, point: 'Resume Formatting Tips' },
    { id: 4, point: 'Professional Resume Examples' },
]

const FormatPointsData = {
    heading: "This blog will include",
    titlePro: "Need A resume ASAP?",
    descriptionPro: [" Our AI-powered resume builder has features that can help you write a resume in time. With more than 30+ professional resume templates, you can choose the one that is suitable for your industry and begin creating a perfect resume. Also, you can revamp your old resume by importing it on our platform and customizing it the way you want. "],
    iconPro: TipProComma,
    isTip: true,
    list: FormatPointsList
}

const CollapseTabList = [
    {
        heading: "Reverse-Chronological",
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
        heading: "Functional",
        description: "This format shows your skills rather than your previous working experience and qualifications. It focuses on your abilities rather than your career background. ",
        image: Temp3,
        list: [
            "Job seekers who have little or no working experience want to highlight their skills and abilities to grab attention from employers.",
            "Candidates who change careers often and have diverse working experience can highlight their transferable skills to employers.",
            "For career changers, this best resume format can minimize the focus on work experience and shift toward skills.",
        ]
    },
    {
        heading: "Combination",
        description: "It is evident by the name that this format is a mix of reverse-chronological and functional resume format.  This template has a skills summary section and work experience, and equally accentuates both. ",
        image: Temp1,
        list: [
            "This resume is perfect for those re-entering the workforce after a break.",
            "For those with 3-8 years of experience who may not be at the most senior level but have a solid career history..",
            "Career changers who want to show their diverse skills and working experience.",
            "Let’s take a look at each proper resume format individually!",
        ]
    },
]

const CollapseTabData = {
    heading: "3 Most Popular Resume Formats",
    description: "There are 3 main proper resume formats that are used around the world. Each format highlights your work experience and skills in a different way.",
    list: CollapseTabList
}

const TemplatePointTabData = [
    {
        heading: "Reverse-Chronological",
        description: "A reverse chronological resume format is also known as a chronological resume format. It focuses on your recent working experience, followed by the rest of your job experience in reverse order. ",
        titlePro: "PRO TIP",
        descriptionPro: [" This format is the most popular one out of all formats. Most job seekers start with this one."],
        iconPro: TipPro,
        TemplatePointTab: [
            {
                description: "Let’s take a look at the resume structure for this format: ",
                image: Temp5,
                list: [
                    { text: "Contact Information" },
                    { text: "Profile Summary " },
                    { text: "Work Experience " },
                    { text: "Education" },
                    { text: "Skills" },
                    {
                        text: "Optional Sections, such as:",
                        subList: [
                            "Awards and Recognition",
                            "Projects  ",
                            "Volunteering y ",
                            "References (if not included separately) ",
                        ]
                    },
                ]
            }
        ],
        prosItemsData: {
            icon: pros,
            title: "Pros",
            description: [
                "By writing about your most recent job first, your employers can instantly focus on your skills and accomplishments.  ",
                "The chronological order makes it easy for recruiters to quickly understand your career progression as well as keep track of your work history.",
                "This perfect resume format is easier to scan using the Applicant Tracking Systems (ATS, making it a safer choice for online applications.",
                "As the most popular yet perfect resume format, most hiring managers are familiar with it and pay more attention to such formats, increasing the chances of such applications passing for an interview.",
            ],
        },
        consItemsData: {
            icon: cons,
            title: "Cons",
            description: [
                "It can bring attention to periods of unemployment or frequent job changes, driving employers to raise questions. As a career changer, this format is not applicable to you.",
                "The focus on recent experience can overshadow valuable skills and accomplishments that you have achieved in your past jobs. ",
                "If you are a recent graduate or someone with no experience, this format might not be the right option for you.",

            ],
        },
    },
    {
        heading: "Functional",
        description: "A functional resume, which also goes by the name “Skill-based resume,” focuses on your skills rather than your previous working experience and qualifications. Unlike reverse chronological order, this format groups skills into categories, making it a perfect format choice for those with little to no experience.",
        titlePro: "PRO TIP",
        descriptionPro: [" Moreover, it is perfect for those who are changing careers and want employers to notice their transferable skills. In addition,  individuals who take a break need employers to take note of their qualifications rather than their work history timeline. "],
        iconPro: TipPro,
        TemplatePointTab: [
            {
                description: "Here is how you can structure a functional resume: ",
                image: Temp5,
                list: [
                    { text: "Contact Information" },
                    { text: "Resume summary " },
                    { text: "Skills summary " },
                    { text: "Education" },
                    {
                        text: "Optional Sections, such as:",
                        subList: [
                            "Work & Experience",
                        ]
                    },
                ]
            }
        ],
        prosItemsData: {
            icon: pros,
            title: "Pros",
            description: [
                "By emphasizing your relevant skills and abilities, you can showcase your expertise in a particular area.",
                "If you're transitioning to a new field, a functional resume can highlight the transferable skills you have acquired from your last job. ",
                "By focusing on skills, you can minimize attention on any gaps in your work history.",
                "This format helps people with limited or no work experience to present their education and acquired skills.",
            ],
        },
        consItemsData: {
            icon: cons,
            title: "Cons",
            description: [
                "As most hiring managers choose traditional chronological resumes, it makes it difficult for a functional format resume to pass or grab attention.",
                "If you're using a functional resume to hide gaps or a lack of experience, it could raise questions from employers about the validity of your resume. ",
                "Applicant tracking systems (ATS) are often designed to scan for keywords and dates, making a functional resume less likely to be parsed effectively. ",
                "As a skill-based resume, it is harder to see career progression and growth than a reverse chronological resume format.",
                "Not all mentioned skills and achievements presented in a functional resume link easily to specific jobs or employers, potentially losing context.",
            ],
        },
    },
    {
        heading: "Combination",
        description: "A combination resume format, which is also called a hybrid resume, highlights both skills and work experience equally. It gives you the flexibility to show your qualifications and career history.. This resume includes a chronological summary of your skills and work experience. ",
        titlePro: "PRO TIP",
        descriptionPro: ["Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history."],
        iconPro: TipPro,
        TemplatePointTab: [
            {
                description: "Here is how you can structure a Chronological or Hybrid Resume:  ",
                image: Temp5,
                list: [
                    { text: "Contact Information" },
                    { text: "Resume summary " },
                    { text: "Skills summary " },
                    { text: "Work History" },
                    { text: "Optional Sections" },
                ]
            }
        ],
        prosItemsData: {
            icon: pros,
            title: "Pros",
            description: [
                "With this best resume format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
                "Job seekers entering a completely new industry can take advantage of this generic resume format as it will assist them in shedding light on the relevant skills and experience from their past work.",
                "If you've had a diverse career path or have crucial gaps in your employment, this format can help downplay those and divert employers' attention toward your actual capabilities.",
                "You can customize the skills section to focus on the abilities most relevant to the target job, increasing your chances of getting noticed.",
                "The work history section provides context and concrete examples of how you've used your skills in previous roles.",
            ],
        },
        consItemsData: {
            icon: cons,
            title: "Cons",
            description: [
                "Since it is also not a common resume format, it can be challenging for such a format to grab the hiring manager's attention.",
                "ATS systems can struggle to understand the format as this system is not familiar with this format.",
                "If not managed carefully, a combination resume can become overly lengthy and complex, making it difficult for recruiters to quickly grasp your major qualifications.",
                "It takes more time and thought to develop a combination resume compared to a simple chronological format, as you need to carefully select and present your skills and experience.",
                "Some recruiters prefer the traditional chronological format, especially for entry-level positions or certain industries. ",
                "If not handled well, the skills section can overshadow the details of your previous roles, potentially giving a less complete picture of your work history.",
            ],
        },
    }
]

const FormatQuesAnsList = [
    {
        heading: "What Margin Is Good In A Resume?",
        description: "It is recommended to use the standard margin size, which is 0.5 to 1 inch on all sides. Relying on your needs, you can adjust the Margins to between 0.5 and 1 inch. Also,  it is better to avoid large margin sizes, as they are too large and can make your resume look empty and unimpressive. ",
    },
    {
        heading: "Leverage White Space In Your Resume",
        description: `Leveraging white space on a resume can make it easier to read and give content "breathing room." A recruiter may not read a cluttered resume, as studies show they only spend about 7.4 seconds reviewing one. White space can make content more readable and easier to consume.`,
    },
    {
        heading: "What's the appropriate font for a resume?",
        description: `Choosing a professional font can convey attention to detail and professionalism. For example, a font like Arial might be better suited for a resume in finance, while Comic Sans might leave a bad impression for a more professional job. Most recruiters like clean, professional fonts such as Calibri, Helvetica, or Times New Roman. You can also use different fonts to emphasize certain areas, like a serif font for headings and a sans serif font for the resume's body. `,
    },
    {
        heading: "Use Bullet Points for A Structured Look",
        description: `You need to use bullet points in your resume to make it look clean, structured, and easy for hiring managers to read. `,
    },
    {
        heading: "Use an appropriate color in your Resume",
        description: `It is important to understand the industry you are applying to to choose the right colors for your resume. Choose subtle colors for more corporate and serious fields, and a little vibrant colors for more creative fields.  `,
    },
    {
        heading: "Quantify Your Achievements",
        description: `As you write your experience in reverse order, focus on accomplishments and responsibilities using action verbs and quantifiable results.`,
    },
    {
        heading: "Incorporate Keywords",
        description: `To make sure your resume passes through the Applicant Tracking System (ATS), you need to use relevant keywords and those that are mentioned in the job description throughout your resume. `,
    },
]

const FormatQuesAnsData = {
    heading: " Resume Formatting Tips For Writing A Perfect Resumes",
    list: FormatQuesAnsList
}

const TemplateList = [
    {
        heading: "Artistic Flair ",
        description: `Our "Artistic Flair" template combines a professional appearance with creative elements, making it eye-catching and effective in clearly and organized presenting the candidate's qualifications. This example is one of the best professional resume examples, and is perfect for both serious industries and creative fields.  `,
        image: Temp1,
    },
    {
        heading: `Artistic Flair `,
        description: `Our "Artistic Flair" template combines a professional appearance with creative elements, making it eye-catching and effective in clearly and organized presenting the candidate's qualifications. This example is one of the best professional resume examples, and is perfect for both serious industries and creative fields.  `,
        image: Temp2,
    },
    // {
    //     heading: `Bright Future`,
    //     description: `Our "Bright Future" template is visually appealing and effectively organized, making it an excellent choice for a professional resume. `,
    //     image: Temp3,
    // },
    // {
    //     heading: `Fresher Resume `,
    //     description: `Our "Fresher Resume" template is visually appealing and effectively organized, making it an excellent choice for showcasing the candidate's qualifications clearly and effectively. The dark shade makes it perfect for the traditional industry. `,
    //     image: Temp4,
    // },
    // {
    //     heading: `Elegant Executive`,
    //     description: `Our "Elegant Executive" resume template effectively combines a visually attractive design with a clear focus on achievements, making it an excellent choice for professionals seeking executive-level positions.  `,
    //     image: Temp5,
    // },
    // {
    //     heading: `Innovative Edge`,
    //     description: `Our "Innovative Edge" resume template effectively combines a visually striking design with a clear focus on achievements and skills. It is an excellent choice for designing or other creative fields for job seekers seeking to make a strong impression. `,
    //     image: Temp6,
    // },
];

const TemplateData = {
    heading: "Resume Templates That You Can Use To Grab an Employer’s Attention",
    description: [
        "Are you looking for generic resume formats that have eye-catching designs and are also ATS-friendly? We mention some resumes you can create on our AI-powered resume builder, along with many customization options. Rather than starting from scratch, you can use remarkable resume templates as well as professional cover letter templates to get noticed by your employers and increase your chances of securing more interviews.",
        "You can scroll through our list of well-designed resume templates and select one that you prefer and that matches your industry."],
    list: TemplateList
}

const BottomSectionData = {
    heading: "The Bottom Line",
    description: "It is important to consider the level of your career and then select a generic resume format based on that. The three best format for resume tell a different story about you to the employers. So be wise about what you want your employer to notice: is it your long history of consistent work experience, your diverse skill sets that you gained as a career changer, or both? With the right resume format and the best cover letter format, you can significantly increase your chances of getting your dream job.",
}

export const FormatDetailData = {
    DynVerticalTabsData: VerticalTabsData,
    TopSection: TopSectionData,
    FormatPoints: FormatPointsData,
    CollapseTab: CollapseTabData,
    TemplatePointTab: TemplatePointTabData,
    FormatQuesAns: FormatQuesAnsData,
    TemplateData: TemplateData,
    BottomSection: BottomSectionData,
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
        titlePro: "PRO TIP",
        descriptionPro: ["Moreover, for more top-rated resume formats that you can use to create your resume, visit AI Pro Resume and select your preferred resume template and cover letter examples to create a well-structured, sleek, and eye-catching CV. "],
        iconPro: TipPro,
        isTip: true
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



