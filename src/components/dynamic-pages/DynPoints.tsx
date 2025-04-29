import React from 'react'

type BlogIncludedPointsType = {
    id?: any;
    point?: any;
    subHead?: any;
}
type DynPointsType = {
    includedPoints?: BlogIncludedPointsType[];
    showSeriel?: boolean;
    defaultColor?: string;
}
const DynPoints = ({ includedPoints, showSeriel = true, defaultColor = 'hamzaPrimary' }: DynPointsType) => {
    return (
        <>
            {includedPoints?.length && includedPoints.map((pointData, index) => (
                <div key={index} className={`flex  ${pointData?.subHead ? "flex-col" : ""} md:flex-row md:gap-4 my-2 ${pointData?.subHead ? '' : 'text-[16px] sm:text-[18px] font-medium'}`}>
                    <div className='flex gap-2'>
                        {showSeriel && <span className={`${pointData?.subHead ? 'text-hamzaPrimary' : 'text-black'}`}>{`${index <= 9 ? '0' : ''}`}{index + 1}:</span>}
                        {pointData?.subHead ? <span className={`capitalize text-${defaultColor} text-[15px] sm:text-[16px] font-medium`}>{pointData?.subHead}</span> : ''}
                    </div>
                    <p className='pl-3 md:pl-0 text-[15px] sm:text-[16px] font-normal first-letter:capitalize'>{pointData?.point}</p>
                </div>
            ))}
        </>
    );
}


export default DynPoints