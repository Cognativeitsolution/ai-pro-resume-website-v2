import React from "react";
import CTA from "../custom/CTA";

const Welcome = () => {


    return (
        <>
            <section className="pb-5 xl:pb-0 pt-0 xl:pt-10">
                <div className="container mx-auto ">
                    <h2 className="text-[20px] sm:text-[25px] md:text-[35px] leading-[30px] sm:leading-[35px] md:leading-[45px] font-bold mb-2">
                        Welcome to AI Pro Resume
                    </h2>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] text-justify md:text-left mb-5">where your privacy is our top priority. In this era of rapid technological advancements, safeguarding your personal information is more critical than ever. At AI Pro Resume, we take this responsibility seriously and have crafted a comprehensive Privacy Policy to outline how we handle, protect, and utilize your data. We appreciate your trust in us, and our commitment extends beyond privacy to providing valuable services like Professional resume help, leveraging the capabilities of our AI resume generator and Resume helper.</p>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] text-justify md:text-left">As you explore our platform, you'll find a wealth of resources, including free resume templates and resume format examples to assist you in crafting a compelling professional narrative. We invite you to delve into the details of our Privacy Policy and discover how AI Pro Resume can be your trusted partner in protecting your privacy and advancing your career with our array of professional services.</p>
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-2 my-5">
                    <CTA
                        number
                        text="Call Now"
                        bgColor="bg-primary hover:bg-PrimaryDark"
                        txtColor="text-white"
                        border="border-2 border-hamzaPrimary"
                    />
                    <CTA
                        email
                        text="Email Us"
                        bgColor="bg-white hover:bg-primary"
                        txtColor="text-hamzaPrimary hover:text-white"
                        border="border-2 border-hamzaPrimary"
                    />
                    <CTA
                        link
                        text="Visit Page"
                        href="https://example.com"
                        bgColor="bg-primary"
                        txtColor="text-white"
                        border="border-0"
                    />
                    <CTA
                        btn
                        text="Submit Form"
                        bgColor="bg-white hover:bg-black"
                        txtColor="text-hamzaPrimary hover:text-white"
                        border="border-0"
                    />
                </div> */}
            </section>
        </>
    );
};

export default Welcome;
