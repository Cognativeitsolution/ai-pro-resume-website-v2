'use client';
import { InnerBanner, Faq } from '@/components';
import { BannerData, CoverLetterFormatData, faqs } from './data';
import DynamicSection from '@/components/dynamicSection/DynamicSection';

const page = () => {

  return (
    <>
      <InnerBanner {...BannerData} />
      <DynamicSection data={CoverLetterFormatData} />
      <Faq data={faqs} />
    </>
  );
};

export default page;
