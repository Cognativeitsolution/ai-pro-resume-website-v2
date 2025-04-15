"use client";
import React from "react";

interface CTAProps {
    text: string;
    href?: string;
    number?: boolean;
    email?: boolean;
    link?: boolean;
    btn?: boolean;
    bgColor: string;
    txtColor: string;
    border: string;
    handleClick?: () => void;
    width?: string;
}

const CTA: React.FC<CTAProps> = ({
    text,
    href = "#",
    number,
    email,
    link,
    btn,
    bgColor,
    txtColor,
    border,
    handleClick,
    width,
}) => {
    const baseClasses = `${bgColor} ${txtColor} ${border} ${width ? width : "w-max"} w-max h-[40px] px-4 rounded-md flex items-center`;
    const content = (
        <span className="text-[16px] xl:text-[18px] font-semibold tracking-wide">
            {text}
        </span>
    );

    return number ? (
        <a href="tel:123456789" className={baseClasses}>{content}</a>
    ) : email ? (
        <a href="mailto:abc@xyz.com" className={baseClasses}>{content}</a>
    ) : link ? (
        <a href={href} className={baseClasses}>{content}</a>
    ) : btn ? (
        <button onClick={handleClick} type="button" className={baseClasses}>{content}</button>
    ) : null;
};

export default CTA;



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