import React from 'react'

type BlogIncludedPointsType = {
    id?: any;
    point?: any;
    subHead?: any;
}
type DynPointsType = {
    includedPoints?: BlogIncludedPointsType[]
}
const DynPoints = ({ includedPoints }: DynPointsType) => {
    return (
        <>
            {includedPoints?.length && includedPoints.map((pointData, index) => (
                <div key={index} className={`flex gap-4  ${pointData?.subHead ? '' : 'text-lg font-medium'}`}>
                    <span className={`${pointData?.subHead ? 'text-hamzaPrimary' : 'text-black'}`}>{`${index <= 9 ? '0' : ''}`}{index + 1}:</span>
                    {pointData?.subHead ? <span className='text-hamzaPrimary  font-medium'>{pointData?.subHead}</span> : ''}
                    <p>{pointData?.point}</p>
                </div>
            ))}
        </>
    );
}


export default DynPoints