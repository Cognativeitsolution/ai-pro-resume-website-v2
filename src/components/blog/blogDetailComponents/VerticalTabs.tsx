'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

type blogsVerticalTabsDat = {
    title?: any;
    id?: any;
}
type tabsData = {
    tabsData?: blogsVerticalTabsDat[];
    setSection?: any;
    heading?: string;
};
const VerticalTabs = ({ heading, tabsData, setSection }: tabsData) => {
    const [selectedTab, setSelectedTab] = useState<any>()
    const handleSelectedTab = (selectedId: any) => {
        console.log(selectedId, 'selectedId')
        setSelectedTab(selectedId)
        setSection(selectedId)
    }
    useEffect(() => {
        setSelectedTab('#head1')
    }, [])

    return (
        <>
            <div className='p-4 xl:p-8 rounded-md bg-white shadow-md '>
                <h3 className='text-xl mb-4 font-semibold'>{heading}</h3>
                <div className='divide-y-[1px]'>
                    {tabsData?.length && tabsData.map((data) => (
                        <Link
                            key={data?.id}
                            href={data?.id}
                            scroll={true}
                            onClick={() => handleSelectedTab(data?.id)}
                            className={`flex gap-6 cursor-pointer py-3 mb-1 items-center ${selectedTab === data?.id ? 'bg-hamzaPrimary rounded-full ps-5 text-white' : ''}`}
                        >
                            <span className='text-lg font-light'><FaAngleDoubleRight /></span>
                            <p>{data?.title}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </>

    )
}

export default VerticalTabs