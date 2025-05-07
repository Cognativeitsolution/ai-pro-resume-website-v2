import { InnerBanner, Faq, HowToWriteResume } from '@/components';
import { BannerData, FormatData, faqs } from './data';
// =================

const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <HowToWriteResume data={FormatData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
