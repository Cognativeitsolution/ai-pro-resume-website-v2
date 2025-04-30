import React from 'react';
import Image from 'next/image';
// ==============
import { ProConsCard, CTA } from '@/components';
import InterviewQuestionsCard from '../cards/InterviewQuestionsCard';

type ImageData = {
    src: any;
};

type TipCard = {
    title: string;
    icon: any;
    description: string;
    isTip?: boolean;
    isPro?: boolean;
};

type Section = {
    bulletPoints?: string[];
    title?: string;
    paragraphs?: string[];
    innerTitle?: string;
    image?: ImageData;
    listItems?: string[];
    cta?: { text: string; };
    interviewQuestionList?: any;
};

type DynamicContentProps = {
    id: string;
    data: {
        tip1?: TipCard;
        tip2?: TipCard;
        section1?: Section;
        section2?: Section;
        section3?: Section;
        section4?: Section;
        section5?: Section;
        pros: TipCard;
        cons: TipCard;
    };
};

const DynamicContent = ({ data }: DynamicContentProps) => {
    const {
        tip1,
        tip2,
        section1,
        section2,
        section3,
        section4,
        section5,
        pros,
        cons,
    } = data;

    return (
        <>
            {/* Section 1 */}
            {section1 && (
                <div className="scroll-mt-32" id="section1">
                    <h2 className="text-[20px] sm:text-[25px] md:text-[35px] font-semibold mb-2">{section1.title}</h2>
                    {section1.paragraphs?.map((para, idx) => (
                        <p key={idx} className="text-[16px] text-justify md:text-left mb-2">{para}</p>
                    ))}
                    {section1.bulletPoints && (
                        <ul className="list-disc pl-4 mt-4">
                            {section1.bulletPoints.map((item, idx) => (
                                <li key={idx} className="text-[16px] text-left mb-2">{item}</li>
                            ))}
                        </ul>
                    )}
                    {section1.image && (
                        <div className="my-8">
                            <Image src={section1.image.src} alt="image" className="rounded-md w-full" />
                        </div>
                    )}
                    {/* Tips 1 */}
                    {tip1 && (
                        <ProConsCard
                            title={tip1.title}
                            icon={tip1.icon}
                            description={tip1.description}
                            isTip={tip1.isTip}
                            isPro={tip1.isPro}
                        />
                    )}
                </div>
            )}

            {/* Section 2 */}
            {section2 && (
                <div className="grid grid-cols-2 gap-5 mt-10 scroll-mt-32" id="section2">
                    <div>
                        <h3 className='text-[20px] sm:text-[25px] md:text-[35px] font-semibold mb-2'>{section2.title}</h3>
                        {section2.paragraphs?.map((p, i) => (
                            <p key={i} className="text-[16px] text-justify md:text-left mb-2">{p}</p>
                        ))}
                        {section2.listItems && (
                            <ul className='list-disc pl-4 my-4'>
                                {section2.listItems.map((item, i) => (
                                    <li key={i} className="text-[16px] text-left mb-2">{item}</li>
                                ))}
                            </ul>
                        )}
                        {section2.cta && (
                            <CTA
                                btn
                                text={section2.cta.text}
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        )}
                    </div>
                    {section2.image?.src && (
                        <div>
                            <Image src={section2.image.src} alt="Image" className="rounded-md w-full" />
                        </div>
                    )}
                </div>
            )}

            {/* Section 3 */}
            {section3 && (
                <div className="grid grid-cols-12 gap-5 my-10 scroll-mt-32" id="section3">
                    <div className="col-span-12">
                        <h3 className="text-[20px] sm:text-[25px] md:text-[35px] font-semibold mb-2">{section3.title}</h3>
                        {section3.paragraphs?.map((p, i) => (
                            <p key={i} className="text-[16px] text-justify md:text-left mb-2">{p}</p>
                        ))}
                    </div>
                    <div className="col-span-5">
                        {section3.image && (
                            <Image src={section3.image.src} alt="Image" className="rounded-md w-full" />
                        )}
                    </div>
                    <div className="col-span-7">
                        {section3.innerTitle && (
                            <h4 className="text-[20px] sm:text-[25px] font-semibold mb-2">{section3.innerTitle}</h4>
                        )}
                        {section3.listItems && (
                            <ul className="list-disc pl-4 my-4">
                                {section3.listItems.map((item, i) => (
                                    <li key={i} className="text-[16px] text-left mb-2">{item}</li>
                                ))}
                            </ul>
                        )}
                        {section3.cta && (
                            <CTA
                                btn
                                text={section3.cta.text}
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        )}
                    </div>
                    {/* Tips 2 */}
                    <div className="col-span-12">
                        {tip2 && (
                            <ProConsCard
                                title={tip2.title}
                                icon={tip2.icon}
                                description={tip2.description}
                                isTip={tip2.isTip}
                                isPro={tip2.isPro}
                            />
                        )}
                    </div>

                    {section3?.interviewQuestionList?.length && <div className="col-span-12 mb-4">
                        <h3 className="text-[20px] sm:text-[25px] md:text-[35px] font-semibold mt-3 mb-5">The Most Common Job Interview Questions – Answered</h3>
                        <div className='grid grid-cols-2  gap-5'>
                            {
                                section3?.interviewQuestionList?.map((data: any, index: any) => (
                                    <div id={index}>
                                        <InterviewQuestionsCard cardData={data} />

                                    </div>
                                ))
                            }
                        </div>
                    </div>}

                </div>
            )}

            {/* Section 4 */}
            {section4 && (
                <div className="grid grid-cols-2 gap-5 mt-10 scroll-mt-32" id="section4">
                    {section4.image?.src && (
                        <div>
                            <Image src={section4.image.src} alt="Image" className="rounded-md w-full" />
                        </div>
                    )}
                    <div>
                        <h3 className='text-[20px] sm:text-[25px] md:text-[35px] font-semibold mb-2'>{section4.title}</h3>
                        {section4.paragraphs?.map((p, i) => (
                            <p key={i} className="text-[16px] text-justify md:text-left mb-2">{p}</p>
                        ))}
                        {section4.listItems && (
                            <ul className='list-disc pl-4 my-4'>
                                {section4.listItems.map((item, i) => (
                                    <li key={i} className="text-[16px] text-left mb-2">{item}</li>
                                ))}
                            </ul>
                        )}
                        {section4.cta && (
                            <CTA
                                btn
                                text={section4.cta.text}
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Section 5 */}
            {section5 && (
                <div className="grid grid-cols-12 gap-5 mt-10 scroll-mt-32" id="section5">
                    <div className="col-span-12">
                        <h3 className="text-[20px] sm:text-[25px] md:text-[35px] font-semibold mb-2">{section5.title}</h3>
                        {section5.paragraphs?.map((p, i) => (
                            <p key={i} className="text-[16px] text-justify md:text-left mb-2">{p}</p>
                        ))}
                    </div>
                    <div className="col-span-7">
                        {section5.innerTitle && (
                            <h4 className="text-[20px] sm:text-[25px] font-semibold mb-2">{section5.innerTitle}</h4>
                        )}
                        {section5.listItems && (
                            <ul className="list-disc pl-4 my-4">
                                {section5.listItems.map((item, i) => (
                                    <li key={i} className="text-[16px] text-left mb-2">{item}</li>
                                ))}
                            </ul>
                        )}
                        {section5.cta && (
                            <CTA
                                btn
                                text={section5.cta.text}
                                bgColor="bg-primary hover:bg-PrimaryDark"
                                txtColor="text-white"
                                border="border-0"
                            />
                        )}
                    </div>
                    <div className="col-span-5">
                        {section5.image && (
                            <Image src={section5.image.src} alt="Image" className="rounded-md w-full" />
                        )}
                    </div>
                </div>
            )}

            {/* Pros */}
            <div className="flex flex-col gap-5 mt-5">
                {pros && (
                    <div className="scroll-mt-32" id="section6">
                        <ProConsCard
                            title={pros.title}
                            icon={pros.icon}
                            description={pros.description}
                            isTip={pros.isTip}
                            isPro={pros.isPro}
                        />
                    </div>
                )}
                {/* Pros and Cons */}
                {cons && (
                    <div className="scroll-mt-32" id="section7">
                        <ProConsCard
                            title={cons.title}
                            icon={cons.icon}
                            description={cons.description}
                            isTip={cons.isTip}
                            isPro={cons.isPro}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default DynamicContent;
