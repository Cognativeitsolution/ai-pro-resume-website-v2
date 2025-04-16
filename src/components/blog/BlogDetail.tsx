'use client'
import React, { useState } from 'react'
import VerticalTabs from './blogDetailComponents/VerticalTabs'
import { blogsVerticalTabsData } from '@/app/blog/[blogId]/data';

const BlogDetail = () => {
    const [section, setSection] = useState();

    console.log(section, "i am parent page section");

    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-4'>
                        <VerticalTabs tabsData={blogsVerticalTabsData} setSection={setSection} />
                    </div>
                    <div className='col-span-8 border-2 gap-4'>
                        <div id="head1" className='h-[600px] border border-red-600'>
                            head 1
                        </div>

                        <div id="head2" className='h-[700px] border border-red-300'>
                            head 2
                        </div>

                        <div id="head3" className='h-[900px] border border-red-900'>
                            head 3
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogDetail