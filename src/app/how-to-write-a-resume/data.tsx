// ======================
import Temp1 from 'media/resume_template_images/Template_16.webp'
import Temp3 from 'media/resume_template_images/Template_18.webp'
import Temp5 from 'media/resume_template_images/Template_8.webp'
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



