import Image from "next/image";
import React from "react";
import ats_bg from "/public/images/ats_bg.svg";
import ats_score from "/public/images/ats_score.svg";
import robo_2 from "../../../public/images/robo_2.gif";

import inner_banner_bg from "media/images/inner-banner_bg.svg";

const Counter = () => {
    return (
        <section className="py-4 lg:py-10 xl:py-8 ">
            <div className="container">
                <div className={`relative overflow-hidden bg-no-repeat bg-cover bg-center rounded-3xl flex items-start justify-center`}
                    style={{
                        backgroundImage: `url(${ats_bg.src})`
                    }}>
                    <div className="w-8/12 text-center">
                        <h3 className="text-white text-2xl md:text-3xl leading-tight">
                            Start your journey toward your dream job with AI Pro Resume.
                        </h3>
                        <p className="text-white mt-4 text-sm md:text-base">
                            AI PRO RESUME Resumes And Cover Letters Are Vigorously Tested
                            Against Major ATS Systems To Ensure Complete Parsability
                        </p>
                    </div>
                    {/* <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-10 relative">
                        
                        <div className="md:w-1/2 text-center pl-0 sm:pl-[50px] md:text-left">
                            <h2 className="text-white font-semibold text-2xl md:text-3xl leading-tight">
                                Resumes Optimized For Applicant <br /> Tracking Systems (ATS)
                            </h2>
                            <p className="text-white mt-4 text-sm md:text-base">
                                AI PRO RESUME Resumes And Cover Letters Are Vigorously Tested
                                Against Major ATS Systems To Ensure Complete Parsability
                            </p>
                            <button className="mt-6 px-5 py-2 rounded-md bg-primary text-white font-semibold hover:bg-gray-100 transition">
                                Check ATS Score
                            </button>
                        </div>

                        
                        <div className="md:w-1/2 flex items-center justify-center relative">
                            <Image
                                src={ats_score}
                                alt="Resume Previews"
                                width={350}
                                height={350}
                                className="z-10"
                            />
                            <Image
                                src={robo_2}
                                alt="Robot Icon"
                                width={150}
                                height={150}
                                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-x-1/4 md:translate-y-1/4 lg:translate-x-[-80px] lg:translate-y-12 z-20"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section >
    );
};

export default Counter;

