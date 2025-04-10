import Image from "next/image";
import React from "react";
import choose_template from "/public/images/choose_template.svg";
import enlist from "/public/images/enlist.svg";
import download_resume from "/public/images/download_resume.svg";

const Steps = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10">
            {/* step#1 */}
            <div className="flex flex-col items-center justify-center gap-3">
              <Image src={choose_template} alt="choose_template" />
              <p className="text-[20px] font-medium">
                Choose your resume Template
              </p>
              <p className="text-[16px] text-center font-normal">
                Our professional resume templates are designed strictly following
                all industry guidelines and best practices that employers look
                for.
              </p>
            </div>
            {/* step#2 */}
            <div className="flex flex-col items-center justify-center gap-3">
              <Image src={enlist} alt="choose_template" />
              <p className="text-[20px] font-medium">Enlist your Capabilities</p>
              <p className="text-[16px] text-center font-normal">
                Not finding the right words to showcase yourself? We´ve added
                thousands of pre-written examples and resume samples. As easy as
                clicking.
              </p>
            </div>
            {/* step#3 */}
            <div className="flex flex-col items-center justify-center gap-3">
              <Image src={download_resume} alt="choose_template" />
              <p className="text-[20px] font-medium">Download Your Resume</p>
              <p className="text-[16px] text-center font-normal">
                Start impressing employers. Download your awesome resume and land
                the job you are looking for, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
