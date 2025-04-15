import React from 'react'
import Image from 'next/image';
import blog1 from "../../../public/images/blog1.jpg";
import author1 from "../../../public/images/author1.jpg";
import verified from "../../../public/images/verified.png";

const BlogCard = () => {
    return (
        <div className="mx-auto flex flex-col rounded-2xl bg-white/30 border-2 border-white overflow-hidden shadow-lg">
            <div className='h-[300px]'>
                <Image
                    src={blog1}
                    alt="Blog 1"
                    className='w-full h-full'
                />
            </div>

            <div className="px-4 py-8">
                <p className="text-indigo-500 font-semibold text-sm mb-1">28 Mar 2025</p>
                <h3 className="text-lg font-semibold mb-2 text-zinc-800">Be the First to Hire Our Professional Animators</h3>
                <p className="text-black text-sm mb-4">Discover unparalleled creativity at Infinity Animations, your gateway to transformative visual storytelling...</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={author1}
                            alt="Blog 1"
                            className="w-10 h-10 shadow-sm border-2 border-white  rounded-full"
                        />
                        <div>
                            <p className="text-sm  text-indigo-500 flex text-center items-center font-semibold">James D. Surratt
                                <Image
                                    src={verified}
                                    alt="verifed logo"
                                    className="w-5 h-5 ms-1 rounded-full shadow-sm border-2 border-white "
                                />
                            </p>
                            <p className="text-xs text-gray-900">Animation Manager</p>
                        </div>
                    </div>
                    <div className="text-sm cursor-pointer text-gray-900 hover:text-indigo-400 flex items-center space-x-1">
                        <span className='underline'>Read More</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard