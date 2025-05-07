// ====================== IMAGES ======================
import image1 from 'media/images/ourBenefitsImg.webp'
import image2 from 'media/seo-and-marketing/image-1.webp'
import image3 from 'media/seo-and-marketing/image-2.webp'
import image4 from 'media/resume_template_images/template_2.webp'
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';
import TipPro from 'media/images/TipPro.webp';
import TipProComma from 'media/images/commaIcoon.webp';

// ====================== BANNER ======================
export const BannerData = {
    title: (
        <>
            Seo and Marketing
        </>
    ),
    subtitle: "Interview Preparation",
    description: "The three top cover letter formats op cover letter formats for 2025 will help you grab employers' attention and enrich your chances of securing your dream job."
};
// ====================== Section 1 Data ======================
const section1Data = {
    title: "Essential SEO and Marketing Tools to Prepare for Interviews in 2025",
    paragraphs: [
        "Interview preparation for SEO and marketing roles goes beyond just revisiting your portfolio. The right digital tools and data-driven strategies make a significant impact.",
        "Whether you're applying for a junior SEO role or a senior marketing strategist position, this guide will ensure you stand out with preparation that reflects industry expertise."
    ],
    bulletPoints: [
        "Use SEO platforms like Ahrefs and SEMrush for hands-on demos",
        "Study company marketing campaigns and digital presence",
        "Apply the STAR method using real campaign results",
        "Prepare targeted questions about SEO tools and KPIs",
        "Leverage schedulers and CRMs for post-interview follow-up"
    ],
    image: { src: image1, alt: "SEO interview preparation tools" },
}
// ====================== Tip 1 Data ======================
const section1Tip = {
    title: "Quick Tip",
    icon: TipPro,
    description: "Record your response to SEO scenario-based questions to evaluate clarity and keyword accuracy.",
    isTip: true
}
// ====================== Section 2 Data ======================
const section2Data = {
    title: "SEO and Marketing Practice Tools",
    paragraphs: [
        "Platforms now simulate SEO audits and campaign strategy walkthroughs. Practicing with real dashboards and case questions helps reinforce your tactical knowledge and communication skills."
    ],
    listItems: [
        "Walk through real campaign audits",
        "Receive feedback on strategy articulation",
        "Refine metrics-based storytelling"
    ],
    image: { src: image2, alt: "SEO mock interview tool" },
    cta: { text: "Try Marketing Practice Tools" }
}
// ====================== Section 3 Data ======================
const section3Data = {
    title: "Company Research & Market Insights",
    paragraphs: [
        "Understanding a company’s market position, SEO footprint, and campaign tone shows you’re marketing-savvy. Use tools like SimilarWeb, LinkedIn, and SEMrush to gather insight."
    ],
    innerTitle: "Insights",
    listItems: [
        "Analyze their backlink profile or ad strategy to spark relevant questions.",
        "Tools like Google Alerts can keep you updated on the company’s latest news.",
        "Mention recent campaigns and provide thoughtful feedback or praise.",
        "Bring examples of how you'd enhance their SEO or content funnel.",
        "If applicable, compare their competitors' strategies for discussion.",
        "Send a tailored follow-up referencing marketing goals discussed.",
        "Custom templates are useful, but always reflect the brand’s voice.",
        "Avoid jargon the company doesn’t use—mirror their marketing language.",
        "Send a thoughtful second email if no response after a week.",
        "Custom templates are useful, but always reflect the brand’s voice.",
        "Avoid jargon the company doesn’t use—mirror their marketing language.",
        "Send a thoughtful second email if no response after a week."
    ],
    image: { src: image4, alt: "Company marketing research tools" },
    cta: { text: "Start Researching Companies" },
}
// ====================== Tip 2 Data ======================
const section3Tip = {
    title: "Pro Tip",
    icon: TipProComma,
    description: "Showcase real campaign results with KPIs—interviewers remember metrics that matter.",
    isTip: true
}
// ====================== Section 4 Data ======================
const section4Data = {
    title: "Behavioral Interview Strategies for Marketers",
    paragraphs: [
        "Use the STAR method to clearly explain how you executed campaigns, solved performance issues, and contributed to growth. Highlight marketing tools used and their impact."
    ],
    listItems: [
        "Clear, results-backed storytelling",
        "Demonstrates ROI thinking and creativity",
        "Shows ownership of multi-channel strategies"
    ],
    image: { src: image3, alt: "STAR method for marketing interviews" },
    cta: { text: "Learn the STAR Method" },
}
// ====================== Section 5 Data ======================
const interviewQuestionList = [
    {
        id: 1,
        title: "What do you like about your job?",
        desc: "Recruiters ask you this question to understand your reasoning behind leaving your job."
    },
    {
        id: 2,
        title: "Tell me about yourself.",
        desc: "This question about you, don’t be afraid to give a more personal answer strictly professional."
    },
    {
        id: 3,
        title: "Why are you applying for this position?",
        desc: "This question is really the hiring manager’s to learn more about you. Be honest your answer."
    },

    {
        id: 4,
        title: "What are your weaknesses?",
        desc: "A tricky question, try to answer it by tying weaknesses to the job you’re applying for."
    },
    {
        id: 5,
        title: "What are your strengths?",
        desc: "A tricky question, try to answer it by tying your strengths to the job you’re applying for."
    },
    {
        id: 6,
        title: "Why should we hire you?",
        desc: "TProve that you’re confident in your skills and pitch yourself as the best person for the job."
    },
]
const section5Data = {
    title: "The Most Common Job Interview Questions – Answered",
    paragraphs: [
        "Post-interview follow-ups can set you apart. Use templates and scheduling tools to send timely thank-you notes and reminders."
    ],
    interviewQuestionList: interviewQuestionList
}
// ====================== Section 6 Data ======================
const section6Data = {
    title: "Follow-Up Tools and Communication Etiquette",
    paragraphs: [
        "Your follow-up is another opportunity to market yourself. Use personalized, well-timed messages to stand out—especially in roles where communication is key."
    ],
    innerTitle: "Etiquette",
    listItems: [
        "Send a thank-you email within 24 hours—mention specific marketing tools or campaign discussions.",
        "Use scheduling tools like Mixmax or Gmail’s built-in options for optimal timing.",
        "Reinforce your understanding of their marketing goals or challenges.",
        "Attach relevant case studies or campaign summaries with clear labels.",
        "If no reply, send a polite reminder after a few days.",
        "Personalize your message with a callback to the conversation.",
        "Use a structure, but adapt tone to reflect brand personality.",
        "Maintain a polished tone—your writing reflects your marketing skills.",
        "Respect their timeline, but show continued interest with follow-ups.",
        "Maintain a polished tone—your writing reflects your marketing skills.",
        "Respect their timeline, but show continued interest with follow-ups."
    ],
    image: { src: image4, alt: "Follow-up tools for marketers" },
    cta: { text: "Download Follow-Up Templates" },
}
// ====================== PROS Data ======================
const prosData = {
    title: "Pros",
    icon: pros,
    description: "Gives you an edge in interviews by showing technical and strategic readiness for SEO and marketing roles.",
    isPro: true
}
// ====================== CONS Data ======================
const consData = {
    title: "Cons",
    icon: cons,
    description: "Too much technical prep can dilute your storytelling—balance data with personal connection.",
    isPro: false
}
// ====================== TABS ======================
const tabsData = [
    { id: 'section1', title: section1Data.title || 'Section 1' },
    { id: 'section2', title: section2Data?.title || 'Section 2' },
    { id: 'section3', title: section3Data?.title || 'Section 3' },
    { id: 'section4', title: section4Data?.title || 'Section 4' },
    { id: 'section5', title: section5Data?.title || 'Section 5' },
    { id: 'section6', title: section6Data?.title || 'Section 6' },
    { id: 'section7', title: prosData?.title || 'Pros' },
    { id: 'section8', title: consData?.title || 'Cons' },
];
// ====================== TABS DATA ======================
export const DynamicSectionData = {
    section1: section1Data,
    tip1: section1Tip,
    section2: section2Data,
    section3: section3Data,
    tip2: section3Tip,
    section4: section4Data,
    section5: section5Data,
    section6: section6Data,
    pros: prosData,
    cons: consData,
    DynamicTabsData: tabsData
};

// ====================== FAQs ======================
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



