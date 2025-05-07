import { InnerBanner, Faq, CoverLetterFormatComp } from '@/components';
import { BannerData, CoverLetterFormatData, faqs } from './data';
// =================

const page = () => {

  return (
    <>
      <InnerBanner {...BannerData} />
      <CoverLetterFormatComp data={CoverLetterFormatData} />
      <Faq data={faqs} />
    </>
  );
};

export default page;
