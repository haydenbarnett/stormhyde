import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
import { site } from '@/data/site';
import clsx from 'clsx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

type RootLayoutProps = {
  readonly children: ReactNode;
};

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not defined.');
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  authors: [
    {
      name: site.author,
      url: site.authorUrl,
    },
  ],
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={clsx(GeistSans.variable, GeistMono.variable, 'font-sans')}>
      <Header />
      {children}
      <Footer />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
