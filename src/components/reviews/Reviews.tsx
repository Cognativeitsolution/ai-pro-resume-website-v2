"use client";
// ===============
import { AutoPlaySlider, CTA } from "@/components";
import ReviewCard from "./ReviewCard";
// ===============
import reviewImage from "../../../public/images/reviews.svg";
import reviewAvatar from "../../../public/images/reviewAvatar.svg";

const Reviews = () => {

  const reviews = [
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

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container text-center px-4 relative">
          <h3 className="font-normal text-[18px] md:text-[22px] text-center">
            Reviews
          </h3>
          <h4 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4 md:mb-8">
            Your Resume Is An Extension Of Yourself – Make <br className="hidden md:block" /> One That’s Truly You
          </h4>
          <div className="relative">
            <AutoPlaySlider
              options={{ align: "center" }}
              arrowPosition="mt-8 mb-8"
            >
              {reviews.map((rev, id) => (
                <div key={id} className="grow-0 shrink-0 basis-[100%] pl-5" >
                  <ReviewCard
                    id={id}
                    text={rev.text}
                    author={rev.author}
                    role={rev.role}
                    avatar={rev.avatar}
                  />
                </div>
              ))}
            </AutoPlaySlider>
          </div>
          <div className="flex justify-center mb-6">
            <CTA
              btn
              text="Create Resume"
              bgColor="bg-primary hover:bg-PrimaryDark"
              txtColor="text-white"
              border="border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
