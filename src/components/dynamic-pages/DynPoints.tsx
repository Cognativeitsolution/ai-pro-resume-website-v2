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
                <div key={index} className={`flex gap-2 sm:gap-4 ${pointData?.subHead ? '' : 'text-base sm:text-lg font-medium'}`}>
                    {showSeriel && <span className={`${pointData?.subHead ? 'text-hamzaPrimary' : 'text-black'}`}>{`${index <= 9 ? '0' : ''}`}{index + 1}:</span>}
                    {pointData?.subHead ? <span className={`text-${defaultColor} font-medium`}>{pointData?.subHead}</span> : ''}
                    <p>{pointData?.point}</p>
                </div>
            ))}
        </>
    );
}


export default DynPoints