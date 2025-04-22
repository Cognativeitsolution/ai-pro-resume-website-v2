"use client";
import React from "react";
import Image from "next/image";

type TemplateType = {
    id: number;
    image: string;
    name: string;
    price: string;
};

const imageBaseUrl = process.env.NEXT_PUBLIC_image_baseURL;

type TemplatesCardProps = {
    templates: TemplateType[];
};

const TemplatesCard = ({ templates }: TemplatesCardProps) => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {templates.map((template) => (
                    <div key={template.id} className="flex flex-col items-center justify-center gap-5 cursor-pointer transition-all duration-700">
                        <div className="shadow-lg ring-2 ring-zinc-500/20 rounded-xl overflow-hidden relative before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0">
                            <Image
                                src={imageBaseUrl + template.image}
                                alt={template.name}
                                width={300}
                                height={400}
                                className="w-auto h-auto"
                            />
                        </div>
                        <div className="flex flex-col text-center">
                            <p className="text-[16px] lg:text-[18px] text-zinc-800">
                                {template.name}
                            </p>
                            <p className="text-[16px] lg:text-[18px] font-semibold text-hamzaPrimary">
                                Free
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplatesCard;
