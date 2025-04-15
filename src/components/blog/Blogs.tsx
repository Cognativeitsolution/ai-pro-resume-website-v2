'use client'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import CTA from '../custom/CTA'
import CustomLoader from '../loader/CustomLoader';

type BlogsProps = {
    data: any[];
};
const Blogs = ({ data }: BlogsProps) => {
    const [blogsLimit, setBlogsLimit] = useState(3);
    const [showBlogs, setShowBlogs] = useState<any>([]);
    const [showLoader, setShowLoader] = useState(true);

    const handleClick = () => {
        setBlogsLimit(blogsLimit + 3);
    }
    useEffect(() => {
        if (Array.isArray(data) && data.length) {
            setShowBlogs(data.slice(0, blogsLimit));
            setShowLoader(false);
        }
    }, [data, blogsLimit])


    return (
        <section className="py-5 md:py-10">
            <div className="container">
                <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-center">
                    All Blogs
                </h2>
                <div className="mt-10 min-h-[200px] flex justify-center items-center">
                    {showLoader ? (
                        <CustomLoader size={50} color="#9885FF" text="Fetching data..." />
                    ) : showBlogs?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {showBlogs.map((data: any, idx: any) => (
                                <BlogCard key={idx} {...data} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-xl font-semibold text-hamzaPrimary">No Data Found!</p>
                    )}
                </div>


                <div className="mt-8 lg:mt-10 flex justify-center">
                    {showBlogs?.length > 0 && <CTA
                        btn
                        text="Load More"
                        bgColor="bg-white hover:bg-primary"
                        txtColor="text-hamzaPrimary hover:text-white"
                        border="border-2 border-hamzaPrimary"
                        handleClick={handleClick}
                    />}
                </div>
            </div>
        </section>

    )
}

export default Blogs