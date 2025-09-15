'use client';

import SidebarLayout from '@components/SidebarLayout';
import Navigation from '@components/Navigation';
import PortfolioSidebar from '@components/PortfolioSidebar';

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation left={<span>PORTFOLIO</span>} />
      <SidebarLayout sidebar={<PortfolioSidebar />} isShowingHandle defaultSidebarWidth={32}>
        {children}
      </SidebarLayout>
    </>
  );
}
