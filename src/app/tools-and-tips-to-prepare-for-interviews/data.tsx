// ====================== IMAGES ======================
import image1 from 'media/images/ourBenefitsImg.webp'
import image2 from 'media/images/grammer.webp'
import image3 from 'media/resume_template_images/template_2.webp'
import image4 from 'media/images/20+professionally.webp'
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';
import TipPro from 'media/images/TipPro.webp';
import TipProComma from 'media/images/commaIcoon.webp';

// ====================== BANNER ======================
export const BannerData = {
  title: (
    <>
      To Prepare For Interviews
    </>
  ),
  subtitle: "Tools And Tips",
  description: (
    <>
      The three top cover letter formats for 2025 will help you grab employers' attention  <br className="hidden lg:block" />  and enrich your chances of securing your dream job.
    </>
  ),
};

// ====================== Section 1 Data ======================
const section1Data = {
  title: "Essential Tools and Tips to Prepare for Interviews in 2025",
  paragraphs: [
    "Preparing for an interview isn’t just about reviewing your resume. The right tools and strategies can make all the difference.",
    "Whether you're a first-time applicant or a seasoned professional, this guide will help you approach every interview with confidence and clarity."
  ],
  bulletPoints: [
    "Practice with mock interviews and AI tools",
    "Research companies thoroughly before your interview",
    "Use STAR method for answering behavioral questions",
    "Prepare key questions to ask the interviewer",
    "Leverage tools for scheduling and follow-ups"
  ],
  image: { src: image1, alt: "Interview preparation tools" },
}
// ====================== Tip 1 Data ======================
const section1Tip = {
  title: "Quick Tip",
  icon: TipPro,
  description: "Record yourself answering common questions Recording yourself helps identify nervous habits and areas for improvement. It enhances self-awareness, tone, and delivery. Playback reveals patterns you might miss in the moment. With practice, you’ll sound clearer and more confident.",
  isTip: true
}
// ====================== Section 2 Data ======================
const section2Data = {
  title: "Interview Practice Tools",
  paragraphs: [
    "Online platforms now offer AI-powered mock interviews, real-time feedback, and expert coaching. Practicing regularly helps reduce anxiety and improve delivery."
  ],
  listItems: [
    "Simulate real interview scenarios",
    "Receive feedback on tone and content",
    "Build confidence through repetition"
  ],
  image: { src: image2, alt: "Mock interview tool in action" },
  cta: { text: "Try Practice Tools" }
}
// ====================== Section 3 Data ======================
const section3Data = {
  title: "Research and Company Insights",
  paragraphs: [
    "Knowing the company culture, recent news, and role expectations shows initiative. Use tools like LinkedIn, Glassdoor, and company websites to stay informed."
  ],
  innerTitle: "Insights",
  listItems: [
    "Always email your thank-you note within 24 hours. Keep it short, sincere, and customized to the interview.",
    "Tools like Boomerang or Gmail’s built-in scheduler help you time your messages perfectly.",
    "Mention specific topics discussed and reinforce your enthusiasm for the role.",
    "Include work samples, portfolios, or requested documents with clear labels.",
    "If a response timeline has passed, check in politely without being pushy.",
    "Send a personalized request and reiterate one memorable moment from your conversation.",
    "Templates ensure structure, but always adapt the tone to the specific job.",
    "Avoid slang or emojis. Stay consistent with your professional image.",
    "Wait 3–5 business days before sending a second follow-up message.",
  ],
  image: { src: image3, alt: "Company research tools" },
  cta: { text: "Start Researching" },
}
// ====================== Tip 2 Data ======================
const section3Tip = {
  title: "Pro Tip",
  icon: TipProComma,
  description: "Bring examples of your work or results Real examples show your capabilities in action. They provide proof of your impact and contributions. Specific results are more memorable than vague claims. They help interviewers visualize your value.",
  isTip: true
}
// ====================== Section 4 Data ======================
const section4Data = {
  title: "Behavioral Interview Strategies",
  paragraphs: [
    "Master the STAR method (Situation, Task, Action, Result) to structure your answers clearly. It ensures you highlight your skills with relevant examples."
  ],
  listItems: [
    "Clear, structured responses",
    "Demonstrates problem-solving and adaptability",
    "Shows results-driven thinking"
  ],
  image: { src: image4, alt: "STAR method for interviews" },
  cta: { text: "Learn the STAR Method" },
}
// ====================== Section 5 Data ======================
const section5Data = {
  title: "Follow-Up Tools and Etiquette",
  paragraphs: [
    "Post-interview follow-ups can set you apart. Use templates and scheduling tools to send timely thank-you notes and reminders."
  ],
  innerTitle: "Etiquette",
  listItems: [
    "Always email your thank-you note within 24 hours. Keep it short, sincere, and customized to the interview.",
    "Tools like Boomerang or Gmail’s built-in scheduler help you time your messages perfectly.",
    "Mention specific topics discussed and reinforce your enthusiasm for the role.",
    "Include work samples, portfolios, or requested documents with clear labels.",
    "If a response timeline has passed, check in politely without being pushy.",
    "Send a personalized request and reiterate one memorable moment from your conversation.",
    "Templates ensure structure, but always adapt the tone to the specific job.",
    "Avoid slang or emojis. Stay consistent with your professional image.",
    "Wait 3–5 business days before sending a second follow-up message.",
  ],
  image: { src: image3, alt: "Interview follow-up checklist" },
  cta: { text: "Download Follow-Up Templates" },
}
// ====================== PROS Data ======================
const prosData = {
  title: "Pros",
  icon: pros,
  description: "Provides clarity on strengths, improves confidence, and enhances interview performance Knowing your strengths makes your responses sharper. It boosts self-confidence and reduces hesitation. Clear self-awareness improves how you present yourself. You perform better when you know what you bring to the table.",
  isPro: true
}
// ====================== CONS Data ======================
const consData = {
  title: "Cons",
  icon: cons,
  description: "Over-preparation can lead to sounding robotic; must be balanced with authenticity Too much prep can make answers sound scripted. Interviewers value genuine, conversational responses. Balance preparation with a natural speaking style. Authenticity builds trust and connection.",
  isPro: false
}
// ====================== TABS ======================
const tabsData = [
  { id: 'section1', title: section1Data.title || 'Section 1' },
  { id: 'section2', title: section2Data?.title || 'Section 2' },
  { id: 'section3', title: section3Data?.title || 'Section 3' },
  { id: 'section4', title: section4Data?.title || 'Section 4' },
  { id: 'section5', title: section5Data?.title || 'Section 5' },
  { id: 'section6', title: prosData?.title || 'Pros' },
  { id: 'section7', title: consData?.title || 'Cons' },
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



