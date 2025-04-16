import React from 'react';
import Image, { StaticImageData } from 'next/image';
import verifiedIcon from "../../../public/images/verified.png";
import { useRouter } from 'next/navigation';

type Blog = {
    id?: any;
    title: string;
    description: string;
    date: string;
    image: any;
    author_name: string;
    author_designation: string;
    author_image?: any;
    verified?: boolean;
};

const BlogCard = ({
    title,
    description,
    date,
    image,
    author_name,
    author_designation,
    author_image,
    verified = false,
    id,
}: Blog) => {
    const router = useRouter();

    const goToBlogDetail = () => {
        console.log(id);
        router.push(`/blog/${id}`)
    }

    return (
        <div onClick={goToBlogDetail} className="mx-auto flex flex-col rounded-2xl bg-white/30 border-2 border-white overflow-hidden shadow-lg">
            <div className="h-[300px]">
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="px-4 py-8">
                <p className="text-indigo-500 font-semibold text-sm mb-1">{date}</p>
                <h3 className="text-lg font-semibold mb-2 text-zinc-800">{title}</h3>
                <p className="text-black text-sm mb-4">{description}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={author_image}
                            alt={author_name}
                            className="w-10 h-10 shadow-sm border-2 border-white rounded-full"
                        />
                        <div>
                            <p className="text-sm text-indigo-500 flex items-center font-semibold">
                                {author_name}
                                {verified && (
                                    <Image
                                        src={verifiedIcon}
                                        alt="Verified icon"
                                        className="w-5 h-5 ms-1 rounded-full shadow-sm border-2 border-white"
                                    />
                                )}
                            </p>
                            <p className="text-xs text-gray-900">{author_designation}</p>
                        </div>
                    </div>
                    <div className="text-sm cursor-pointer text-gray-900 hover:text-indigo-400 flex items-center space-x-1">
                        <span className="underline">Read More</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
