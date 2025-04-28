'use client';

import { InnerBanner, Faq } from '@/components';
import { BannerData, CoverLetterFormatData, faqs } from './data';
import HowToWriteResume from '@/components/how-to-write-resume-format/HowToWriteResume';
import CoverFormatComp from '@/components/cover-letter-format/CoverLetterFormatComp';


const page = () => {

  return (
    <>
      <InnerBanner {...BannerData} />
      <CoverFormatComp data={CoverLetterFormatData} />
      <Faq data={faqs} />
    </>
  );
};

export default page;
