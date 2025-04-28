import React, { ReactNode } from 'react';
import Image from 'next/image';
// ============
import CTA from '../custom/CTA';
import ProConsCard from '../blog/blogDetailComponents/ProConsCard';
// ============
import image1 from 'media/images/SkillsSec.webp'
import image2 from 'media/images/grammer.webp'
import image3 from 'media/resume_template_images/template_2.webp'
import pros from 'media/images/pros.webp';
import cons from 'media/images/cons.webp';

import TipPro from 'media/images/TipPro.webp'
import TipProComma from 'media/images/commaIcoon.webp'

type DynamicContentProps = {
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
    titlePro?: string;
    iconPro?: any;
    descriptionPro?: string;
    isTip?: any;
};

const DynamicContent = ({ mainDivClass,
    id,
    title,
    titleTag: TitleTag = 'h2',
    titleClass,
    description,
    description2,
    descBase,
    children,
    CtaText,
    titlePro,
    iconPro,
    descriptionPro,
    isTip,
}: DynamicContentProps) => {
    return (
        <div className={`scroll-mt-32 py-4 ${mainDivClass}`} id={id}>
            <h2 className="">Best Cover Letter Formats to Impress in 2025</h2>
            <p className="text-[16px] lg:text-[18px] text-justify">
                The first thing you choose when making a cover letter is a cover letter format. Selecting the cover letter format is important as it reflects the story of your professional experience to the employers.  This will also affect the chances of you getting your dream job.",
                "But you must be wondering which cover letter would work the best for you? In this guide, we will assist you in deciding the best generic cover letter format so you can have a roadmap to write your cover letter further
            </p>
            <p className="text-[16px] lg:text-[18px] text-justify">
                The first thing you choose when making a cover letter is a cover letter format. Selecting the cover letter format is important as it reflects the story of your professional experience to the employers.  This will also affect the chances of you getting your dream job.",
                "But you must be wondering which cover letter would work the best for you? In this guide, we will assist you in deciding the best generic cover letter format so you can have a roadmap to write your cover letter further
            </p>

            <ul className='list-disc pl-4 mt-2'>
                <li>Candidates who have a steady working</li>
                <li>Candidates who have a steady working</li>
                <li>Candidates who have a steady working</li>
                <li>Candidates who have a steady working</li>
                <li>Candidates who have a steady working</li>
            </ul>

            <Image
                src={image1}
                alt="Resume benefits"
                className='rounded-md w-full my-5'
            />

            <ProConsCard
                title={titlePro}
                icon={TipPro}
                description="Candidates who have a steady working"
                isTip={true}
            />

            <div className="grid grid-cols-2 items-center gap-5 mt-10">
                <div className="">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod fugiat adipisci dolor illo recusandae mollitia, nulla ex asperiores aperiam saepe unde, officiis cum nam exercitationem labore reprehenderit ullam. Quidem.</p>
                    <ul className='list-disc pl-4 my-2'>
                        <li>Candidates who have a steady working history and have</li>
                        <li>Candidates who have a steady working history and have</li>
                        <li>Candidates who have a steady working history and have</li>
                    </ul>
                    <div className=''>
                        <CTA
                            btn
                            text="Import Resume"
                            bgColor="bg-primary hover:bg-PrimaryDark"
                            txtColor="text-white"
                            border="border-0"
                        />
                    </div>
                </div>
                <div className="">
                    <Image
                        src={image2}
                        alt="Resume benefits"
                        className='rounded-md w-full'
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
                <div className="col-span-12">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod fugiat adipisci dolor illo recusandae mollitia, nulla ex asperiores aperiam saepe unde, officiis cum nam exercitationem labore reprehenderit ullam. Quidem.</p>
                </div>
                <div className="col-span-5">
                    <Image
                        src={image3}
                        alt="Resume benefits"
                        className='rounded-md w-full'
                    />
                </div>
                <div className="col-span-7">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <ul className='list-disc pl-4 my-2'>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks </li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks </li>
                    </ul>
                    <div className=''>
                        <CTA
                            btn
                            text="Import Resume"
                            bgColor="bg-primary hover:bg-PrimaryDark"
                            txtColor="text-white"
                            border="border-0"
                        />
                    </div>
                </div>
            </div>
            <ProConsCard
                title={titlePro}
                icon={TipProComma}
                description="Candidates who have a steady working"
                isTip={true}
            />
            <div className="grid grid-cols-2 items-center gap-5 mt-10">
                <div className="">
                    <Image
                        src={image2}
                        alt="Resume benefits"
                        className='rounded-md w-full'
                    />
                </div>
                <div className="">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod fugiat adipisci dolor illo recusandae mollitia, nulla ex asperiores aperiam saepe unde, officiis cum nam exercitationem labore reprehenderit ullam. Quidem.</p>
                    <ul className='list-disc pl-4 my-2'>
                        <li>Candidates who have a steady working history and have</li>
                        <li>Candidates who have a steady working history and have</li>
                        <li>Candidates who have a steady working history and have</li>
                    </ul>
                    <CTA
                        btn
                        text="Import Resume"
                        bgColor="bg-primary hover:bg-PrimaryDark"
                        txtColor="text-white"
                        border="border-0"
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
                <div className="col-span-12">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod fugiat adipisci dolor illo recusandae mollitia, nulla ex asperiores aperiam saepe unde, officiis cum nam exercitationem labore reprehenderit ullam. Quidem.</p>
                </div>
                <div className="col-span-7">
                    <h3 className='font-semibold'>Lorem ipsum dolor</h3>
                    <ul className='list-disc pl-4 my-2'>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks </li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks history and have not taken any long breaks</li>
                        <li>Candidates who have a steady working history and have not taken any long breaks </li>
                    </ul>
                    <CTA
                        btn
                        text="Import Resume"
                        bgColor="bg-primary hover:bg-PrimaryDark"
                        txtColor="text-white"
                        border="border-0"
                    />
                </div>
                <div className="col-span-5">
                    <Image
                        src={image3}
                        alt="Resume benefits"
                        className='rounded-md w-full'
                    />
                </div>
            </div>
        </div>
    );
}

export default DynamicContent