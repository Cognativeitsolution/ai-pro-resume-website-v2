import React from 'react'
import BlogCard from './BlogCard'
import CTA from '../custom/CTA'

const Blogs = () => {
    return (

        <section className="py-5 md:py-10">
            <div className="container">
                <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-center">
                    All Blogs
                </h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <BlogCard />
                </div>

                <div className="mt-8 lg:mt-10 flex justify-center">
                    <CTA
                        btn
                        text="Load More"
                        bgColor="bg-white hover:bg-primary"
                        txtColor="text-hamzaPrimary hover:text-white"
                        border="border-2 border-hamzaPrimary"
                    />
                </div>
            </div>
        </section>

    )
}

export default Blogs