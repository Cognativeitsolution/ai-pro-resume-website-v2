'use client';

import { InnerBanner, Reviews, BlogDetail } from '@/components';
import { BannerData, blogDetailData } from './data';
import { reviewData } from '@/app/data';

const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <BlogDetail data={blogDetailData} />
            <Reviews data={reviewData} />
        </>
    );
};

export default page;
