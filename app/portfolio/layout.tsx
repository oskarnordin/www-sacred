import PortfolioSidebar from '@components/PortfolioSidebar';
import Image from 'next/image';

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-layout">
      <main>{children}</main>
      <aside>
        <PortfolioSidebar />
        <Image
          src="/selfie.png"
          alt="Picture of Oskar"
          width={256}
          height={256}
          sizes="(max-width: 900px) 80vw, 28rem"
          style={{ width: '50%', height: 'auto', borderRadius: '50%', marginTop: '2ch' }}
          className="sidebar-selfie"
        />
      </aside>
    </div>
  );
}
