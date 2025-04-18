'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import BreadCrumbs from './BreadCrumbs';

type blogsVerticalTabsDat = {
    name?: any;
    id?: any;
}
type tabsData = {
    tabsData?: blogsVerticalTabsDat[];
    setSection?: any;
};
const VerticalTabs = ({ tabsData, setSection }: tabsData) => {
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

                <h3 className='text-xl mb-4 font-semibold'>In This Guide</h3>
                {tabsData?.length && tabsData.map((data) => (
                    <Link
                        key={data?.id}
                        href={data?.id}
                        scroll={true}
                        onClick={() => handleSelectedTab(data?.id)}
                        className={`flex gap-2 cursor-pointer border-b py-3 items-center ${selectedTab === data?.id ? 'bg-hamzaPrimary rounded-full ps-5 text-white' : ''}`}
                    >
                        <span className='text-lg font-light'><FaAngleDoubleRight /></span>
                        <p>{data?.name}</p>
                    </Link>
                ))}
            </div>
        </>

    )
}

export default VerticalTabs