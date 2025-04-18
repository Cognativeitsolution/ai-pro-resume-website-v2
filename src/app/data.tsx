// ===============
import creativeinfusion from "media/images/Creativeinfusion.webp";
import innovativeedge from "media/images/Creativeinfusion.webp";
import fresherresume from "media/images/fresherResume.webp";
import sleeksimplicity from "media/images/SleekSimplicity.webp";
import brightfuture from "media/images/BrightFuture.webp";
// ===============
import home_page_video from "media/images/home_page_video.webp";
// ===============
import choose_template from "media/images/choose_template.webp";
import enlist from "media/images/enlist.webp";
import download_resume from "media/images/download_resume.webp";
// ===============
import ats_bg from "media/images/ats_bg.webp";
import ats_score from "media/images/ats_score.webp";
import robo_2 from "media/images/robo_2.gif";
// ===============
import grammer from "media/images/grammer.webp";
import tailored from "media/images/tailored.webp";
import professional from "media/images/20+professionally.webp";
import resume_parser from "media/images/resume_parser.webp";
// ===============
import Template1 from "media/resume_template_images/template_3.webp";
import Template2 from "media/resume_template_images/template_2.webp";
import Template3 from "media/resume_template_images/template_3.webp";
// ===============
import prof_cover_writing from "media/images/prof_cover_writing.webp";
import prof_cover_review from "media/images/prof_cover_review.webp";
import prof_resume_writing from "media/images/prof_resume_writing.webp";
import prof_resume_review from "media/images/prof_resume_review.webp";
// ===============
import reviewImage from "media/images/reviews.webp";
import reviewAvatar from "media/images/reviewAvatar.webp";

export const bannerData = {
    title: (
        <>
            Let AI Build the Resume That Builds
            <br className="hidden md:block" /> Your Career
        </>
    ),
    subtitle: "About us",
    description: (
        <>
            Easy to use templates, AI Powered Suggestions, and one click download.
        </>
    ),
};

const tabDisplayMap = {
    creative: "Creative & Cultural Fields",
    food: "Food Service",
    management: "Management",
    it: "Information Technology",
};

const templatesData = {
    creative: [
        { id: 1, src: creativeinfusion },
        { id: 2, src: innovativeedge },
        { id: 3, src: fresherresume },
        { id: 4, src: sleeksimplicity },
        { id: 5, src: brightfuture },
    ],
    food: [
        { id: 7, src: innovativeedge },
        { id: 6, src: creativeinfusion },
        { id: 8, src: fresherresume },
        { id: 9, src: sleeksimplicity },
        { id: 10, src: brightfuture },
    ],
    management: [
        { id: 13, src: fresherresume },
        { id: 11, src: creativeinfusion },
        { id: 12, src: innovativeedge },
        { id: 14, src: sleeksimplicity },
        { id: 15, src: brightfuture },
    ],
    it: [
        { id: 19, src: sleeksimplicity },
        { id: 16, src: creativeinfusion },
        { id: 17, src: innovativeedge },
        { id: 18, src: fresherresume },
        { id: 20, src: brightfuture },
    ],
};

export const exploreTemplatesData = {
    title: "Explore professional Resume templates",
    description: "Our professional resume templates are based on what employers look for in a candidate.",
    tabDisplayMap: tabDisplayMap,
    templates: templatesData,
}

export const videoSectionData = {
    title: "What Makes Us The Best Resume Builder Online?",
    description: `AI Pro Resume is your resume specialist that provides AI-based personalized suggestions based on your skills and experiences. These suggestions can speed up your cover letter and resume-making process. With the perfect resume builder, you do not have to write or copy-paste your data. Just import your current resume and see the magic of our resume parser tool. It fetches all the data from your file and transfers them to creative resume maker.`,
    image: home_page_video,
    alt: "home-video"
}

export const stepsData = [
    {
        id: 1,
        icon: choose_template,
        title: "Choose your resume Template",
        description:
            "Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.",
    },
    {
        id: 2,
        icon: enlist,
        title: "Enlist your Capabilities",
        description:
            "Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples. As easy as clicking.",
    },
    {
        id: 3,
        icon: download_resume,
        title: "Download Your Resume",
        description:
            "Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.",
    },
];

export const atsData = {
    backgroundImage: ats_bg,
    mainImage: ats_score,
    robotImage: robo_2,
    heading: (
        <>
            Resumes Optimized For Applicant <br className="hidden xl:block" />
            Tracking Systems (ATS)
        </>
    ),
    description:
        "AI PRO RESUME Resumes And Cover Letters Are Vigorously Tested Against Major ATS Systems To Ensure Complete Parsability",
    buttonText: "Check ATS Score",
};

export const featuresData = [
    {
        image: grammer,
        title: "Check Your Resume For Grammatical And Punctuation Errors",
        description:
            "A built-in content checker tool helping you stay on top of grammar errors and clichés",
        features: [
            "Wording and readability analysis",
            "Eliminate typos and grammatical errors",
            "Content suggestions based on your job and experience",
        ],
        buttonText: "Create Resume",
    },
    {
        image: tailored,
        title: "Resume Tailoring Based On The Job You’re Applying For",
        description:
            "Quickly ensure that your resume covers key skills and experiences by pasting the job ad you’re applying for",
        features: [
            "Wording and Skills and experience section analysis analysis",
            "Actionable checklist of what else to add to your resume",
            "Instant comparison between your resume and the job posting",
        ],
        buttonText: "Create Resume",
    },
    {
        image: professional,
        title: "20+ Professionally Designed Resume Sections",
        description:
            "Express your professional history without limitations or worry about how your resume looks",
        features: [
            "Professional sections like Experience, Skills, Summary and Education",
            "Personal sections like Strengths, Quotes, Books, Interests and My Time",
            "Other sections like Certifications, Awards, Achievements, Languages and References",
        ],
        buttonText: "Create Resume",
    },
    {
        image: resume_parser,
        title: "Resume Parser Based On The Resume You Already Have",
        description:
            "Quickly ensure that your resume covers key skills and experiences by pasting the job ad you’re applying for",
        features: [
            "Wording and Skills and experience section analysis analysis",
            "Actionable checklist of what else to add to your resume",
            "Instant comparison between your resume and the job posting",
        ],
        buttonText: "Create Resume",
    },
];

const findResumeTemplates = [
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
]

export const findResumeData = {
    title: "Find the Perfect Resume Example for Your Field",
    description: `To save you time and effort, we have introduced creative resume
    examples. These great resume examples are pre-written. You just have
    to click on them and add minor details to make your resume more
    personalized.`,
    templateList: findResumeTemplates
}

const serviceData = [
    {
        image: prof_cover_writing,
        title: "Professional Cover Letter Writing",
        services: [
            "Create A Tailored Cover Letter For Specific Roles.",
            "Use Persuasive Language To Highlight Your Value.",
            "Ensure A Polished And Professional Tone.",
            "2 Revisions.",
        ],
    },
    {
        image: prof_resume_review,
        title: "Professional Resume Review",
        services: [
            "Assess Format, Content, And ATS Compatibility.",
            "Suggest Best Resume Formats And Improvements To Display Achievements.",
            "Our Expert Resume Writers Offer Feedback To Improve Structure And Clarity.",
            "2 Revisions.",
        ],
    },
    {
        image: prof_resume_writing,
        title: "Professional Resume Writing",
        services: [
            "Our Professional Resume Writers Design Resumes That Stand Out.",
            "Modify Content For ATS And Role-Specific Requirements.",
            "Highlight Skills And Achievements With Clear Language.",
            "2 Revisions.",
        ],
    },
    {
        image: prof_cover_review,
        title: "Professional Cover Letter Review",
        services: [
            "Highlight Changes To Make It Concise And Impactful.",
            "Suggest The Best Cover Letter Formats For Job Relevance And Tone.",
            "Guide To Align With Industry Standards.",
            "2 Revisions.",
        ],
    },
];

export const serviceSectionData = {
    subTitle: "Services",
    title: (<>
        Let’s Perfect Your Resume &<br /> Cover Letter Together
    </>),
    description: ` Writing a professional cover letter and resume can be a hectic task,
    and it will not guarantee you will pass the ATS checkers. AI Pro
    Resume is here to cater to all your needs by offering top-notch
    professional cover letter writing service and resume writing services.
    We also provide cover letter review and professional resume review
    services to assist you in creating out-class resumes and cover
    letters. Our experts analyze your documents and provide suggestions
    based on your job positions and career.`,
    serviceList: serviceData
}

const reviewsList = [
    {
        text: "Beautiful templates and intuitive interface. Created my resume in under 30 minutes!,Beautiful templates and intuitive interface. Created my resume in under 30 minutes! Beautiful templates",
        author: "Josephine Alexander",
        role: "Marketing Specialist",
        avatar: reviewImage,
    },
    {
        text: "Beautiful templates and intuitive interface. Created my resume in under 30 minutes!,Beautiful templates and intuitive interface. Created my resume in under 30 minutes! Beautiful templates",
        author: "Michael Roberts",
        role: "Product Manager",
        avatar: reviewAvatar,
    },
];

export const reviewData = {
    subTitle: " Reviews",
    title: (<>
        Your Resume Is An Extension Of Yourself – Make <br className="hidden md:block" /> One That’s Truly You
    </>),
    reviewList: reviewsList
}

const faqsList = [
    {
        question: "What Makes Us The Best Resume Maker In The Market?",
        answer:
            "Our unique features, such as AI-based suggestions, professional resume writing, professional cover letter writing, professional resume review, professional cover letter review, free resume and cover letter templates, pre-written examples, and referral rewards, make us the top and most creative resume builder.",
    },
    {
        question: "How Fast Can I Create My Resume?",
        answer:
            "You can create your resume in under 30 minutes using our ready-made templates and intuitive editor.",
    },
    {
        question: "Are The Resume Templates Customizable?",
        answer:
            "Yes, all our resume templates are fully customizable — fonts, layout, colors, and content.",
    },
    {
        question: "Do You Offer Cover Letter Services?",
        answer:
            "Yes, we offer cover letter writing and review services with multiple revisions for perfection.",
    },
];

export const faqs = {
    title: "FREQUENTLY ASKED QUESTIONS",
    faqlist: faqsList
}