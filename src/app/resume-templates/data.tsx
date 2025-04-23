import icon1 from "media/customerIcons/saudi.webp";
import icon2 from "media/customerIcons/aerotek.webp";
import icon3 from "media/customerIcons/geti.webp";
import icon4 from "media/customerIcons/ladders.webp";
import icon5 from "media/customerIcons/snagajob.webp";
import icon6 from "media/customerIcons/alison.webp";
// ==========================
import image1 from "media/privacyPolicy/image-1.webp";
import image2 from "media/privacyPolicy/image-2.webp";
import image3 from "media/privacyPolicy/image-3.webp";
import image4 from "media/privacyPolicy/image-4.webp";
// ==========================

export const BannerData = {
  title: (
    <>
      Ready to Stand Out? <br className="hidden lg:block" /> Pick the Perfect Resume Template
    </>
  ),
  subtitle: "Resume Templates",
  description: "We have templates for all. Whether you are looking for a basic resume template, a simple modern resume template, a resume portfolio template, or an outdoor professional guiding resume template, we have got you covered. AI Pro Resumes offers the best professional resume templates that are ATS-friendly and customizable. Let’s now catch the recruiter's attention with a clean simple resume template!",
  subdesc: true,
  linkText: "Cover letter Templates",
  href: "/cover-letter-templates",
};
// ==========================
const customerIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon1, icon2, icon3, icon4, icon5, icon6];

export const IconData = {
  title: "Our customers were hired by:",
  icons: customerIcons
};
// ==========================
export const WelcomeData = {
  title: (<>Build Your Perfect Resume with <span className="text-hamzaPrimary">Professional Resume Template</span></>),
  description: [
    "AI Pro Resume offers several professional and free resume templates. Whether you are a student, fresher, or experienced professional, we have the best professional resume templates for you. All our templates are customizable; you can modify font, color, and layouts according to your needs.",
    "All our templates are ATS-friendly. They can pass applicant tracking systems. You are in the right place if you do not know how to choose the perfect template from the two-column resume template."
  ]
};

// ==========================
export const FeaturesData = [
  {
    image: image1,
    title: "Steps to Create A Resume With Best Professional Resume Template",
    description: [
      "Creating a professional resume takes a lot of time and effort. However, with AI Pro Resume, you can easily create a professional resume and cover letter. We have everything from two-column resume templates​ to clean, simple resume templates, resume portfolio templates, curriculum templates​, basic resume templates, and simple modern resume templates to meet your needs.",
      "Follow the steps below to design a resume that help you in getting your dream job."
    ],
    list: [
      "Go to the AI pro resume home page.",
      "Click the login button and sign up for your account.",
      "Now go to resume options in the header of the website.",
      "Click and press to resume template and explore the templates.",
      "Select any template you like.",
      "You will head to the next page with the template customization options.",
      "On the right side of the screen, you will find the option to edit your resume.",
      "On the left hand, you will get a preview of your resume.",
    ],
  },
  {
    image: image2,
    title: "Fill all the details in the following sections:",
    list: [
      (<> <b>Header:</b> Add your name, email, contact information, job position, LinkedIn URL, postal address, country, state, and city name. </>),
      (<> <b>Summary:</b> Click on the summary sections and write a small professional summary. When you start writing your summary, AI-based suggestions will automatically appear. If you want to use these suggestions, simply click on them to add them to your summary. </>),
      (<> <b>Experience:</b> At the experience sections, click in to add a new section. List your previous job experiences with dates, job titles, and responsibilities. You can use AI-based suggestion features to create incredible job responsibilities. It will appear in the bulb icon on the right corner of the job responses sections. Just click the icon and select your preferred job responsibilities. Once you get it, click on that, and it will appear in the job responsibility section. Make changes to the responsibilities if you want to make it more personalized. </>),
      (<> <b>Education:</b> Enter your educational background, including degrees, institutions, grades, and dates. </>),
      (<> <b>Technical Skills:</b> Add relevant technical skills; if you want to add a custom skill, type and press enter. </>),
      (<> <b>Soft Skills:</b> List interpersonal skills, such as communication, teamwork, or problem-solving. </>),
      (<> <b>Certificates:</b> Press add new and include any certifications or professional development courses you have completed. </>),
      (<> <b>Honors and Awards:</b> Select Add New and highlight any awards or recognition you have received. </>),
      (<> <b>Languages:</b> Mention any languages you speak or write fluently. </>),
      (<> <b>References:</b> Add references or indicate availability upon request. </>),
      (<> <b>Custom Section:</b> If necessary, include any additional information relevant to your career.</>),
    ],
    reverse: true
  },
  {
    image: image3,
    title: "Switch Templates",
    description: "Now, after filling in all the details, if you think it's not the right template and want to change it, no worries; you can do it with just a single click. Click switch template, and choose the one that suits your details best. That’s it. Your complete data will be migrated to the new template. You can also change color, font, and layout according to your needs. You can even add pictures to your resume, as some of our templates have pictures. Now, you have a professionally crafted resume with a perfect resume template in no time."
  },
  {
    image: image4,
    title: "Our Unique Features That Fit Your Needs",
    list: [
      "Download your resume in PDF format.",
      "Find matching cover letter templates to pair perfectly with your resume. You will find that in our professional cover letter template sections.",
      "Work on the go with our mobile-friendly tools.",
      "Save time with pre-made templates for fields like:",
      "Creative & Cultural Fields",
      "Education & Learning",
      "Engineering & Scientific",
      "Food Service",
      "Information Technology (IT)",
      "Maintenance & Repair",
      "Medicine Healthcare & Wellbeing",
      "Office & Administrative"
    ],
    reverse: true
  },
];

// ==========================
const ResumeExamplesPagefaqsList = [
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
  faqlist: ResumeExamplesPagefaqsList,
};
