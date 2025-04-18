"use client";
// ===============
import { AutoPlaySlider, CTA } from "@/components";
import ReviewCard from "./ReviewCard";

import { ReactNode } from "react";

type ReviewItem = {
  id?: number;
  text: string;
  author: string;
  role: string;
  avatar: any;
};

type ReviewData = {
  subTitle: string | ReactNode;
  title: string | ReactNode;
  reviewList?: ReviewItem[];
};

type propsType = {
  data: ReviewData;
};

const Reviews = ({ data }: propsType) => {

  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container text-center px-4 relative">
          <h3 className="font-normal text-[18px] md:text-[22px] text-center">
            {data.subTitle}
          </h3>
          <h4 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold mb-4 md:mb-8">
            {data.title}
          </h4>
          <div className="relative">
            <AutoPlaySlider
              options={{ align: "center" }}
              arrowPosition="mt-8 mb-8"
            >
              {data.reviewList?.map((rev, id) => (
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
