import Link from 'next/link';
import React from 'react';

const InterviewQuestionsCard = ({ cardData }: any) => {
    return (
        <div className="rounded-[30px] shadow-xl p-8 bg-white  border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col justify-between gap-4">

                <div className="h-[80px] md:h-[110px] ">
                    <div className="h-[52px] w-[52px] font-semibold text-[28px] flex items-center justify-center rounded-full bg-hamzaPrimary/20 text-hamzaPrimary  shadow-sm">
                        {cardData?.id}
                    </div>

                    <h3 className="text-[20px] xl:text-[22px] font-semibold text-gray-900 mt-2 leading-[30px]">
                        {cardData?.title}
                    </h3>
                </div>

                <p className="text-[15px]  lg:h-[85px]  xl:h-[50px]  text-gray-600 mt-1 ">
                    {cardData?.desc}
                </p>
                <div className="text-sm cursor-pointer text-hamzaPrimary hover:text-indigo-800 flex items-center space-x-1">
                    <span className="underline underline-offset-4 decoration-dotted">Read full guide</span>
                    <span>→</span>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuestionsCard;
