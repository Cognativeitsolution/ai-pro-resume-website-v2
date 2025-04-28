// ======================
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
        title: "What is SEO and why is it important for digital marketing?",
    },
    {
        id: 'head2',
        title: "Can you explain the difference between on-page SEO and off-page SEO?",
    },
    {
        id: 'head3',
        title: "How do you conduct keyword research for a new campaign?",
    },
    {
        id: 'head4',
        title: "What are some key metrics you track to measure the success of an SEO strategy?",
    },
    // {
    //     id: 'head5',
    //     title: "How do backlinks impact SEO, and how would you go about building them?",
    // },
    // {
    //     id: 'head6',
    //     title: "What strategies would you use to increase organic traffic to a website?",
    // },
]

const TopSectionData = [
    {
        heading: "What is SEO and why is it important for digital marketing?",
        description: [
            "There are plenty of guides on how to write a resume online, but not all of them guarantee that your resume will make it to the second interview or even get any attention from the recruiter. But how can you figure out the best resume layouts to build your own?",
            "But you must be wondering which resume would work the best for you? In this guide, we will assist you in deciding the best generic resume format so you can have a roadmap to write your resume further"],
        description2: "So, to cater to that, we have brought you this straightforward guide with plenty of resume expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.",
        titlePro: "PRO TIP",
        descriptionPro: ["Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start."],
        iconPro: TipPro,
        isTip: false,
        id: 'head1',
    },
    {
        heading: "Can you explain the difference between on-page SEO and off-page SEO?",
        description: [
            "There are me would work the b, deciding the best generic resume format so you can have a roadmap to write your resume further"],
        description2: "So, to cater to that, we have brought you this straightforward guide with plenty of resume expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.",
        titlePro: "PRO TIP",
        descriptionPro: ["Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start."],
        iconPro: TipPro,
        isTip: true,
        id: 'head2',
    },
    {
        heading: "How do you conduct keyword research for a new campaign?",
        description: [
            "There are plenty of guides onould work the bestwe will assist you in deciding the best generic resume format so you can have a roadmap to write your resume further"],
        description2: "So, to cater to that, we have brought you this straightforward guide with plenty of resume expert tips and examples that will increase your chances of getting recruiters' attention and eventually help you get the job you have been looking for.",
        titlePro: "PRO TIP",
        descriptionPro: ["Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start."],
        iconPro: TipPro,
        isTip: false,
        id: 'head3',
    },
    {
        heading: "What are some key metrics you track to measure the success of an SEO strategy?",
        description: [
            "There are plenty of guide would work the best for you? In this guide, we will assist you in deciding the best generic resume format so you can have a roadmap to write your resume further"],
        titlePro: "PRO TIP",
        descriptionPro: ["Selecting the correct resume formats and templates is tough, but making one from scratch is also time-consuming, especially if you don't know where to start."],
        iconPro: TipPro,
        isTip: false,
        id: 'head4',
    },
]

export const resumeFormatData = {
    DynVerticalTabs: VerticalTabsData,
    TopSection: TopSectionData,
    // FormatPoints: FormatPointsData,
    // StepGuide: StepGuideData,
    // SixStep: SixStepData,
    // BottomSection: BottomSectionData
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
    { id: 1, point: 'Tailor your resume to make it fit for the job you are applying for', subHead: 'Positioning' },
    { id: 2, point: 'present your unique and memorable identity', subHead: 'Personal branding:' },
    { id: 3, point: 'a quick summary of what you want and offer.', subHead: 'Pitch:' },
    { id: 4, point: 'visual design and structure of your resume. It should be concise and clear.', subHead: 'Presentation:' },
    { id: 5, point: 'accurate information, as well as proofreading of the resume.', subHead: 'Professionalism:' }
]

const faqsList = [
    {
        question: "How to format a resume that stands out? ",
        answer:
            "A visually appealing resume grabs attention. However, don't go overboard with fancy fonts or colors.",
    },
    {
        question: "What are the common resume mistakes to avoid? ",
        answer: "here are some common mistakes that you should avoid",
    },
    {
        question: "What are the 5 P's of a resume? ",
        answer: "The 5 P’s of a resume that highlight the important elements of a resume are as follows:",
        pointsHeading: "5 P's of a resume",
        points: faqsPoints
    },
];

export const faqs = {
    title: "Frequently Asked Questions (FAQs) ",
    faqlist: faqsList,
}