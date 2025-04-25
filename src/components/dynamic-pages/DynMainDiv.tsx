import React, { ReactNode } from 'react';
import CTA from '../custom/CTA';

type DynMainDivProps = {
    mainDivClass?: any;
    id: string;
    title?: string | ReactNode;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'; // Extendable
    titleClass?: string;
    description?: ReactNode | any[];
    description2?: ReactNode | any[];
    descBase?: ReactNode | any[];
    children?: ReactNode;
    CtaText?: any;
};

export default function DynMainDiv({
    mainDivClass,
    id,
    title,
    titleTag: TitleTag = 'h2',
    titleClass,
    description,
    description2,
    descBase,
    children,
    CtaText
}: DynMainDivProps) {
    return (
        <div className={`scroll-mt-32 border-2 border-rose-950 ${mainDivClass}`} id={id}>
            <TitleTag className={titleClass}>{title}</TitleTag>

            {Array.isArray(description) ? (
                description?.map((item: any, index: number) => {
                    return <p key={index} className="text-[16px] lg:text-[18px] text-justify">
                        {item}
                    </p>;
                })
            ) :
                <p className="text-[16px] lg:text-[18px] text-justify">
                    {description}
                </p>
            }
            {Array.isArray(descBase) ? (
                descBase?.map((item: any, index: number) => {
                    return <p key={index} className='text-base border border-rose-950 mt-2 first:mt-0'>{item}</p>;
                })
            ) :
                <p className='text-base'>{descBase}</p>
            }

            {children}

            {Array.isArray(description2) ? (
                description2?.map((item: any, index: number) => {
                    return <p key={index} className="text-base mt-2">
                        {item}
                    </p>;
                })
            ) :
                <p className="text-base mt-2">
                    {description2}
                </p>
            }
            {CtaText && <div className='my-8 flex justify-center border-4'>
                <CTA
                    btn
                    text={CtaText}
                    bgColor="bg-primary hover:bg-PrimaryDark"
                    txtColor="text-white"
                    border="border-0"
                />
            </div>}
        </div>
    );
}
