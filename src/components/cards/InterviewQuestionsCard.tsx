import Link from 'next/link';
import React from 'react';

const InterviewQuestionsCard = ({ cardData }: any) => {
    return (
        <div className="rounded-[30px] shadow-xl p-8 h-[280px] bg-white  border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col gap-5">
                <div className="h-[52px] w-[52px] flex items-center justify-center rounded-full bg-hamzaPrimary/20 text-hamzaPrimary font-bold text-[28px] shadow-sm">
                    {cardData?.id}
                </div>
                <div>
                    <h3 className="text-[22px] font-semibold text-gray-900 leading-snug mb-2">
                        {cardData?.title}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                        {cardData?.desc}
                    </p>
                    <div className="text-sm cursor-pointer text-hamzaPrimary hover:text-indigo-800 flex items-center space-x-1">
                        <span className="underline underline-offset-4 decoration-dotted">Read full guide</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewQuestionsCard;
