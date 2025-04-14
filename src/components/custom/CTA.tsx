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
}) => {
    const baseClasses = `${bgColor} ${txtColor} ${border} w-max h-[40px] px-2 xl:px-4 rounded-md flex items-center`;
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
        <button type="button" className={baseClasses}>{content}</button>
    ) : null;
};

export default CTA;
