"use client"
import React from 'react';
import { MainHeader, ReferHeader } from "@/components";
import { useReferHeader } from "@/context/ReferHeaderContext"; 

const Header = () => {
  // Access the context values using the hook
  const { showReferHeader, setShowReferHeader } = useReferHeader();

  return (
    <header className={`w-full z-[999] rounded-none ${showReferHeader ? 'h-[120px] md:h-[100px] lg:h-[120px] mt-0' : 'h-[60px] md:h-[60px] lg:h-[80px] mt-5'} flex flex-col fixed top-0 left-0`}>
      {/* ReferHeader visibility controlled via context */}
      <ReferHeader isVisible={showReferHeader} onClose={() => setShowReferHeader(false)} />
      <MainHeader />
    </header>
  );
};

export default Header;
