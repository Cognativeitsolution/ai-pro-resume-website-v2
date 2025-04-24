import React, { ReactNode } from 'react';

type DynMainDivProps = {
    mainDivClass?: any;
    id: string;
    title?: string | ReactNode;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4'; // Extendable
    titleClass?: string;
    description?: ReactNode;
    descBase?: ReactNode | any[];
    children?: ReactNode;
};

export default function DynMainDiv({
    mainDivClass,
    id,
    title,
    titleTag: TitleTag = 'h2',
    titleClass,
    description,
    descBase,
    children,
}: DynMainDivProps) {
    return (
        <div className={`scroll-mt-32 ${mainDivClass}`} id={id}>
            <TitleTag className={titleClass}>{title}</TitleTag>
            {description &&
                <p className="text-[16px] lg:text-[18px] text-justify">
                    {description}
                </p>
            }
            {/* {descBase} */}

            {Array.isArray(descBase) ? (
                descBase?.map((item: any, index: number) => {
                    return <p key={index} className='text-base mt-2 first:mt-0'>{item}</p>;
                })
            ) :
                <p className='text-base'>{descBase}</p>
            }

            {children}
        </div>
    );
}
