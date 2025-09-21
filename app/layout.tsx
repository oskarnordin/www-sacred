import '@root/global.scss';
import Providers from '@components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us" suppressHydrationWarning>
      <body className="theme-light" suppressHydrationWarning>
        <div className="site-container">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
