import Link from 'next/link';
import React from 'react';

const InterviewQuestionsCard = ({ cardData }: any) => {
    return (
        <div className="relative rounded-[20px] shadow-xl p-8 bg-slate-600  hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col text justify-between gap-4">

                <div className="h-[100px] sm:h-[80px] md:h-[110px]">
                    <div className="h-[52px] w-[52px] border-hamzaPrimary border-2  text-white font-semibold text-[28px] flex items-center justify-center rounded-full  shadow-2xl">
                        {cardData?.id}
                    </div>

                    <h3 className="text-[20px] capitalize xl:text-[24px] font-semibold text-white mt-2 leading-[30px]">
                        {cardData?.title}
                    </h3>
                </div>

                <p className="text-[16px] h-[65px] lg:h-[85px] xl:h-[65px] text-white mt-1">
                    {cardData?.desc}
                </p>

                <div className="text-base cursor-pointer text-indigo-200 hover:text-indigo-300 flex items-center space-x-1">
                    <span className="underline underline-offset-4 decoration-dotted">Read full guide</span>
                    <span>→</span>
                </div>
            </div>

            <div className={`absolute flex top-2 right-3 -z-10 bg-indigo-300/80  h-full items-start gap-4 p-4  rounded-[20px]  shadow-sm w-[99%] `}></div>
        </div>
    );
};

export default InterviewQuestionsCard;
