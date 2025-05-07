import { InnerBanner, Faq, DynamicSection } from '@/components';
import { BannerData, DynamicSectionData, faqs } from './data';
// =================

const page = () => {

    return (
        <>
            <InnerBanner {...BannerData} />
            <DynamicSection data={DynamicSectionData} />
            <Faq data={faqs} />
        </>
    );
};

export default page;
