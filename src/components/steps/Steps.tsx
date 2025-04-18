import React from "react";
import Image from "next/image";

type StepItem = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

type StepsProps = {
  data: StepItem[];
};

const Steps = ({ data }: StepsProps) => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-5 px-10">
            {data.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center justify-start gap-3"
              >
                <div className="w-[50px] mb-3">
                  <Image src={step.icon} alt={step.title} />
                </div>
                <h3 className="text-[20px] xl:text-[24px] font-medium text-center">
                  {step.title}
                </h3>
                <p className="text-[16px] lg:text-[18px] text-center font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
