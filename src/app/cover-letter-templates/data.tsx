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
import image5 from "media/privacyPolicy/image-5.webp";
// ==========================

export const BannerData = {
  title: (
    <>
      Mark your First Impression impactful with our unique Cover Letter templates.
    </>
  ),
  subtitle: "Cover Letter Templates",
  description: "AI Pro Resume offers the best cover letter templates to assist you in getting your dream job. Try our sample cover letter templates to save time and effort. We have pre-written resumes and professional cover letter template examples that give your cover letter a polished and proficient look.",
  subdesc: true,
  linkText: "Resume Templates",
  href: "/resume-templates",
};
// ==========================
const customerIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon1, icon2, icon3, icon4, icon5, icon6];

export const IconData = {
  title: "Our customers were hired by:",
  icons: customerIcons
};
// ==========================
export const WelcomeData = {
  title: (<>Steps To Create a Cover Letter with Professional <span className="text-hamzaPrimary">Cover Letter Templates</span></>),
  description: [
    "Start creating your cover letter by logging into your AI Pro Resume account. Once logged in, go to the Tools section in the header. Click on Write a cover letter to begin. A new page will open. On the left side, you will see a preview of your cover letter; on the right, you will find the input fields. Ai Pro Resume offers auto-generated cover letter options to speed up your cover letter creation process. You must provide your hiring manager details, company name, and job position."
  ]
};

// ==========================
export const FeaturesData = [
  {
    image: image1,
    title: "Resume-Based Cover Letter Creation",
    list: [
      "If you create your resume using AI Pro Resume, your cover letter is just a click away.",
      "Select Write a Cover Letter, and we will generate a polished cover letter using the details from your resume.",
      "You must select the job title, add the job description, and tick the check box beneath the job description section.",
      "This option eliminates the need to add extra information, saving you time while ensuring your cover letter highlights your skills and accomplishments.",
      "Now add the hiring manager details and company name you are applying to and click on generate.",
      "Within seconds, you will have your professionally AI-generated cover letter."
    ]
  },
  {
    image: image2,
    title: "Add Your Signature",
    description: "Go to the Signatures section. You will have three options to create your signature:",
    list: [
      (<> <b>Draw:</b> Use your mouse or touchscreen to draw your signature. </>),
      (<> <b>Upload:</b> Upload an image of your signature. </>),
      (<> <b>Type:</b> simply type your name.</>),
    ],
    description2: "After creating your signature, click Save to apply it to your cover letter",
    reverse: true
  },
  {
    image: image3,
    title: "Switch Templates",
    description: "AI Pro Resume offers a variety of professional cover letter templates from which to select. You can switch templates anytime if you change your mind while making your cover letter and want a different look. Just go to the Switch Template section and choose your preferred design."
  },
  {
    image: image4,
    title: "Customize Fonts and Theme",
    description: "Further, personalize your cover letter by adjusting the following:",
    list: [
      (<> <b>Font Style:</b> Choose your preferred writing style. </>),
      (<> <b>Font Size:</b> Adjust the size of the text for readability. </>),
      (<> <b>Themes:</b> Select a theme and color scheme that matches your professional brand.</>),
    ],
    reverse: true
  },
  {
    image: image5,
    title: "Download or Share Your Cover Letter",
    description: [
      "Once satisfied with your cover letter, click the Download button to save it as a PDF.",
      "You can also directly share your cover letter through:"
    ],
    list: [
      "Email",
      "WhatsApp",
      "Facebook",
      "LinkedIn",
    ],
    description2: "The duplicate option allows you to make additional cover letter versions without overwriting the original.",
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
