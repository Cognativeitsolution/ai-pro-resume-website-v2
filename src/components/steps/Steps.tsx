import Image from "next/image";
import React from "react";
import choose_template from "/public/images/choose_template.svg";
import enlist from "/public/images/enlist.svg";
import download_resume from "/public/images/download_resume.svg";

const Steps = () => {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-5 px-10">
            {/* step#1 */}
            <div className="flex flex-col items-center justify-start gap-3">
              <div className="w-[50px] mb-3">
              <Image src={choose_template} alt="choose_template" />
              </div>
              <h4 className="text-[20px] xl:text-[24px] font-medium text-center">
                Choose your resume Template
              </h4>
              <p className="text-[16px] lg:text-[18px] text-center font-normal">
                Our professional resume templates are designed strictly
                following all industry guidelines and best practices that
                employers look for.
              </p>
            </div>
            {/* step#2 */}
            <div className="flex flex-col items-center justify-start gap-3">
              <div className="w-[50px] mb-3">
              <Image src={enlist} alt="choose_template" />
              </div>
              <h4 className="text-[20px] xl:text-[24px] font-medium text-center">
                Enlist your Capabilities
              </h4>
              <p className="text-[16px] lg:text-[18px] text-center font-normal">
                Not finding the right words to showcase yourself? We´ve added
                thousands of pre-written examples and resume samples. As easy as
                clicking.
              </p>
            </div>
            {/* step#3 */}
            <div className="flex flex-col items-center justify-start gap-3">
              <div className="w-[50px] mb-3">
              <Image src={download_resume} alt="choose_template" />
              </div>
              <h4 className="text-[20px] xl:text-[24px] font-medium text-center">
                Download Your Resume
              </h4>
              <p className="text-[16px] lg:text-[18px] text-center font-normal">
                Start impressing employers. Download your awesome resume and
                land the job you are looking for, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
