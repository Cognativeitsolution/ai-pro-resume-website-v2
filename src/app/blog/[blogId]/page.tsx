'use client';
import { useParams } from 'next/navigation';
import { Client, InnerBanner, Reviews, BlogDetail } from '@/components';
import { BannerData, blogDetailData, ClientData } from './data';
import { reviewData } from '@/app/data';

const page = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <InnerBanner {...BannerData} />
            <BlogDetail data={blogDetailData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
};

export default page;
