"use client";
import React, { useMemo } from "react";
import Image from "next/image";
// ===============
import { FaCrown, FaEye } from 'react-icons/fa';
import { LiaAwardSolid } from "react-icons/lia";
// ===============
import { CTA } from "@/components";

type TemplateType = {
    id: number;
    image: string;
    name: string;
    is_paid: number;
};

const imageBaseUrl = process.env.NEXT_PUBLIC_image_baseURL;

type TemplatesCardProps = {
    templates: TemplateType[];
    userPurchasedTemplates: TemplateType[];
};

const TemplatesCard = ({ templates, userPurchasedTemplates }: TemplatesCardProps) => {
    // Add random viewCount using useMemo to make it stable during component lifecycle
    const templatesWithViewCounts = useMemo(() => {
        return templates.map((template) => ({
            ...template,
            viewCount: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
        }));
    }, [templates]);

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {templatesWithViewCounts.map((template) => {
                    const isPurchased = userPurchasedTemplates.some(
                        (purchased) => purchased.id === template.id
                    );
                    return (
                        <div key={template.id} className="flex flex-col gap-5 p-3 rounded-lg bg-indigo-200/20 backdrop-blur-none border-2 border-white cursor-pointer transition-all duration-1000 group">
                            <div className="flex items-center justify-between">
                                <p className="text-[16px] lg:text-[18px] font-medium text-zinc-800">
                                    {template.name}
                                </p>
                                {/* View Counts */}
                                <div className="flex items-center justify-center gap-1 h-7 px-2 rounded-md bg-slate-600">
                                    <FaEye className="text-white" size={15} />
                                    <span className="text-[14px] text-white font-medium">{template.viewCount}</span>
                                </div>
                            </div>

                            <div className="ring-2 ring-zinc-500/20 rounded-lg shadow-lg overflow-hidden relative">
                                {/* Templates Badge */}
                                {isPurchased ? (
                                    <div className="absolute -right-[33px] -top-[18px] transform rotate-45 w-[80px] h-[50px] pb-1 flex justify-center items-end bg-PrimaryDark">
                                        <LiaAwardSolid className="text-[22px] text-white" />
                                    </div>
                                ) : (
                                    template.is_paid === 1 && (
                                        <div className="absolute -right-[33px] -top-[18px] transform rotate-45 w-[80px] h-[50px] pb-1 flex justify-center items-end bg-PrimaryDark">
                                            <FaCrown className="text-[20px] text-yellow-500" />
                                        </div>
                                    )
                                )}
                                {/* Templates Images */}
                                <Image
                                    src={imageBaseUrl + template.image}
                                    alt={template.name}
                                    width={300}
                                    height={400}
                                    className="w-full lg:w-auto h-auto"
                                />
                                {/* Templates Before */}
                                <div className="flex items-center justify-center w-full h-full bg-slate-800/90 absolute top-0 left-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                                    <div className="translate-y-56 group-hover:-translate-y-0 transition-all duration-1000">
                                        <CTA
                                            btn
                                            text="Use This Template"
                                            bgColor="bg-PrimaryDark hover:bg-transparent"
                                            txtColor="text-white"
                                            border="border border-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TemplatesCard;
