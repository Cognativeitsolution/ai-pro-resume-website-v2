'use client';

import { Client, InnerBanner, Reviews, BlogDetail } from '@/components';
import { useParams } from 'next/navigation';
import { BannerData, ClientData } from './data';

const page = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <InnerBanner {...BannerData} />
            <BlogDetail />
            <Client data={ClientData} />
            <Reviews />
        </>
    );
};

export default page;
