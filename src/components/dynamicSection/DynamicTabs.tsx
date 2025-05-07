'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// ==============
import { FaAngleDoubleRight } from 'react-icons/fa';

type DynamicTabsData = {
    title?: any;
    id?: any;
}
type tabsData = {
    tabsData?: DynamicTabsData[];
    setSectionId?: any;
    heading?: string;
};
const DynamicTabs = ({ heading, tabsData, setSectionId }: tabsData) => {
    const [selectedTab, setSelectedTab] = useState<any>('#section1')
    const handleSelectedTab = (selectedId: any) => {
        setSelectedTab(selectedId)
        setSectionId(selectedId)
    }
    useEffect(() => {
        if (tabsData && tabsData.length > 0) {
            const firstTabId = tabsData[0].id;
            setSelectedTab(firstTabId);
            setSectionId(firstTabId);
        }
    }, [tabsData]);

    return (
        <>
            <div className='p-4 xl:p-6 rounded-lg border-white border bg-indigo-200/20 backdrop-blur-none shadow-md '>
                <h3 className='text-xl mb-3 font-semibold text-center'>{heading}</h3>
                <div className='divide-y-[1.5px] divide-[#ffffff]'>
                    {tabsData?.length && tabsData.map((data, index) => {
                        return (
                            <Link
                                key={index}
                                href={`#${data.id}`}
                                scroll={true}
                                onClick={() => handleSelectedTab(data?.id)}
                                className={`flex py-3 gap-5 cursor-pointer items-center ${index === tabsData.length - 1 && selectedTab !== data?.id ? 'pb-0' : 'pb-3'}
                                ${selectedTab === data?.id ? 'bg-PrimaryDark rounded-lg ps-5 pe-2 text-white' : ''}`}
                            >
                                <span className='text-lg font-light'><FaAngleDoubleRight /></span>
                                <p>{data?.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default DynamicTabs
