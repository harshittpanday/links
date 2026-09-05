import type { Metadata } from 'next';
import { Geist, Press_Start_2P } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });
const pixel = Press_Start_2P({ variable: '--font-pixel', weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Harshit Pandey',
  description: 'Student, builder, and developer based in Lucknow, India.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${pixel.variable}`}>{children}</body>
    </html>
  );
}
