'use client';

import { useParams } from 'next/navigation';

const BlogDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            Blog detail page for ID: <strong>{params.blogId}</strong>
        </div>
    );
};

export default BlogDetail;
