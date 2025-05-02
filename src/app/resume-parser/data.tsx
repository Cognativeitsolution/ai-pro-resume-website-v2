import Skills from "media/resume_parser/skills.webp";
import Experience from "media/resume_parser/experience.webp";
import Achievements from "media/resume_parser/archievements.webp";
import Location from "media/resume_parser/location.webp";
import Education from "media/resume_parser/employment.webp";
import Contacts from "media/resume_parser/alignment.webp";
import Language from "media/resume_parser/language.webp";
import Certifications from "media/resume_parser/certification.webp";
import Screening from "media/resume_parser/screening.webp";
import DataBase from "media/resume_parser/database.webp";

export const BannerData = {
    title: (
        <>
            Say Hello to Effortless Resume Upload
        </>
    ),
    subtitle: "Upload. Relax. Let AI handle the rest.",
    description: (
        <>
            With AI Pro Resume, uploading your resume is just the beginning. Our advanced parser instantly pulls out your key info and places it perfectly—saving you time and effort while giving your resume a professional edge.
        </>
    ),
};

const ParserContentList = [
    {
        title: "What is a Resume Parser?",
        description: (
            <>
                <p>
                    It is a smart feature that scans your uploaded resume and extracts important information such as your summary, skills, language, experience, personal information, and qualifications. It then automatically settles these details into the corresponding sections of your new resume format. This means you can focus on personalizing your resume while the parser handles the rest.
                </p>
                <p>
                    To use the Resume Parser, follow the steps below:
                </p>
            </>
        ),
        tab: [
            {
                title: "Import Resume",
                description: (
                    <p>
                        You must log in to your AI pro resume account to use this unique feature. After signing in and logging into your account, head to the homepage.
                    </p>
                ),
            },
            {
                title: "Sign Up & Login",
                list: [
                    "On the homepage, you will find an option called Import Resume. Click on it to get started.",
                    "A new page will appear with a prompt saying Drag or Drop File or Choose a File.",
                    "Beneath that, you will also see an option to manually create a resume if you do not have one to upload.",
                    "Simply click on the manual option if needed.",
                    "Once you choose and upload your file, the Resume Parser fetches all the relevant data and displays it on a resume editor within seconds.",
                    "You can easily personalize the details from here and add or remove information.",
                ]
            },
            {
                title: "Customization",
                list: [
                    "Personalize your resume by changing the fonts and colors to match your style or profession.",
                    "Choose from a variety of options to make your resume stand out.",
                    "Browse through different templates to find the one that best suits your industry.",
                    "Make your resume visually appealing by adjusting the layout, spacing, and formatting to ensure it reflects your professional image.",
                    "Once you choose and upload your file, the Resume Parser fetches all the relevant data and displays it on a resume editor within seconds.",
                    "ou can easily personalize the details from here and add or remove information.",
                ]
            },
            {
                title: "Download Your Resume",
                list: [
                    "Once everything looks good, your professional resume is ready for download.",
                    "Simply click the download button, and your resume will be saved in PDF format.",
                    "Browse through different templates to find the one that best suits your industry.",
                    "Download your resume and boost your chances of landing your preferred job.",
                ]
            },
        ]
    },
    {
        title: "Coins",
        description: (
            <p>
                To access the powerful Resume Parser feature on AI Pro Resume, you will need coins. Just two coins to parse a resume of up to three pages. If you want to use this feature for free, Don’t worry, we have got a simple technique for that too. Just follow the steps below:
            </p>
        ),
        semi: [
            {
                semiTitle: "Referrals:",
                semiDescription: (
                    <p>
                        Invite your friends to join AI Pro Resume. When they sign up using your referral link, you will earn coins. With these coins, you can unlock resume parser tokens. You will receive 3 coins for 10 referrals, 4 coins for 20 referrals, and 6 coins for 30 referrals.
                    </p>
                ),
            },
            {
                semiTitle: "Purchase Coins",
                semiDescription: (
                    <p>
                        AI Pro Resume allows you to buy coins if you want to use premium services and parser features. Select from the six available coin bundles based on your needs. You can find them on the pricing page below the packages.
                    </p>
                ),
                list: [
                    "5 coins for $10.00.",
                    "10 coins for $20.00.",
                    "25 coins for $50.00.",
                    "50 coins for $95.00.",
                    "75 coins for $135.00.",
                    "100 coins for $180.00.",
                ]
            },
        ]


    },
    {
        title: "Our Packages",
        description: (
            <p>
                AI Pro Resume also offers three packages to suit your needs: one is free, and two are paid. These packages provide access to the Resume Parser feature and unlock several other premium services.
            </p>
        ),
        semi: [
            {
                semiTitle: "Free Package:",
                semiDescription: (
                    <p>
                        Our free package Includes 5 tries of Resume Parser. It is perfect for trying out the basic features. you will also get 2 coins as a signup bonus that you can use to parse a resume.                        </p>
                ),
            },
            {
                semiTitle: "Most Popular Package:",
                semiDescription: (
                    <p>
                        It includes 10 tries of Resume Parser. This package is Ideal for users who want advanced features and premium fonts and themes.
                    </p>
                ),
            },
            {
                semiTitle: "Premium Package:",
                semiDescription: (
                    <p>
                        Our premium package Includes 20 tries for the Resume Parser. It is designed for those who want the best features and premium services.
                    </p>
                ),
            },
            {
                semiTitle: "Most Popular Package:",
                list: [
                    "Click on your preferred package and press the ‘proceed to checkout’ button..",
                    "You will head to the checkout page, choose your payment method (PayPal or card), and complete the payment.",
                    "Once the payment is done, you can access all the services and features included in the package.",
                    "You can use premium services and the parser feature if you purchase only the coins.",
                    "You can parse resumes up to 3 pages long with your tokens.",
                ]
            },
        ]
    },
    {
        title: "ATS-Friendly Resumes",
        description: (
            <p>
                Our resume parser reduces your effort, helps you create a visually appealing resume, and ensures it passes through ATS (Applicant Tracking System) scanners. This means your resume is formatted and optimized to meet the requirements of modern hiring systems, which increases your chances of being noticed by recruiters. AI Pro Resume helps you focus on displaying your skills while we handle the technical side to get you through the first stage of the hiring process.
            </p>
        ),
        isTailor: true,
        semi: [
            {
                semiTitle: "Tips to Make the Most of the Resume Parser:",
                semiDescription: (
                    <p>
                        Follow these simple tips to save time and create a resume that is noticed by recruiters and hiring managers:
                    </p>
                ),
            },
            {
                semiTitle: "Upload a Clean Resume",
                semiDescription: (
                    <p>
                        Your resume should be clear, well-organized, and updated. This will help the parser interpret your details accurately.
                    </p>
                ),
            },
            {
                semiTitle: "Use Job Keywords",
                semiDescription: (
                    <p>
                        Add keywords from the job description that match what recruiters are looking for. This will help you pass ATS scanners.
                    </p>
                ),
            },
            {
                semiTitle: "Highlight Important Information",
                semiDescription: (
                    <p>
                        Put your key skills and achievements where they stand out. This helps make a stronger impression.
                    </p>
                ),
            },
            {
                semiTitle: "Check and Edit the Parsed Data",
                semiDescription: (
                    <p>
                        After the parser fetches your details, review and make small changes. Add missing points or remove anything unnecessary.
                    </p>
                ),
            },
            {
                semiTitle: "Choose a Template That Fits",
                semiDescription: (
                    <p>
                        Pick a template that matches your job or industry. The right design matters, whether professional, creative, or modern.
                    </p>
                ),
            },
            {
                semiTitle: "Keep it Simple",
                semiDescription: (
                    <p>
                        Avoid using fancy graphics or too many design elements. A clean and simple resume works best for ATS systems.
                    </p>
                ),
            },
            {
                semiTitle: "Proofread Everything",
                semiDescription: (
                    <p>
                        Check for spelling, grammar, and formatting mistakes to make sure your resume looks perfect and professional.
                    </p>
                ),
            },
        ]
    },
];

export const ParserContentData = {
    title: (
        <>
            Smart Resume Data Extraction Made Easy
        </>
    ),
    subTitle: "What ",
    description: (
        <>
            A resume parser automatically pulls out key details from resumes—like skills, experience, and education—so recruiters can review <br className="hidden lg:block" /> candidates faster and more efficiently.
        </>
    ),
    sections: ParserContentList
};

const ParserFeatureList = [
    {
        icon: Skills,
        title: "Skills",
        description:
            "Identifies and classifies technical, soft, and industry-specific skills to create a complete skills profile.",
    },
    {
        icon: Experience,
        title: "Experience",
        description:
            "Calculates total professional experience by analyzing job titles, durations, and career progression.",
    },
    {
        icon: Achievements,
        title: "Achievements",
        description:
            "Highlights key milestones and contributions from your career to showcase impact and success.",
    },
    {
        icon: Location,
        title: "Location",
        description:
            "Detects your current or preferred work location to assist with talent mapping and relocation analysis.",
    },
    {
        icon: Education,
        title: "Education",
        description:
            "Summarizes educational background, degrees, institutions, and academic achievements for a complete academic overview.",
    },
    {
        icon: Contacts,
        title: "Contacts",
        description:
            "Collects essential contact details like email, phone, and LinkedIn to enable easy communication.",
    },
    {
        icon: Language,
        title: "Language Proficiency",
        description:
            "Lists language skills and rates your proficiency level in each for accurate representation.",
    },
    {
        icon: Certifications,
        title: "Certifications",
        description:
            "Identifies professional certifications and training to highlight continuous learning and development.",
    },
];

export const ParserFeatureData = {
    title: (
        <>
            Say Hello to Effortless Resume Upload
        </>
    ),
    subTitle: "Features",
    description: (
        <>
            Our system intelligently analyzes and categorizes key resume data—such as skills, experience, and achievements—giving you a <br className="hidden lg:block" /> detailed   and structured profile overview to help streamline hiring decisions.

        </>
    ),
    list: ParserFeatureList
};

const ParserGoalList = [
    {
        icon: Screening,
        title: (
            <>
                Reduce Time on <br className="hidden lg:block" /> Manual Work
            </>
        ),
        description:
            "Automate the extraction and structuring of candidate data to eliminate tedious manual entry. Let your team focus on strategic hiring while AI handles the heavy lifting—saving hours per week.",
    },
    {
        icon: DataBase,
        title: (
            <>
                Candidate Database <br className="hidden lg:block" /> Enrichment
            </>
        ),
        description:
            "Automatically build detailed, up-to-date candidate profiles with every resume upload. Keep your talent pool rich, organized, and ready for future hiring needs without the extra effort.",
    },

];

export const ParserGoalData = {
    title: (
        <>
            Driven by Purpose, Designed for Impact
        </>
    ),
    subTitle: "Our Goals",
    description: (
        <>
            Our mission is simple: to simplify recruitment through smart automation. We help you spend less time on admin tasks  and  more  <br className="hidden lg:block" />  time building connections with the right talent—quickly, efficiently, and with confidence.
        </>
    ),
    list: ParserGoalList
};



const faqsList = [
    {
        question: "What is a resume parser?",
        answer:
            "A resume parser is an AI tool that extracts key information—like skills, experience, education, and contact details—from your uploaded resume and organizes it into a structured format automatically.",
    },
    {
        question: "Do I need to sign up to use the resume parser?",
        answer:
            "Yes, you need to create an account and log in to access and use the Resume Parser feature.",
    },
    {
        question: "How many pages can the resume parser handle?",
        answer:
            "The parser can process resumes of up to 3 pages. If your resume is longer, we recommend condensing it before uploading.",
    },
    {
        question: "Is the resume parser free to use?",
        answer:
            "You get 5 free parsing attempts with the Free Package and 2 coins as a sign-up bonus. After that, you can use coins earned via referrals or purchase more to continue using the feature.",
    },
    {
        question: "Can I customize my resume after it’s parsed?",
        answer:
            "Yes. Once your data is parsed, it appears in the resume editor where you can personalize fonts, layouts, colors, and content before downloading.",
    },
    {
        question: "Is the parsed resume ATS-friendly?",
        answer:
            "Absolutely. Our parser ensures your resume is formatted in a way that passes ATS (Applicant Tracking Systems) to increase your chances with recruiters.",
    },
    {
        question: "How can I get more coins to use the parser?",
        answer:
            "You can earn coins by referring friends or buy coin bundles from our pricing page based on your usage needs.",
    },
];

export const faqs = {
    title: "FREQUENTLY ASKED QUESTIONS",
    faqlist: faqsList
}

