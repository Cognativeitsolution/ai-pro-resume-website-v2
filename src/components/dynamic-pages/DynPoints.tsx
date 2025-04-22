import React from 'react'

type BlogIncludedPointsType = {
    id?: any;
    point?: any;
}
type DynPointsType = {
    includedPoints?: BlogIncludedPointsType[]
}
const DynPoints = ({ includedPoints }: DynPointsType) => {
    return (
        <>
            {includedPoints?.length && includedPoints.map((pointData, index) => (
                <div key={index} className='flex gap-4 text-lg font-medium'>
                    <span>{`${index <= 9 ? '0' : ''}`}{index}:</span>
                    <p>{pointData?.point}</p>
                </div>
            ))}
        </>
    );
}


export default DynPoints