'use client';
import { InnerBanner, Faq } from '@/components';
import { BannerData, DynamicSectionData, faqs } from './data';
import DynamicSection from '@/components/dynamicSection/DynamicSection';

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
