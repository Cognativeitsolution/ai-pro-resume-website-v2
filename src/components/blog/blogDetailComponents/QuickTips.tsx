import React from 'react'
import prosIcon from 'media/images/Isolation_Mode.webp';
import Image from 'next/image';

const QuickTips = () => {
    return (
        <div className='relative bg-[#F8E6A7] rounded-lg flex items-center h-[90px] sm:h-[85px] my-5 shadow-md'>
            <Image className='absolute left-4 bottom-3 sm:bottom-2' src={prosIcon} alt="blog detail" height={100} width={100} />
            <p className='absolute left-32 px-2 h-[80%] items-center flex  text-xs sm:text-base overflow-hidden'>
                Lorem ipsum dolor sit amet consectetur. Odio blandit eget tellus mi neque lorem leo Amet facilisis neque dictumst nulla nunc eget aliquam sit.
            </p>
        </div>
    )
}

export default QuickTips