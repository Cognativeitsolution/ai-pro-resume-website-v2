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
        <div className={`scroll-mt-32 py-4 ${mainDivClass}`} id={id}>
            <TitleTag className={titleClass}>{title}</TitleTag>

            {description && Array.isArray(description) ? (
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
            {descBase && Array.isArray(descBase) ? (
                descBase?.map((item: any, index: number) => {
                    return <p key={index} className='text-base  mt-2 first:mt-0'>{item}</p>;
                })
            ) :
                <p className='text-base'>{descBase}</p>
            }

            {children}

            {description2 && Array.isArray(description2) ? (
                description2?.map((item: any, index: number) => {
                    return <p key={index} className="text-base mt-8 border-4">
                        {item}
                    </p>;
                })
            ) : (
                description2 && (<p className="text-base mt-8">
                    {description2}
                </p>)
            )

            }
            {CtaText && <div className='my-4 xl:my-8 flex justify-center '>
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
