'use client';

import SidebarLayout from '@components/SidebarLayout';
import Navigation from '@components/Navigation';
import PortfolioSidebar from '@components/PortfolioSidebar';

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-layout">
      <main>{children}</main>
      <aside>
        <PortfolioSidebar />
      </aside>
    </div>
  );
}
