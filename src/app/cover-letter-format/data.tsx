// ======================
import TipPro from 'media/images/TipPro.webp'
import TipProComma from 'media/images/commaIcoon.webp'

import Temp1 from 'media/cover_template_images/template_1.webp'
import Temp2 from 'media/cover_template_images/template_2.webp'
import Temp3 from 'media/cover_template_images/template_3.webp'
import Temp4 from 'media/cover_template_images/template_4.webp'
import Temp5 from 'media/cover_template_images/template_5.webp'
import Temp6 from 'media/cover_template_images/template_6.webp'

import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';



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
    title: "Best Cover Letter Formats to Impress in 2025 ",
  },
  {
    id: 'head2',
    title: "This blog will include",
  },
  {
    id: 'head3',
    title: "3 Most Popular Cover Letter Formats",
  },
  {
    id: 'head4',
    title: "Reverse-Chronological Cover Letter Format ",
  },
  {
    id: 'head5',
    title: "Functional Cover Letter Formats",
  },
  {
    id: 'head6',
    title: "Combination Cover Letter Format",
  },
  {
    id: 'head7',
    title: "Cover Letter Formatting Tips For Writing A Perfect Cover Letter ",
  },
  {
    id: 'head8',
    title: "Cover Letter Templates That You Can Use To Grab an Employer’s Attention ",
  },
  {
    id: 'head9',
    title: "The Bottom Line",
  },

]

const TopSectionData = {
  heading: "Best Cover Letter Formats to Impress in 2025",
  description: [
    "The first thing you choose when making a cover letter is a cover letter format. Selecting the cover letter format is important as it reflects the story of your professional experience to the employers.  This will also affect the chances of you getting your dream job.",
    "But you must be wondering which cover letter would work the best for you? In this guide, we will assist you in deciding the best generic cover letter format so you can have a roadmap to write your cover letter further"],
  titlePro: "PRO TIP",
  descriptionPro: [" Moreover, to grab the attention of your employers, you need to check all the elements of the best format for cover letter. These elements include a clear and well-structured cover letter. Such a cover letter will increase your chances of getting an interview."],
  iconPro: TipPro,
  isTip: true
}

const FormatPointsList = [
  { id: 1, point: '3 Common Cover Letter Formats  ' },
  { id: 2, point: 'Pros & Cons of each format' },
  { id: 3, point: 'Cover Letter Formatting Tips' },
  { id: 4, point: 'Professional Cover Letter Examples' },
]

const FormatPointsData = {
  heading: "This blog will include",
  titlePro: "Need A cover letter ASAP?",
  descriptionPro: [" Our AI-powered cover letter builder has features that can help you write a cover letter in time. With more than 30+ professional cover letter templates, you can choose the one that is suitable for your industry and begin creating a perfect cover letter. Also, you can revamp your old cover letter by importing it on our platform and customizing it the way you want. "],
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
      "This format is best for ATS. The chronological cover letter format is friendly with ATS software, which can help you in getting your cover letter selected for a second screening. ",
    ]
  },
  {
    heading: "Functional",
    description: "This format shows your skills rather than your previous working experience and qualifications. It focuses on your abilities rather than your career background. ",
    image: Temp3,
    list: [
      "Job seekers who have little or no working experience want to highlight their skills and abilities to grab attention from employers.",
      "Candidates who change careers often and have diverse working experience can highlight their transferable skills to employers.",
      "For career changers, this best cover letter format can minimize the focus on work experience and shift toward skills.",
    ]
  },
  {
    heading: "Combination",
    description: "It is evident by the name that this format is a mix of reverse-chronological and functional cover letter format.  This template has a skills summary section and work experience, and equally accentuates both. ",
    image: Temp1,
    list: [
      "This cover letter is perfect for those re-entering the workforce after a break.",
      "For those with 3-8 years of experience who may not be at the most senior level but have a solid career history..",
      "Career changers who want to show their diverse skills and working experience.",
      "Let’s take a look at each proper cover letter format individually!",
    ]
  },
]

const CollapseTabData = {
  heading: "3 Most Popular Cover Letter Formats",
  description: "There are 3 main proper cover letter formats that are used around the world. Each format highlights your work experience and skills in a different way.",
  list: CollapseTabList
}

const TemplatePointTabData = [
  {
    heading: "Reverse-Chronological",
    description: "A reverse chronological cover letter format is also known as a chronological cover letter format. It focuses on your recent working experience, followed by the rest of your job experience in reverse order. ",
    titlePro: "PRO TIP",
    descriptionPro: [" This format is the most popular one out of all formats. Most job seekers start with this one."],
    iconPro: TipPro,
    TemplatePointTab: [
      {
        description: "Let’s take a look at the cover letter structure for this format: ",
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
        "This perfect cover letter format is easier to scan using the Applicant Tracking Systems (ATS, making it a safer choice for online applications.",
        "As the most popular yet perfect cover letter format, most hiring managers are familiar with it and pay more attention to such formats, increasing the chances of such applications passing for an interview.",
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
    description: "A functional cover letter, which also goes by the name “Skill-based cover letter,” focuses on your skills rather than your previous working experience and qualifications. Unlike reverse chronological order, this format groups skills into categories, making it a perfect format choice for those with little to no experience.",
    titlePro: "PRO TIP",
    descriptionPro: [" Moreover, it is perfect for those who are changing careers and want employers to notice their transferable skills. In addition,  individuals who take a break need employers to take note of their qualifications rather than their work history timeline. "],
    iconPro: TipPro,
    TemplatePointTab: [
      {
        description: "Here is how you can structure a functional cover letter: ",
        image: Temp5,
        list: [
          { text: "Contact Information" },
          { text: "Cover Letter summary " },
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
        "If you're transitioning to a new field, a functional cover letter can highlight the transferable skills you have acquired from your last job. ",
        "By focusing on skills, you can minimize attention on any gaps in your work history.",
        "This format helps people with limited or no work experience to present their education and acquired skills.",
      ],
    },
    consItemsData: {
      icon: cons,
      title: "Cons",
      description: [
        "As most hiring managers choose traditional chronological cover letters, it makes it difficult for a functional format cover letter to pass or grab attention.",
        "If you're using a functional cover letter to hide gaps or a lack of experience, it could raise questions from employers about the validity of your cover letter. ",
        "Applicant tracking systems (ATS) are often designed to scan for keywords and dates, making a functional cover letter less likely to be parsed effectively. ",
        "As a skill-based cover letter, it is harder to see career progression and growth than a reverse chronological cover letter format.",
        "Not all mentioned skills and achievements presented in a functional cover letter link easily to specific jobs or employers, potentially losing context.",
      ],
    },
  },
  {
    heading: "Combination",
    description: "A combination cover letter format, which is also called a hybrid cover letter, highlights both skills and work experience equally. It gives you the flexibility to show your qualifications and career history.. This cover letter includes a chronological summary of your skills and work experience. ",
    titlePro: "PRO TIP",
    descriptionPro: ["Some templates also mention skills summary alongside the working experience to accentuate both. This template is perfectly useful for people who have a variety of skills and diversity in career history."],
    iconPro: TipPro,
    TemplatePointTab: [
      {
        description: "Here is how you can structure a Chronological or Hybrid Cover Letter:  ",
        image: Temp5,
        list: [
          { text: "Contact Information" },
          { text: "Cover Letter summary " },
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
        "With this best cover letter format, you can showcase your major skills and qualifications upfront while also detailing your work history and providing a detailed view of your qualifications.  ",
        "Job seekers entering a completely new industry can take advantage of this generic cover letter format as it will assist them in shedding light on the relevant skills and experience from their past work.",
        "If you've had a diverse career path or have crucial gaps in your employment, this format can help downplay those and divert employers' attention toward your actual capabilities.",
        "You can customize the skills section to focus on the abilities most relevant to the target job, increasing your chances of getting noticed.",
        "The work history section provides context and concrete examples of how you've used your skills in previous roles.",
      ],
    },
    consItemsData: {
      icon: cons,
      title: "Cons",
      description: [
        "Since it is also not a common cover letter format, it can be challenging for such a format to grab the hiring manager's attention.",
        "ATS systems can struggle to understand the format as this system is not familiar with this format.",
        "If not managed carefully, a combination cover letter can become overly lengthy and complex, making it difficult for recruiters to quickly grasp your major qualifications.",
        "It takes more time and thought to develop a combination cover letter compared to a simple chronological format, as you need to carefully select and present your skills and experience.",
        "Some recruiters prefer the traditional chronological format, especially for entry-level positions or certain industries. ",
        "If not handled well, the skills section can overshadow the details of your previous roles, potentially giving a less complete picture of your work history.",
      ],
    },
  }
]

const FormatQuesAnsList = [
  {
    heading: "What Margin Is Good In A Cover Letter?",
    description: "It is recommended to use the standard margin size, which is 0.5 to 1 inch on all sides. Relying on your needs, you can adjust the Margins to between 0.5 and 1 inch. Also,  it is better to avoid large margin sizes, as they are too large and can make your cover letter look empty and unimpressive. ",
  },
  {
    heading: "Leverage White Space In Your Cover Letter",
    description: `Leveraging white space on a cover letter can make it easier to read and give content "breathing room." A recruiter may not read a cluttered cover letter, as studies show they only spend about 7.4 seconds reviewing one. White space can make content more readable and easier to consume.`,
  },
  {
    heading: "What's the appropriate font for a cover letter?",
    description: `Choosing a professional font can convey attention to detail and professionalism. For example, a font like Arial might be better suited for a cover letter in finance, while Comic Sans might leave a bad impression for a more professional job. Most recruiters like clean, professional fonts such as Calibri, Helvetica, or Times New Roman. You can also use different fonts to emphasize certain areas, like a serif font for headings and a sans serif font for the cover letter's body. `,
  },
  {
    heading: "Use Bullet Points for A Structured Look",
    description: `You need to use bullet points in your cover letter to make it look clean, structured, and easy for hiring managers to read. `,
  },
  {
    heading: "Use an appropriate color in your Cover Letter",
    description: `It is important to understand the industry you are applying to to choose the right colors for your cover letter. Choose subtle colors for more corporate and serious fields, and a little vibrant colors for more creative fields.  `,
  },
  {
    heading: "Quantify Your Achievements",
    description: `As you write your experience in reverse order, focus on accomplishments and responsibilities using action verbs and quantifiable results.`,
  },
  {
    heading: "Incorporate Keywords",
    description: `To make sure your cover letter passes through the Applicant Tracking System (ATS), you need to use relevant keywords and those that are mentioned in the job description throughout your cover letter. `,
  },
]

const FormatQuesAnsData = {
  heading: " Cover Letter Formatting Tips For Writing A Perfect Cover Letters",
  list: FormatQuesAnsList
}

const TemplateList = [
  {
    heading: "Artistic Flair ",
    description: `Our "Artistic Flair" template combines a professional appearance with creative elements, making it eye-catching and effective in clearly and organized presenting the candidate's qualifications. This example is one of the best professional cover letter examples, and is perfect for both serious industries and creative fields.  `,
    image: Temp1,
  },
  {
    heading: `Artistic Flair `,
    description: `Our "Artistic Flair" template combines a professional appearance with creative elements, making it eye-catching and effective in clearly and organized presenting the candidate's qualifications. This example is one of the best professional cover letter examples, and is perfect for both serious industries and creative fields.  `,
    image: Temp2,
  },
  {
    heading: `Bright Future`,
    description: `Our "Bright Future" template is visually appealing and effectively organized, making it an excellent choice for a professional cover letter. `,
    image: Temp3,
  },
  {
    heading: `Fresher Cover Letter `,
    description: `Our "Fresher Cover Letter" template is visually appealing and effectively organized, making it an excellent choice for showcasing the candidate's qualifications clearly and effectively. The dark shade makes it perfect for the traditional industry. `,
    image: Temp4,
  },
  {
    heading: `Elegant Executive`,
    description: `Our "Elegant Executive" cover letter template effectively combines a visually attractive design with a clear focus on achievements, making it an excellent choice for professionals seeking executive-level positions.  `,
    image: Temp5,
  },
  {
    heading: `Innovative Edge`,
    description: `Our "Innovative Edge" cover letter template effectively combines a visually striking design with a clear focus on achievements and skills. It is an excellent choice for designing or other creative fields for job seekers seeking to make a strong impression. `,
    image: Temp6,
  },
];

const TemplateData = {
  heading: "Cover Letter Templates That You Can Use To Grab an Employer’s Attention",
  description: [
    "Are you looking for generic cover letter formats that have eye-catching designs and are also ATS-friendly? We mention some cover letters you can create on our AI-powered cover letter builder, along with many customization options. Rather than starting from scratch, you can use remarkable cover letter templates as well as professional cover letter templates to get noticed by your employers and increase your chances of securing more interviews.",
    "You can scroll through our list of well-designed cover letter templates and select one that you prefer and that matches your industry."],
  list: TemplateList
}

const BottomSectionData = {
  heading: "The Bottom Line",
  description: "It is important to consider the level of your career and then select a generic cover letter format based on that. The three best format for cover letter tell a different story about you to the employers. So be wise about what you want your employer to notice: is it your long history of consistent work experience, your diverse skill sets that you gained as a career changer, or both? With the right cover letter format and the best cover letter format, you can significantly increase your chances of getting your dream job.",
}

export const CoverLetterFormatData = {
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
    question: "What is the best format for cover letter 2025? ",
    answer:
      "In 2025, cover letters are likely to be modern with a professional format that emphasizes key skills and experiences. Of course, visual elements will come into play a bit more than in earlier formats, but clarity and readability above everything else. ",
  },
  {
    question: "What is the top rated cover letter format? ",
    answer:
      "The best generic cover letter format can be different for every person, but what is often most recommended is a reverse chronological format, which shows the work experience in descending order so that the employer can see the latest achievements more easily.  ",
    titlePro: "PRO TIP",
    descriptionPro: ["Moreover, for more top-rated cover letter formats that you can use to create your cover letter, visit AI Pro Cover Letter and select your preferred cover letter template and cover letter examples to create a well-structured, sleek, and eye-catching CV. "],
    iconPro: TipPro,
    isTip: true
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



